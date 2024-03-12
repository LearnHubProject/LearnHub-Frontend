<script lang="ts" context="module">

    import { fetchAllSubjects } from "$script/api";
    import type { Token } from "$script/token";

    export interface FilterConfig {
        subjects: {
            show: boolean,
            selection: Map<string, boolean>, // key = JSON.stringify(subject)
        },

        classes: {
            enabled: boolean,
            show: boolean,
            selection: Map<string, boolean>, // key = class name
        },

        date: {
            enabled: boolean,
            show: boolean,
            date?: Date
        }
    }

    export function defaultFilterConfig(): FilterConfig {
        return {
            subjects: {
                show: true,
                selection: new Map<string, boolean>()
            },
            classes: {
                enabled: false,
                show: false,
                selection: new Map<string, boolean>()
            },
            date: {
                enabled: false,
                show: false
            }
        };
    }

    // TODO: decide if it's worth having this function at all
    export async function getInitialFilterConfig(token: Token): Promise<FilterConfig | undefined> {
        const c = defaultFilterConfig();

        const resp = await fetchAllSubjects(token);

        if (!resp.successful) {
            console.error(resp.error);
            return;
        }

        // Every subject is selected by default
        resp.data!.subjects.forEach((s) => {
            c.subjects.selection.set(JSON.stringify(s), true);
        });

        return c;
    }

</script>

<script lang="ts">

    export let filterConfig: FilterConfig = defaultFilterConfig();

</script>

<main>

    <button title="Toggle subject filter" on:click={() => filterConfig.subjects.show = !filterConfig.subjects.show}>
        Filters
        <img src="./icons/filter_list.svg" alt="subject" />
    </button>

    {#if filterConfig.date.enabled}
    
        <button title="Toggle date filter" on:click={() => filterConfig.date.show = !filterConfig.date.show}>
            <img src="./icons/calendar.svg" alt="date">
        </button>
    
    {/if}

    {#if filterConfig.classes.enabled}

        <button title="Toggle class filter" on:click={() => filterConfig.classes.show = !filterConfig.classes.show}>
            <img src="./icons/class.svg" alt="class">
        </button>

    {/if}

</main>

<style>

    main {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin: 0 20px 0 20px;
    }
    
    button {
        display: flex;
        align-items: center;
        gap: 15px;
        color: var(--cl-medium-emphasis);
        font-weight: 500;
        font-size: 24px;
    }

</style>
