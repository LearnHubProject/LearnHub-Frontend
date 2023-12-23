//@ts-nocheck

export const ROUTES = [
    '/',
    '/overview'
] as const;

// To be added
export type Route = typeof ROUTES[number];

// TODO: if there's a valid token, route to '/overview'
export function routeApp(): Route {

    const path = location.pathname;

    if (!ROUTES.includes(path)) return '/';

    return path;

}
