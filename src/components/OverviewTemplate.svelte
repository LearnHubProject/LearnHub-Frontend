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
        display: grid;
        grid-template-columns: max-content max-content;
        grid-template-rows: max-content max-content;
        row-gap: 15px;
        column-gap: 20px;
        margin: 0 249px 0 249px;
    }

</style>
