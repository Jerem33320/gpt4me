import { NextResponse, NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname.startsWith('/chat')) {
    return NextResponse.rewrite(new URL('/chat', request.url))
  }
}

export const config = {
  matcher: ['/chat/:path*'],
};