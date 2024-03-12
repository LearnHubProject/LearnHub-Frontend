<script lang="ts">
    
    import type { Subject } from "$script/subject";
    import type { FilterConfig } from "./FilterHeader.svelte";
    import FilterCategory from "./FilterCategory.svelte"

    export let filterConfig: FilterConfig;

    let subjectCategoryState: Map<string, boolean> = new Map<string, boolean>();

    // $: console.log("BODY: ", filterConfig);

    // The argument is needed to make the result of the function explicidly dependent on the value of filterConfig
    // Alternatively, a {#key} block can be used around the loop calling this function
    function generateSubjectGroups(config: FilterConfig): Map<string, Subject[]> {
        const m = new Map<string, Subject[]>();

        config.subjects.selection.forEach((_, s) => {
            const parsedSubject: Subject = JSON.parse(s);
            if (!m.has(parsedSubject.category)) {
                m.set(parsedSubject.category, []);

                subjectCategoryState.set(parsedSubject.category, false);
            }
            
            m.get(parsedSubject.category)!.push(parsedSubject);
        });
        
        console.log(m);
        
        return m;
    }

    function mutate() {
        const s = {
            category: "GAC",
            title: 'Chemistry'
        };
        const ss = JSON.stringify(s);
        const pval = filterConfig.subjects.selection.get(ss);
        filterConfig.subjects.selection.set(ss, !pval);
        filterConfig = filterConfig;
    }
    
    function toggleSubject(e: CustomEvent) {
        return;
        const ss = JSON.stringify(s);
        filterConfig.subjects.selection.set(ss, !filterConfig.subjects.selection.get(ss));
        filterConfig = filterConfig;
    }

</script>

<main>
    
    {#if filterConfig.date.enabled && filterConfig.date.show}
    
        <!-- TODO: date picker -->
        <div></div>

    {/if}

    {#if filterConfig.subjects.show}

        {#if true} <!-- role='student' -->

            {#each generateSubjectGroups(filterConfig) as [category, subjects]}

                <FilterCategory
                    title={category}
                    entries={subjects}
                    entryLabel={(e) => e.title}
                    entryDefaultState={(e) => filterConfig.subjects.selection.get(JSON.stringify(e)) ?? false}
                    on:toggle={toggleSubject}
                />
        
            {/each}

        {:else if false}

            <!--  -->

        {/if}

    {/if}

    {#if filterConfig.classes.show}

        <!--  -->

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
