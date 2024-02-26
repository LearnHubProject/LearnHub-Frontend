<script lang="ts" context="module">

    export interface FilterConfig {
        showSubjectFilter: boolean,
        subjectsSelection: Map<string, boolean>, // TODO: map key should be different

        dateFilterEnabled: boolean,
        showDateFilter: boolean,
        date?: Date
    }

    export function defaultFilterConfig(): FilterConfig {
        return {
            showSubjectFilter: true,
            subjectsSelection: new Map<string, boolean>(),

            dateFilterEnabled: true,
            showDateFilter: false,
        };
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
