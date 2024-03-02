<script lang="ts" context="module">

    import { fetchAllSubjects } from "$script/api";

    export interface FilterConfig {
        showSubjectFilter: boolean,
        subjectsSelection: Map<string, boolean>, // key = JSON.stringify(subject)

        dateFilterEnabled: boolean,
        showDateFilter: boolean,
        date?: Date
    }

    export function defaultFilterConfig(): FilterConfig {
        return {
            showSubjectFilter: true,
            subjectsSelection: new Map<string, boolean>(),

            dateFilterEnabled: false,
            showDateFilter: false,
        };
    }

    export async function getInitialFilterConfig(): Promise<FilterConfig | undefined> {
        const c = defaultFilterConfig();

        const resp = await fetchAllSubjects(""); // TODO: real token

        if (!resp.successful) {
            console.error(resp.error);
            return;
        }

        resp.data!.subjects.forEach((s) => {
            c.subjectsSelection.set(JSON.stringify(s), true);
        });

        return c;
    }

</script>

<script lang="ts">

    export let filterConfig: FilterConfig = defaultFilterConfig();

</script>

<main>

    <button title="Toggle subject filter" on:click={() => filterConfig.showSubjectFilter = !filterConfig.showSubjectFilter}>
        Filters
        <img src="./icons/filter_list.svg" alt="" />
    </button>

    {#if filterConfig.dateFilterEnabled}
    
        <button title="Toggle date filter" on:click={() => filterConfig.showDateFilter = !filterConfig.showDateFilter}>
            <img src="./icons/calendar.svg" alt="">
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
