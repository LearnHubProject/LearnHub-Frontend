<script lang="ts">

    import { onMount } from "svelte";
    import OverviewTemplate from "$comp/OverviewTemplate.svelte";
    import TabBar from "$comp/TabBar.svelte";
    import FilterHeader, { type FilterConfig, defaultFilterConfig, getInitialFilterConfig } from "$comp/filters/FilterHeader.svelte";
    import FilterBody from "$comp/filters/FilterBody.svelte";
    import FeedContent from "$comp/feed/FeedContent.svelte";

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

</script>

<OverviewTemplate>

    <FilterHeader bind:filterConfig={filterConfig} />

    <TabBar
        tabNames={["Feed", "Homework", "All Marks", "Timetable", "[Placeholder]"]}
        on:tabSelected={onTabSelected}
    />

    <FilterBody bind:filterConfig={filterConfig} />

    {#if currentTab === 0 }

        <FeedContent />

    {:else if currentTab === 1}

        <!-- <HomeworkContent /> -->
        
    {:else if currentTab === 2}

        <!-- TODO: "All Marks" content -->

    {:else if currentTab === 3}

        <!-- TODO: "Timetable" content -->

    {:else if currentTab === 4}

        <!-- Placeholder -->

    {:else}

        <div style="color: red;">Error</div>

    {/if}

</OverviewTemplate>
