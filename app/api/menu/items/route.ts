import { NextResponse } from 'next/server';
import { prisma } from '@/lib/utils/prisma';
import { z } from 'zod';

const searchSchema = z.object({
    category: z.string().optional(),
    available: z.string().transform((val) => val === 'true').optional(),
    page: z.string().transform(Number).default('1'),
    limit: z.string().transform(Number).default('20'),
});

export async function GET(request: Request) {
    try {
        const { searchParams } = new URL(request.url);
        const rawParams = Object.fromEntries(searchParams);
        const params = searchSchema.parse(rawParams);

        const where: any = {};
        if (params.category) where.category = { slug: params.category };
        if (params.available !== undefined) where.available = params.available;

        const [items, total] = await Promise.all([
            prisma.product.findMany({
                where,
                skip: (params.page - 1) * params.limit,
                take: params.limit,
                include: { category: true },
            }),
            prisma.product.count({ where }),
        ]);

        return NextResponse.json({
            data: items,
            meta: {
                total,
                page: params.page,
                limit: params.limit,
                totalPages: Math.ceil(total / params.limit),
            },
        });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: 'Validation failed', details: error.errors }, { status: 400 });
        }
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
