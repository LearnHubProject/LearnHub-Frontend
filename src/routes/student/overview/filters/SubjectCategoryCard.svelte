<script lang="ts">
    
    import { createEventDispatcher } from "svelte";
    import type { FilterConfig } from "./FilterHeader.svelte";
    import SubjectFilter from "./SubjectFilter.svelte";

    export let title: string = "[Unnamed group]";
    export let subjects: string[] = [];
    export let filterConfig: FilterConfig;

    let dispatcher = createEventDispatcher();
    let open: boolean;

    function toggleSubject(subject: string, e: CustomEvent): void {
        filterConfig.subjectsSelection.set(subject, e.detail.selected);
        dispatcher('filterupdate', { newFilter: filterConfig });
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
    
        {#each subjects as subject}

            <SubjectFilter
                label={subject}
                selected={filterConfig.subjectsSelection.get(subject) ?? false}
                on:toggle={(e) => toggleSubject(subject, e)}
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
