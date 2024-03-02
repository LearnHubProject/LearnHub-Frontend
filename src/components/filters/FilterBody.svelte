<script lang="ts">
    
    import { onMount } from "svelte";
    import { fetchAllSubjects } from "$script/api";
    import type { Subject } from "$script/subject";
    import type { FilterConfig } from "./FilterHeader.svelte";
    import SubjectCategoryCard from "./SubjectCategoryCard.svelte";

    export let filterConfig: FilterConfig;

    let subjectsByCategory: Map<string, Subject[]> = new Map<string, Subject[]>();

    function updateFilter(e: CustomEvent): void {
        filterConfig = e.detail.newFilter;
    }

    onMount(async () => {
        const resp = await fetchAllSubjects(""); // TODO: real token
        if (!resp.successful) return;

        resp.data!.subjects.forEach((s) => {
            if (!subjectsByCategory.has(s.category)) {
                subjectsByCategory.set(s.category, []);
            }

            subjectsByCategory.get(s.category)!.push(s);
        });
    });

</script>

<main>

    {#if filterConfig.dateFilterEnabled && filterConfig.showDateFilter}

        <!-- TODO: date picker -->
        <div></div>

    {/if}

    {#if filterConfig.showSubjectFilter}

        {#each subjectsByCategory as category}

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
