<script lang="ts">
    
    import Header from "../../../components/Header.svelte";
    import TopBar from "../../../components/TopBar.svelte";
    import FeedContent from "./feed/FeedContent.svelte";
    import HomeworkContent from "./homework/HomeworkContent.svelte";

    
</script>

<main>

    <Header />

    <div class="content">

        <div></div>

        <TopBar />

        <div style="width: 313px; background: red;"></div>

        <FeedContent />

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
