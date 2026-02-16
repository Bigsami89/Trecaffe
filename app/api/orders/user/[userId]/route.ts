import { NextResponse } from 'next/server';
import { orderService } from '@/lib/services/order.service';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ userId: string }> }
) {
    try {
        const { userId } = await params;
        const orders = await orderService.getUserOrders(userId);
        return NextResponse.json(orders);
    } catch (error) {
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
