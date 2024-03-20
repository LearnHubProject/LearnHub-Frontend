<script lang="ts">

    import { onMount } from "svelte";
    import { user } from "$script/user"
    import OverviewTemplate from "$comp/OverviewTemplate.svelte";
    import TabBar from "$comp/TabBar.svelte";
    import OverviewFilterHeader, { type FilterConfig, defaultFilterConfig, getInitialFilterConfig } from "$comp/overview_filters/OverviewFilterHeader.svelte";
    import OverviewFilterBody from "$comp/overview_filters/OverviewFilterBody.svelte";
    import FeedContent from "$comp/feed/FeedContent.svelte";
    import JournalsContent from "./journals/JournalsContent.svelte";

    let filterConfig: FilterConfig = defaultFilterConfig();
    let currentTab: number = 0;

    function onTabSelected(e: CustomEvent<{ index: number }>): void {
        currentTab = e.detail.index;

        const showFilter = currentTab === 1;
        filterConfig.classes.enabled = showFilter;
        filterConfig.classes.show = showFilter;
        
    }

    onMount(async () => {
        if (user.token === undefined) {
            console.error("Teacher's overview panel mounted before the user acquired a token.");
            return;
        }
        const fc = await getInitialFilterConfig(user.token);
        if (fc == undefined) return;

        fc.classes.selection.set("11ED", true);

        filterConfig = fc;
    });

    // $: console.log(filterConfig);

</script>

<OverviewTemplate>

    <OverviewFilterHeader bind:filterConfig={filterConfig} />

    <TabBar
        tabNames={["Feed", "Journals", "My Classes", "[Placeholder]", "[Placeholder]"]}
        on:tabSelected={onTabSelected}
    />

    <OverviewFilterBody bind:filterConfig={filterConfig} />

    {#if currentTab === 0 }

        <FeedContent />

    {:else if currentTab === 1}

        <JournalsContent {filterConfig} />
        
    {:else if currentTab === 2}

        <!-- TODO: "My Classes" content -->

    {:else if currentTab === 3}

        <!-- Placeholder -->

    {:else if currentTab === 4}

        <!-- Placeholder -->

    {:else}

        <div style="color: red;">Error</div>

    {/if}

</OverviewTemplate>
