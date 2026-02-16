import { NextResponse } from 'next/server';
import { prisma } from '@/lib/utils/prisma';
import { NotFoundError } from '@/lib/utils/errors';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> } // params is a Promise in Next.js 15+ (and 16)
) {
    try {
        const { id } = await params;

        const product = await prisma.product.findUnique({
            where: { id },
            include: { category: true },
        });

        if (!product) {
            return NextResponse.json({ error: 'Product not found' }, { status: 404 });
        }

        return NextResponse.json(product);
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
