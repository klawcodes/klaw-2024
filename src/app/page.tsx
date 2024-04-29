import { NextResponse } from 'next/server';

export default function RootPage(req: Request) {
  return NextResponse.redirect('https://localhost:3000/en');
}