import { USER_ROLES, type UserRole } from "../App.svelte";
import type { Token } from "./token";

const DEV_MODE = true;

// "Borrowed" from: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript 
const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

type ServerResponce<T> = {
    successful: true,
    data?: T
} | {
    successful: false,
    error?: string
}

// ======================================================

type RegisterResponce = ServerResponce<{
    token: Token
}>

export async function registerRequest(email: string, password: string): Promise<RegisterResponce> {
    if (DEV_MODE) {
        return { successful: true, data: { token: "abcdef" } };
    }
    
    return { successful: false };
}

// ======================================================

type LoginResponce = ServerResponce<{
    token: Token,
    role: UserRole
}>

// TODO: real login
export async function loginRequest(email: string, password: string): Promise<LoginResponce> {
    if (DEV_MODE) {
        return { successful: true, data: { token: "abcdef", role: 'student' } };
    }
    
    if (email.length > 255 || !email.match(EMAIL_REGEX)) {
        return { successful: false, error: "Invalid email." };
    }
    if (password.length > 255) {
        return { successful: false, error: "Password too long." };
    }

    let err;
    const resp = await fetch("/api/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    })
        .then(r => r.json())
        .catch(e => {
            err = e;
        });
    
    if (err != undefined) {
        return { successful: false, error: err };
    }
    if (USER_ROLES.findIndex(resp.role) === -1) {
        return { successful: false, error: `Invalid user role returned from the server: ${resp.role}` };
    }
    
    return { successful: true, data: { token: resp.token, role: resp.role } };
}

// ======================================================