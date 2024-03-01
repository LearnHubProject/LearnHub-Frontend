<script lang="ts" context="module">
    
    import { fetchAllSubjects } from "../../../scripts/subject";

    // TODO: get the list of subjects from the server
    async function getInitialFilterConfig(): Promise<FilterConfig> {
        const c = defaultFilterConfig();

        const subjects = await fetchAllSubjects();

        subjects.forEach((s) => {
            c.subjectsSelection.set(s.title, true);
        });

        return c;
    }

</script>

<script lang="ts">
    
    import { onMount } from "svelte";
    import Header from "../../../components/Header.svelte";
    import TabBar, { type TabName, TABS } from "../../../components/TabBar.svelte";
    import FilterHeader, { type FilterConfig, defaultFilterConfig } from "./filters/FilterHeader.svelte";
    import FilterBody from "./filters/FilterBody.svelte";
    import FeedContent from "./feed/FeedContent.svelte";
    import HomeworkContent from "./homework/HomeworkContent.svelte";

    let filterConfig: FilterConfig = defaultFilterConfig();
    let currentTab: number = 0;

    function onTabSelected(e: CustomEvent): void {
        currentTab = e.detail.index;
        filterConfig.dateFilterEnabled = e.detail.index == 1;
    }

    onMount(async () => {
        filterConfig = await getInitialFilterConfig();
    });

    // $: console.log(filterConfig);
    
</script>

<main>

    <Header />

    <div class="content">

        <FilterHeader bind:filterConfig={filterConfig} />

        <TabBar on:tabSelected={onTabSelected} />

        <FilterBody bind:filterConfig={filterConfig} />

        {#if currentTab === 0 }

            <FeedContent />

        {:else if currentTab === 1}

            <HomeworkContent />
        
        {:else if currentTab === 2}

            <!-- TODO: "All Marks" content -->

        {:else if currentTab === 3}

            <!-- TODO: "Timetable" content -->

        {:else if currentTab === 4}

            <!-- Placeholder -->

        {:else}

            <div style="color: red;">Error</div>

        {/if}

    </div>

</main>

<style>
    
    .content {
        display: grid;
        grid-template-columns: max-content max-content;
        grid-template-rows: max-content max-content;
        row-gap: 15px;
        column-gap: 20px;
        margin: 0 249px 0 249px;
    }

</style>
