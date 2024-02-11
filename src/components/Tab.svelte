<script lang="ts">
    
    import { createEventDispatcher } from "svelte";

    export let title: string = "";
    export let selected: boolean = false;
    export let notifications: boolean = false;

    let dispatcher = createEventDispatcher();

    function click(): void {
        dispatcher('selected');
    }

</script>

<button
    data-selected={selected}
    data-notifications={notifications}
    on:click={click}
>

    {title}

    <span></span>

</button>

<style>

    button {
        flex-grow: 1;
        position: relative;
        height: 71px;
        align-items: center;
        font-size: 24px;
        font-weight: 500;
        text-transform: uppercase;
    }

    button[data-selected="true"] {
        color: var(--cl-accent);
    }

    button[data-selected="true"]::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: var(--cl-accent);
    }

    span {
        position: absolute;
        top: 12px;
        right: 24px;
        width: 10px;
        height: 10px;
        background-color: var(--cl-critical);
        border-radius: 50%;

        display: none;
    }

    button[data-notifications="true"] > span {
        display: initial;
    }

</style>
