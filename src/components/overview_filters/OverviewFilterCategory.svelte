<script lang="ts">
    
    import { createEventDispatcher } from "svelte";
    import OverviewFilterEntry from "./OverviewFilterEntry.svelte";

    type Entry = any;

    export let title: string = "[Unnamed group]";
    export let entries: Entry[];
    export let entryLabel: (entry: Entry) => string = (entry: Entry) => String(entry);
    export let entryDefaultState: (entry: Entry) => boolean = () => false;

    let dispatcher = createEventDispatcher();
    let open: boolean = false;

    function toggleEntry(entry: Entry, e: CustomEvent<{ selected: boolean }>): void {
        dispatcher('toggle', { entry: entry, selected: e.detail.selected });
    }

</script>

<main class="shadow">

    <button
        class="title"
        title={open ? "Collapse" : "Open"}
        on:click={() => {open = !open}}
    >
        {title}
        <img src={open ? "./icons/arrow_down.svg" : "./icons/arrow_right.svg"} alt="">
    </button>

    {#if open}

        <span></span>

        {#each entries as entry}

            <OverviewFilterEntry
                label={entryLabel(entry)}
                selected={entryDefaultState(entry)}
                on:toggle={(e) => toggleEntry(entry, e)}
            />

        {/each}

    {/if}

</main>

<style>

    main {
        display: flex;
        flex-direction: column;
        border-radius: 14px;
    }
    
    .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 66px;
        margin: 0 20px 0 20px;
        color: var(--cl-medium-emphasis);
        font-size: 24px;
    }

    span {
        background-color: var(--cl-divider);
        width: 100%;
        height: 1px;
    }

</style>
