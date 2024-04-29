import { NextResponse } from 'next/server';
import { NextApiRequest } from 'next';

export default function RootPage(req: NextApiRequest) {
  return NextResponse.redirect('https://localhost:3000/en');
}
