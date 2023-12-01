import { NextResponse } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request) {
  console.log("haha");
  return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
  matcher: "/resume",
};
