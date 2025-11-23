import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // List of valid routes
  const validRoutes = ['/', '/cookies', '/privacy', '/terms'];

  // Check if the pathname is valid
  const isValidRoute = validRoutes.includes(pathname) || 
                       pathname.startsWith('/_next') || 
                       pathname.startsWith('/api') ||
                       pathname.match(/\.(ico|png|jpg|jpeg|svg|gif|webp|css|js)$/);

  // If not a valid route, redirect to homepage
  if (!isValidRoute) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};
