<script lang="ts">
    
    import { onMount } from "svelte";
    import OverviewTemplate from "$comp/OverviewTemplate.svelte"
    import TabBar from "$comp/TabBar.svelte";
    import OverviewFilterHeader, { type FilterConfig, defaultFilterConfig, getInitialFilterConfig } from "$comp/overview_filters/OverviewFilterHeader.svelte";
    import OverviewFilterBody from "$comp/overview_filters/OverviewFilterBody.svelte";
    import FeedContent from "$comp/feed/FeedContent.svelte";
    import HomeworkContent from "./homework/HomeworkContent.svelte";

    let filterConfig: FilterConfig = defaultFilterConfig();
    let currentTab: number = 0;

    function onTabSelected(e: CustomEvent<{ index: number }>): void {
        currentTab = e.detail.index;
        filterConfig.date.enabled = e.detail.index == 1;
    }

    onMount(async () => {
        const fc = await getInitialFilterConfig(""); // TODO: real token
        if (fc == undefined) return;

        filterConfig = fc;
    });

    $: console.log(filterConfig);
    
</script>

<OverviewTemplate>

    <OverviewFilterHeader bind:filterConfig={filterConfig} />

    <TabBar
        tabNames={["Feed", "Homework", "All Marks", "Timetable", "[Placeholder]"]}
        on:tabSelected={onTabSelected}
    />

    <OverviewFilterBody bind:filterConfig={filterConfig} />

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

</OverviewTemplate>
