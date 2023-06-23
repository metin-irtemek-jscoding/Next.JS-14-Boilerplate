import { NextResponse } from 'next/server';

import { Languages, Locale } from '@/lang/languages';

export const config = {
  matcher: '/:lng*',
};

const cookieName = 'i18next';

export function middleware(req: any) {
  let lng: Locale = Languages.defaultLocale;
  if (req.cookies.has(cookieName))
    lng =
      req.cookies.get(cookieName).value === Languages.locales[1]
        ? Languages.locales[1]
        : Languages.locales[0];

  if (
    !Languages.locales.some((loc) =>
      req.nextUrl.pathname.startsWith(`/${loc}`),
    ) &&
    !req.nextUrl.pathname.startsWith('/_next') &&
    !req.nextUrl.pathname.startsWith('/api/') &&
    !req.nextUrl.pathname.startsWith('/images/')
  ) {
    return NextResponse.redirect(
      new URL(`/${lng}${req.nextUrl.pathname}`, req.url),
    );
  }

  if (req.headers.has('referer')) {
    const response = NextResponse.next();
    return response;
  }

  return NextResponse.next();
}
