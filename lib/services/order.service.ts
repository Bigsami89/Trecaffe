import { prisma } from '@/lib/utils/prisma';
import { CreateOrderInput } from '@/app/api/orders/create/route'; // We will define this type locally or in a shared types file
import { inventoryService } from './inventory.service';
import { notificationService } from './notification.service';
import { NotFoundError } from '@/lib/utils/errors';
import { OrderStatus } from '@prisma/client';

// Should potentially move this to a types file
export interface CreateOrderDTO {
    userId?: string;
    items: { productId: string; quantity: number }[];
    deliveryType: 'PICKUP' | 'DELIVERY' | 'DINE_IN';
    paymentMethod: 'CASH' | 'CARD' | 'TRANSFER';
    address?: any;
    notes?: string;
}

export class OrderService {
    async createOrder(data: CreateOrderDTO) {
        // 1. Validate Inventory
        await inventoryService.validateStock(data.items);

        // 2. Calculate Total & Prepare Items
        const products = await prisma.product.findMany({
            where: { id: { in: data.items.map(i => i.productId) } },
        });

        const productMap = new Map(products.map(p => [p.id, p]));
        let total = 0;

        const orderItemsData = data.items.map(item => {
            const product = productMap.get(item.productId);
            if (!product) throw new NotFoundError(`Product ${item.productId} not found`);

            const price = Number(product.price);
            total += price * item.quantity;

            return {
                productId: item.productId,
                quantity: item.quantity,
                price: price,
            };
        });

        // 3. Create Order Transaction
        const order = await prisma.$transaction(async (tx) => {
            const newOrder = await tx.order.create({
                data: {
                    userId: data.userId,
                    status: 'PENDING',
                    deliveryType: data.deliveryType,
                    address: data.address ?? {},
                    notes: data.notes,
                    total: total,
                    items: {
                        create: orderItemsData,
                    },
                    payment: {
                        create: {
                            method: data.paymentMethod,
                            amount: total,
                            status: 'PENDING',
                        }
                    }
                },
                include: { items: true, payment: true },
            });

            return newOrder;
        });

        // 4. Send Notification (Async)
        // if (data.userId) { // Fetch user email if needed }

        return order;
    }

    async getOrder(id: string) {
        const order = await prisma.order.findUnique({
            where: { id },
            include: {
                items: { include: { product: true } },
                payment: true
            },
        });

        if (!order) throw new NotFoundError('Order not found');
        return order;
    }

    async getUserOrders(userId: string) {
        return prisma.order.findMany({
            where: { userId },
            include: {
                items: { include: { product: true } },
                payment: true
            },
            orderBy: { createdAt: 'desc' },
        });
    }

    async updateStatus(id: string, status: OrderStatus) {
        const order = await prisma.order.update({
            where: { id },
            data: { status }
        });

        // Notify user
        // await notificationService.sendStatusUpdate(id, status);

        return order;
    }
}

export const orderService = new OrderService();
