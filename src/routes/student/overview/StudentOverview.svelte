<script lang="ts" context="module">
    
    import { fetchAllSubjects } from "../../../scripts/subject";

    // TODO: get the list of subjects from the server
    async function getInitialFilterConfig(): Promise<FilterConfig> {
        const c = defaultFilterConfig();

        const subjects = await fetchAllSubjects();

        subjects.forEach((s) => {
            c.subjectsSelection.set(s.title, true);
        });

        return c;
    }

</script>

<script lang="ts">
    
    import { onMount } from "svelte";
    import Header from "../../../components/Header.svelte";
    import TopBar from "../../../components/TopBar.svelte";
    import FilterHeader, { type FilterConfig, defaultFilterConfig } from "./filters/FilterHeader.svelte";
    import FilterBody from "./filters/FilterBody.svelte";
    import FeedContent from "./feed/FeedContent.svelte";
    import HomeworkContent from "./homework/HomeworkContent.svelte";

    let filterConfig: FilterConfig = defaultFilterConfig();

    onMount(async () => {
        filterConfig = await getInitialFilterConfig();
    });

    $: console.log(filterConfig);
    
</script>

<main>

    <Header />

    <div class="content">

        <FilterHeader bind:filterConfig={filterConfig} />

        <TopBar on:tabSelected={() => {}} />

        <FilterBody bind:filterConfig={filterConfig} />

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
