export interface Subject {
    category: string,
    title: string
}

let subjectsCache: Set<Subject>;

// TODO: fetch from the server
export async function fetchAllSubjects(ignoreCache: boolean = false): Promise<Set<Subject>> {
    if (!ignoreCache && subjectsCache !== undefined) return subjectsCache;
    
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

    return subjectsCache;
}
