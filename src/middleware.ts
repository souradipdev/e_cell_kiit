import {NextRequest, NextResponse} from 'next/server';

async function wait() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("");
    }, 500);
  });
}

export async function middleware(request: NextRequest) {
  await wait();
  return NextResponse.next();
}

export const config = {
  matcher: '/api/:path*',
};
