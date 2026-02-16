import { z } from 'zod';

export const deliveryTypeSchema = z.enum(['PICKUP', 'DELIVERY', 'DINE_IN']);
export const paymentMethodSchema = z.enum(['CASH', 'CARD', 'TRANSFER']);

export const orderItemSchema = z.object({
    productId: z.string().cuid(),
    quantity: z.number().int().min(1),
});

export const createOrderSchema = z.object({
    deliveryType: deliveryTypeSchema,
    address: z.object({
        street: z.string().optional(),
        city: z.string().optional(),
        zip: z.string().optional(),
    }).optional(),
    notes: z.string().max(500).optional(),
    items: z.array(orderItemSchema).min(1),
    paymentMethod: paymentMethodSchema,
});

export const updateOrderStatusSchema = z.object({
    status: z.enum(['PENDING', 'CONFIRMED', 'PREPARING', 'READY', 'DELIVERED', 'CANCELLED']),
});
