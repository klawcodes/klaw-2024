import { NextResponse } from 'next/server';

export const GET = (req: Request) => {
	return NextResponse.redirect('https://localhost:3000/en');
}
