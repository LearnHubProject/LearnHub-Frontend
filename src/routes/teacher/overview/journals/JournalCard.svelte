<script lang="ts" context="module">

    export type JournalID = string;
    
    export interface JournalCardProps {
        title: string,
        course: string,
        className: string,
        journalID: JournalID
    }

</script>

<script lang="ts">
    
    import { createEventDispatcher } from "svelte";

    export let title: string;
    export let course: string;
    export let className: string;
    export let journalID: JournalID;

    let dispatcher = createEventDispatcher();

</script>

<button on:click={() => dispatcher('open', { id: journalID })}>

    <h3>{title}</h3>
    <p>{className}</p>
    <span>{course}</span>

</button>

<style>

    button {
        display: flex;
        flex-wrap: wrap;
        height: 116px;
        padding: 20px;
        box-sizing: border-box;
        border: 1px solid #D0D0D3;
        border-radius: 7px;
    }

    button > * {
        width: 50%;
        padding: 0;
        font-size: 24px;
        font-weight: 500;
    }

    h3,
    span {
        text-align: left;
    }

    p {
        text-align: right;
    }

</style>
