import type { Token } from "./token"

export const USER_ROLES = [
    'student',
    'parent',
    'teacher',
    'admin'
] as const;

export type UserRole = (typeof USER_ROLES)[number];

export interface User {
    role: UserRole;
    token?: Token;
}

export let user: User = {
    role: 'teacher',
    token: undefined
};

user.token = ""; // CAUTION! For testing purposes only!
