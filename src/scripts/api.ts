import { USER_ROLES, type UserRole } from "$script/user";
import type { Token } from "./token";
import type { Subject } from "./subject"
import type { JournalCardProps } from "src/routes/teacher/overview/journals/JournalCard.svelte";

// Makes the API calls return predetermined data instead of making a request to the server.
const DEV_MODE = false;

// "Borrowed" from: https://stackoverflow.com/questions/46155/how-can-i-validate-an-email-address-in-javascript 
const EMAIL_REGEX = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

type ServerResponse<T> = {
    successful: true,
    data?: T
} | {
    successful: false,
    error?: string
}

async function serverRequest(url: string, method: 'GET' | 'POST', data: object): Promise<ServerResponse<any>> {
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
    
    return { successful: err === undefined, data: resp, error: err };
}

// ======================================================

type RegisterResponse = ServerResponse<{
    token: Token
}>

export async function registerRequest(email: string, password: string): Promise<RegisterResponse> {
    if (DEV_MODE) {
        return { successful: true, data: { token: "abcdef" } };
    }
    
    return { successful: false };
}

// ======================================================

type LoginResponse = ServerResponse<{
    token: Token,
    role: UserRole
}>

// TODO: real login
export async function loginRequest(email: string, password: string): Promise<LoginResponse> {
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

type SubjectFetchResponse = ServerResponse<{
    subjects: Subject[]
}>

let subjectsCache: Subject[];

export async function fetchAllSubjects(token: Token, ignoreCache: boolean = false): Promise<SubjectFetchResponse> {
    if (!ignoreCache && subjectsCache !== undefined) return { successful: true, data: { subjects: subjectsCache } };
    
    if (DEV_MODE || true) {
        subjectsCache = [
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
        ];
        return { successful: true, data: { subjects: subjectsCache } };
    }
    
    const resp = await serverRequest("/api/subjects", 'GET', { token });

    if (!resp.successful) {
        return resp;
    }

    subjectsCache = resp.data.subjects;
    
    return { successful: true, data: { subjects: subjectsCache } };
}

// ======================================================

// TODO: remove, the same data can be acquired via fetchJournals

type ClassesFetchResponse = ServerResponse<{
    classes: string[]
}>

let classesTaughtCache: string[];

export async function fetchClassesTaught(token: Token, ignoreCache: boolean): Promise<ClassesFetchResponse> {
    if (!ignoreCache && classesTaughtCache !== undefined) return { successful: true, data: { classes: classesTaughtCache } };
    
    if (DEV_MODE || true) {
        classesTaughtCache = [
            "11ED"
        ];
    }

    const resp = await serverRequest("/api/classes", 'GET', { token });
    
    if (!resp.successful) {
        return resp;
    }

    classesTaughtCache = resp.data.classes;

    return { successful: true, data: { classes: classesTaughtCache } };
}

// ======================================================

type JournalsFetchResponse = ServerResponse<{
    journals: JournalCardProps[]
}>

let journalsCache: JournalCardProps[];

export async function fetchJournals(token: Token, ignoreCache: boolean = false): Promise<JournalsFetchResponse> {
    if (!ignoreCache && classesTaughtCache !== undefined) return { successful: true, data: { journals: journalsCache } };

    if (DEV_MODE || true) {
        journalsCache = [
            {
                title: "Chemistry",
                course: "1. course",
                className: "11ED",
                journalID: ""
            },
            {
                title: "Mathematics",
                course: "7. course",
                className: "12ALG",
                journalID: ""
            },
            {
                title: "History",
                course: "1. course",
                className: "9G",
                journalID: ""
            },
            {
                title: "English",
                course: "1. course",
                className: "8V",
                journalID: ""
            }
        ];
        return { successful: true, data: { journals: journalsCache } };
    }

    const resp = await serverRequest("/api/journals", 'GET', { token });
    
    if (!resp.successful) {
        return resp;
    }

    journalsCache = resp.data.journals;

    return { successful: true, data: { journals: journalsCache } };
}
