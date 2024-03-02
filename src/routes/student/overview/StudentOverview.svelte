<script lang="ts" context="module">
    
    import { fetchAllSubjects } from "$script/api";

    // TODO: get the list of subjects from the server
    async function getInitialFilterConfig(): Promise<FilterConfig | undefined> {
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
    
    import { onMount } from "svelte";
    import Header from "$comp/Header.svelte";
    import TabBar from "$comp/TabBar.svelte";
    import FilterHeader, { type FilterConfig, defaultFilterConfig } from "$comp/filters/FilterHeader.svelte";
    import FilterBody from "$comp/filters/FilterBody.svelte";
    import FeedContent from "$comp/feed/FeedContent.svelte";
    import HomeworkContent from "./homework/HomeworkContent.svelte";

    let filterConfig: FilterConfig = defaultFilterConfig();
    let currentTab: number = 0;

    function onTabSelected(e: CustomEvent): void {
        currentTab = e.detail.index;
        filterConfig.dateFilterEnabled = e.detail.index == 1;
    }

    onMount(async () => {
        const fc = await getInitialFilterConfig();
        if (fc == undefined) return;
        
        filterConfig = fc;
    });

    // $: console.log(filterConfig);
    
</script>

<main>

    <Header />

    <div class="content">

        <FilterHeader bind:filterConfig={filterConfig} />

        <TabBar
            tabNames={["Feed", "Homework", "All Marks", "Timetable", "[Placeholder]"]}
            on:tabSelected={onTabSelected}
        />

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
