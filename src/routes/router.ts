//@ts-nocheck

// To be added
export const ROUTES = [
    '/',
    '/about',
    '/privacy',
    '/tos',
    '/overview'
] as const;

export type Route = (typeof ROUTES)[number];

// TODO: if there's a valid token, route to '/overview'
export function routeApp(): Route {

    const path = location.pathname;

    if (!ROUTES.includes(path)) return '/';

    return path;

}
