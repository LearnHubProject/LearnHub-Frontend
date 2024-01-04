<script lang="ts">
    
    import { createEventDispatcher } from "svelte";

    export let label: string = "Undefined";
    export let icon: string = "";

    let dispatcher = createEventDispatcher();

</script>

<button on:click={() => dispatcher('click')}>

    <div>
        <img src={icon} alt="" />
    </div>
    <span>{label}</span>

</button>

<style>

    button {
        display: flex;
        grid-template-columns: 33% 66%;
        grid-template-rows: 1fr;
        width: 250px;
        height: 72px;
        color: var(--cl-medium-emphasis);
        background-color: var(--cl-surface);
    }

    button:hover {
        filter: brightness(0.9);
    }

    div {
        width: 33%;
        display: flex;
        padding: 1em;
        justify-content: center;
        box-sizing: border-box;
    }
    
    span {
        flex-grow: 1;
        margin: auto 0 auto 0;
        font-size: 20px;
        text-align: left;
    }

</style>
