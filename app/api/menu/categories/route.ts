import { NextResponse } from 'next/server';
import { prisma } from '@/lib/utils/prisma';

export async function GET() {
    try {
        const categories = await prisma.category.findMany({
            orderBy: { order: 'asc' },
            include: {
                _count: {
                    select: { products: true },
                },
            },
        });

        return NextResponse.json(categories);
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
