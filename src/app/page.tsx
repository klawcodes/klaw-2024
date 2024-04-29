import { NextResponse } from 'next/server';
import { IncomingMessage } from 'http';

export default function RootPage(req: IncomingMessage) {
  return NextResponse.redirect('https://localhost:3000/en');
}
