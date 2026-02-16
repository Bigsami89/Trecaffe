import { NextResponse } from 'next/server';
// In a real app, this would verify the JWT token from cookies

export async function GET(request: Request) {
    // Mock session check
    return NextResponse.json({ user: null, message: 'Not authenticated' });
}
