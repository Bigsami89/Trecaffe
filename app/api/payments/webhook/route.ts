import { NextResponse } from 'next/server';
import { paymentService } from '@/lib/services/payment.service';

export async function POST(request: Request) {
    try {
        const body = await request.text(); // Webhooks often need raw body for signature verification
        // In a real app, we would verify the Stripe signature header here

        const event = JSON.parse(body); // Mock parsing for now
        await paymentService.handleWebhook(event);

        return NextResponse.json({ received: true });
    } catch (error) {
        return NextResponse.json({ error: 'Webhook Error' }, { status: 400 });
    }
}
