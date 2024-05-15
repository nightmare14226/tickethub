import createMiddleware from 'next-intl/middleware';

const middleware = createMiddleware({
    locales: ['en', 'es', 'ka', 'ru'],
    defaultLocale: 'en'
})

export default middleware;
export const config = {
    matcher: ['/', '/(en|es|ka|ru)/:page*']
}