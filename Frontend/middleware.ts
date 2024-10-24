import { NextRequest, NextResponse } from "next/server";

export async function middleware(request: NextRequest) {
  let session = request.cookies.get("token");
  if (!session) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
}

export const config = {
  matcher: ["/admin/:path*"],
};
