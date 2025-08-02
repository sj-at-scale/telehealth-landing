import createMiddleware from 'next-intl/middleware';

export default createMiddleware({
  locales: ['ko', 'zh'],
  defaultLocale: 'ko'
});

export const config = {
  matcher: ['/', '/(ko|zh)/:path*']
};