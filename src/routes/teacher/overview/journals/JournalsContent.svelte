<script lang="ts">
    
    import { createEventDispatcher, onMount } from "svelte";
    import JournalCard, { type JournalCardProps, type JournalID } from "./JournalCard.svelte";
    import { type FilterConfig } from "$comp/overview_filters/OverviewFilterHeader.svelte";
    import { fetchJournals } from "$script/api";
    import { user } from "$script/user";
    
    export let filterConfig: FilterConfig;

    let dispatcher = createEventDispatcher();
    let journals: JournalCardProps[];

    onMount(async () => {
        if (user.token === undefined) {
            console.error("Tried fetching journals before the user acquired a token.");
            return;
        }
        const resp = await fetchJournals(user.token);
        if (!resp.successful) {
            console.error(resp.error);
            return;
        }
        
        journals = resp.data!.journals;
    });

</script>

<main class="shadow tab-content">

    {#if journals === undefined || journals.length === 0}

        <span class="err">No journals available.</span>

    {:else}
    
    <div>

        {#each journals as journal}

            <JournalCard {...journal} on:open={(e) => dispatcher('openjournal', { id: e.detail.id })} />
        
        {/each}
        
    </div>
    
    {/if}

</main>

<style>

    div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: min-content;
        gap: 20px;
        width: 100%;
        height: 100%;
        padding: 30px 41px 30px 41px; /* width: 100% includes the padding, that's why box-sizing is set */
        box-sizing: border-box;
    }

    .err {
        color: var(--cl-warning);
        margin: 50px auto 50px auto;
        text-align: center;
        font-size: 36px;
    }

</style>
