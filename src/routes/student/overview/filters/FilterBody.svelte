<script lang="ts">
    
    import { onMount } from "svelte";
    import { fetchAllSubjects } from "../../../../scripts/subject";
    import type { FilterConfig } from "./FilterHeader.svelte";
    import SubjectCategoryCard from "./SubjectCategoryCard.svelte";

    export let filterConfig: FilterConfig;

    let subjectList: Map<string, string[]> = new Map<string, string[]>();

    function updateFilter(e: CustomEvent): void {
        filterConfig = e.detail.newFilter;
    }

    onMount(async () => {
        const subjects = await fetchAllSubjects();

        subjects.forEach((s) => {
            if (!subjectList.has(s.category)) {
                subjectList.set(s.category, []);
            }

            subjectList.get(s.category)!.push(s.title);
        });
    });

</script>

<main>

    {#if filterConfig.dateFilterEnabled && filterConfig.showDateFilter}

        <!-- TODO: date picker -->
        <div></div>

    {/if}

    {#if filterConfig.showSubjectFilter}

        {#each subjectList as category}

        <SubjectCategoryCard
            title={category[0]}
            subjects={category[1]}
            {filterConfig}
            on:filterupdate={updateFilter}
        />

        {/each}

    {/if}

</main>

<style>

    main {
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 313px;
    }

</style>
