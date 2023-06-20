import { NextRequest, NextResponse } from 'next/server'

export async function middleware(req: NextRequest) {
  const res = NextResponse.next()

  if (req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/account', req.url))
  }

  return res
}

export const config = {
  matcher: ['/', '/account'],
}
