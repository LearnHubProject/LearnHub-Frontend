<script lang="ts" context="module">

    export const TABS = [
        "Feed",
        "Homework",
        "All Marks",
        "Timetable",
        "[Placeholder]"
    ] as const;

    export type TabName = (typeof TABS)[number];

</script>

<script lang="ts">
    
    import { createEventDispatcher } from "svelte";
    import Tab from "./Tab.svelte";

    export let notifications: boolean[] = [false, true, false, false, false];

    let dispatcher = createEventDispatcher();
    let currentTab: number = 0;

    function select(tabIndex: number): void {
        currentTab = tabIndex;
        notifications[tabIndex] = false;
        dispatcher('tabSelected', { index: tabIndex });
    }

</script>

<main>

    {#each TABS as tab, i}

    <Tab
        title={tab}
        selected={currentTab === i}
        notifications={notifications[i]}
        on:selected={() => select(i)}
    />

    {/each}

</main>

<style>

    main {
        display: flex;
        align-items: center;
        width: 1090px;
    }

</style>
