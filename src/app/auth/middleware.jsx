const { NextResponse } = require('next/server');

function middleware(request) {
  const token = request.cookies.get('auth-token');

  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  return NextResponse.next();
}

module.exports = middleware;

module.exports.config = {
  matcher: ['/dashboard/:path*'], // Protect the dashboard route
};
