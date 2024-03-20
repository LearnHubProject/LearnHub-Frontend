<script lang="ts">
    
    import { onMount } from "svelte";
    import JournalCard, { type JournalCardProps } from "./JournalCard.svelte";
    
    let journals: JournalCardProps[];
    
    onMount(async () => {
        // TODO: fetch the classes
        
        // return;
        journals = [
            {
                title: "Chemistry",
                course: "1. course",
                className: "11ED"
            },
            {
                title: "Mathematics",
                course: "7. course",
                className: "12ALG"
            },
            {
                title: "History",
                course: "1. course",
                className: "9G"
            },
            {
                title: "English",
                course: "1. course",
                className: "8V"
            },
        ];
    });

</script>

<main class="shadow tab-content">

    {#if journals === undefined || journals.length === 0}

        <span class="err">No journals available.</span>

    {:else}
    
    <div>

        {#each journals as journal}

            <JournalCard {...journal} />
        
        {/each}
        
    </div>
    
    {/if}

</main>

<style>

    div {
        display: grid;
        grid-template-columns: 1fr 1fr;
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
