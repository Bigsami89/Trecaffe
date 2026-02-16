import { NextResponse } from 'next/server';
import { paymentService } from '@/lib/services/payment.service';
import { z } from 'zod';

const createIntentSchema = z.object({
    amount: z.number().positive(),
    currency: z.string().default('mxn'),
});

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { amount, currency } = createIntentSchema.parse(body);

        const intent = await paymentService.createPaymentIntent(amount, currency);

        return NextResponse.json(intent);
    } catch (error) {
        if (error instanceof z.ZodError) {
            return NextResponse.json({ error: 'Validation failed', details: error.errors }, { status: 400 });
        }
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
