import { NextResponse } from "next/server";

import { Languages, Locale } from "@/lang/languages";

export const config = {
  matcher: "/((?!api|_next/static|_next/image|robot.txt).*)",
};

const cookieName = "lang";

export function middleware(req: any) {
  let lang: Locale = Languages.defaultLocale;
  if (req.cookies.has(cookieName)) {
    const hasLang = Languages.locales.some(
      (item) => item === req.cookies.get(cookieName)
    );
    lang = hasLang ? req.cookies.get(cookieName) : Languages.defaultLocale;
  }

  if (
    !Languages.locales.some((loc) =>
      req.nextUrl.pathname.startsWith(`/${loc}`)
    ) &&
    !req.nextUrl.pathname.startsWith("/_next") &&
    !req.nextUrl.pathname.startsWith("/api/") &&
    !req.nextUrl.pathname.startsWith("/images/")
  ) {
    return NextResponse.redirect(
      new URL(`/${lang}${req.nextUrl.pathname}`, req.url)
    );
  }

  if (req.headers.has("referer")) {
    const response = NextResponse.next();
    return response;
  }

  return NextResponse.next();
}
