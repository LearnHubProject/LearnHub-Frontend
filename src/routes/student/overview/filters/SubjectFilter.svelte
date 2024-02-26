<script lang="ts">
    
    import { createEventDispatcher } from "svelte";
    import Checkbox from "../../../../components/Checkbox.svelte";

    export let label: string;
    export let selected: boolean;

    let dispatcher = createEventDispatcher();

    $: {
        dispatcher('toggle', { selected });
    }

</script>

<main>

    <Checkbox bind:checked={selected} />

    <span>{label}</span>

</main>

<style>

    main {
        display: flex;
        align-items: center;
        gap: 32px;
        height: 66px;
        margin: 0 20px 0 20px;
        color: var(--cl-low-emphasis);
        font-size: 20px;
    }

</style>
