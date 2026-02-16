import { prisma } from '@/lib/utils/prisma';
import { NotFoundError, ValidationError } from '@/lib/utils/errors';

export class InventoryService {
    /**
     * Checks if a list of products are available in the requested quantities.
     * For this MVP, we assume infinite stock if 'available' is true.
     */
    async validateStock(items: { productId: string; quantity: number }[]) {
        const productIds = items.map((i) => i.productId);

        const products = await prisma.product.findMany({
            where: {
                id: { in: productIds },
                available: true,
            },
            select: { id: true, name: true },
        });

        if (products.length !== productIds.length) {
            const foundIds = new Set(products.map((p) => p.id));
            const missingIds = productIds.filter((id) => !foundIds.has(id));
            throw new ValidationError(`Products not available or not found: ${missingIds.join(', ')}`);
        }

        return true;
    }
}

export const inventoryService = new InventoryService();
