<script lang="ts">

    import Header from "$comp/Header.svelte";

</script>

<main>

    <Header />

    <div class="content">

        <slot />

    </div>

</main>

<style>

    .content {
        --margin: 249px;
        --overview-template-width: calc(100vw - 2 * var(--margin));

        display: grid;
        grid-template-columns: max-content max-content;
        grid-template-rows: max-content max-content;
        row-gap: 15px;
        column-gap: 20px;
        margin: 0 var(--margin) 0 var(--margin);
    }

</style>
