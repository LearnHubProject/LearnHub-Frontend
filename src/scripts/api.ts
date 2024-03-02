import { USER_ROLES, type UserRole } from "../App.svelte";
import type { Token } from "./token";
import type { Subject } from "./subject"

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

async function serverRequest(url: string, method: 'GET' | 'POST', data: object): Promise<ServerResponce<any>> {
    let err;
    const resp = await fetch(url, {
        method,
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    })
        .then(r => r.json())
        .catch(e => {
            err = e;
        });
    
    return { successful: err == undefined, data: resp, error: err };
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

    const resp = await serverRequest("/api/login", 'POST', { email, password });
    
    if (resp.successful && USER_ROLES.findIndex(resp.data.role) === -1) {
        return { successful: false, error: `Invalid user role returned from the server: ${resp.data.role}` };
    }
    
    return resp;
}

// ======================================================

type SubjectFetchResponce = ServerResponce<{
    subjects: Set<Subject>
}>

let subjectsCache: Set<Subject>;

export async function fetchAllSubjects(token: Token, ignoreCache: boolean = false): Promise<SubjectFetchResponce> {
    if (!ignoreCache && subjectsCache !== undefined) return { successful: true, data: { subjects: subjectsCache } };
    
    // TODO: fetch from the server
    subjectsCache = new Set([
        {
            category: "GAC",
            title: 'Chemistry'
        },
        {
            category: "GAC",
            title: "Physics"
        },
        {
            category: "Valik",
            title: "CAE"
        }
    ]);

    return { successful: true, data: { subjects: subjectsCache } };
}
