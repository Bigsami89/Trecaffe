import { NextResponse } from 'next/server';
import { createOrderSchema } from '@/lib/utils/validation';
import { orderService } from '@/lib/services/order.service';
import { ValidationError, NotFoundError } from '@/lib/utils/errors';
import { z } from 'zod';

export type CreateOrderInput = z.infer<typeof createOrderSchema>;

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const validatedData = createOrderSchema.parse(body);

        const order = await orderService.createOrder({
            ...validatedData,
            // In a real app, we extract userId from session/token
            // userId: session?.user?.id 
        });

        return NextResponse.json(order, { status: 201 });
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: 'Validation failed', details: error.errors }, { status: 400 });
        }
        if (error instanceof ValidationError) {
            return NextResponse.json({ error: error.message }, { status: 400 });
        }
        if (error instanceof NotFoundError) {
            return NextResponse.json({ error: error.message }, { status: 404 });
        }
        console.error(error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
