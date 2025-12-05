import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function proxy(request: NextRequest) {
    const accessToken = request.cookies.get('accessToken')?.value;

    // Protected routes - require authentication
    if (request.nextUrl.pathname.startsWith('/admin')) {
        if (!accessToken) {
            // Redirect to login if not authenticated
            const loginUrl = new URL('/login', request.url);
            loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
            return NextResponse.redirect(loginUrl);
        }
    }

    // Public routes - redirect to admin if already authenticated
    if (request.nextUrl.pathname === '/login') {
        if (accessToken) {
            return NextResponse.redirect(new URL('/admin', request.url));
        }
    }

    return NextResponse.next();
}

// Configure which paths the proxy should run on
export const config = {
    matcher: [
        '/admin/:path*',
        '/login',
    ],
};
