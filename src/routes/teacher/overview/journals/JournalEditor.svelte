<script lang="ts">
    
    import type { JournalID } from "./JournalCard.svelte";
    import MarkTable from "./MarkTable.svelte";

    export let id: JournalID;

</script>

<main>

    <button class="return">
        <img src="./icons/arrow_right.svg" alt="<">
        8A, Social Studies, 1. course
    </button>

    <div class="content shadow">

        <MarkTable />

    </div>

</main>

<style>

    main {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 22px;
        /* justify-content: flex-start; */
        /* background-color: red; */
        width: var(--overview-template-width);
        height: 500px;
        margin-top: 22px;
    }

    .return {
        display: flex;
        align-items: center;
        gap: 20px;
        font-size: 24px;
    }

    .return > img {
        rotate: 180deg;
    }

    .content {
        width: 1423px;
        height: 830px;
        background-color: var(--cl-surface);
        padding: 0 20px 0 20px;
        border-radius: 14px;
    }

</style>
