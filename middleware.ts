import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const authToken = request.cookies.get("authToken");

  if (!authToken) {
    return NextResponse.redirect(new URL("/masuk", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/pemodal", "/penerbit", "/purchase/:path*", "/dashboard/:path*"], // Daftar halaman yang memerlukan authentikasi
};
