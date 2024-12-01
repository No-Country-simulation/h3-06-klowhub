import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
  console.log('req.nextUrl.pathname:', req.nextUrl.pathname);
  return NextResponse.json({ message: 'hola mundo' });
}
