import { NextResponse } from 'next/server';
import { orderService } from '@/lib/services/order.service';
import { updateOrderStatusSchema } from '@/lib/utils/validation';
import { NotFoundError } from '@/lib/utils/errors';
import { z } from 'zod';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const order = await orderService.getOrder(id);
        return NextResponse.json(order);
    } catch (error) {
        if (error instanceof NotFoundError) {
            return NextResponse.json({ error: error.message }, { status: 404 });
        }
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function PATCH(
    request: Request,
    { params }: { params: Promise<{ id: string }> }
) {
    try {
        const { id } = await params;
        const body = await request.json();
        const { status } = updateOrderStatusSchema.parse(body);

        // Add Admin check middleware here

        const updatedOrder = await orderService.updateStatus(id, status as any);
        return NextResponse.json(updatedOrder);
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: 'Validation failed', details: error.errors }, { status: 400 });
        }
        if (error instanceof NotFoundError) {
            return NextResponse.json({ error: error.message }, { status: 404 });
        }
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
