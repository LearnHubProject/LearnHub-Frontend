<script lang="ts">

    export let sizePx: number = 28;
    export let checked: boolean = false;

</script>

<main style="--size: {sizePx}px; --icon: url('{checked ? './icons/checkbox_on.svg' : './icons/checkbox_off.svg'}');">

    <input type="checkbox" bind:checked={checked} />

</main>

<style>

    input {
        -moz-appearance: none;
        -webkit-appearance: none;
        -o-appearance: none;
        appearance: none;
        
        width: var(--size);
        height: var(--size);
        border-radius: 3px;
        border-width: 4px;
        margin: 1px;
        outline: 1px solid #1e5180;
        background-image: var(--icon);
        box-sizing: border-box;

        cursor: pointer;
    }

</style>
