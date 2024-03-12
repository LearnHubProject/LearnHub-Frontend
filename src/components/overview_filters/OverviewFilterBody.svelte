<script lang="ts">
    
    import type { Subject } from "$script/subject";
    import type { FilterConfig } from "./OverviewFilterHeader.svelte";
    import OverviewFilterCategory from "./OverviewFilterCategory.svelte"

    export let filterConfig: FilterConfig;

    let subjectCategoryState: Map<string, boolean> = new Map<string, boolean>();

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
        
        return m;
    }

    function toggleSubject(entry: Subject, selected: boolean): void {
        const ss = JSON.stringify(entry);
        filterConfig.subjects.selection.set(ss, selected);
        filterConfig = filterConfig;
    }
    
    function toggleClass(entry: string, selected: boolean): void {
        filterConfig.classes.selection.set(entry, selected);
        filterConfig = filterConfig;
    }

</script>

<main>
    
    {#if filterConfig.date.enabled && filterConfig.date.show}
    
        <!-- TODO: date picker -->
        <div></div>

    {/if}

    {#if filterConfig.subjects.show}

        {#if false} <!-- role='student' -->

            {#each generateSubjectGroups(filterConfig) as [category, subjects]}

                <OverviewFilterCategory
                    title={category}
                    entries={subjects}
                    entryLabel={(e) => e.title}
                    entryDefaultState={(e) => filterConfig.subjects.selection.get(JSON.stringify(e)) ?? false}
                    on:toggle={(e) => toggleSubject(e.detail.entry, e.detail.selected)}
                />
        
            {/each}

        {:else if true} <!-- role='teacher' -->

            <OverviewFilterCategory
                title={"Subjects"}
                entries={Array(...filterConfig.subjects.selection.keys())}
                entryLabel={(e) => JSON.parse(e).title}
                entryDefaultState={(e) => filterConfig.subjects.selection.get(e) ?? false}
                on:toggle={(e) => toggleSubject(JSON.parse(e.detail.entry), e.detail.selected)}
            />

        {/if}

    {/if}

    {#if filterConfig.classes.show}

        <OverviewFilterCategory
            title={"Classes"}
            entries={Array(...filterConfig.classes.selection.keys())}
            entryDefaultState={(e) => filterConfig.classes.selection.get(e) ?? false}
            on:toggle={(e) => toggleClass(e.detail.entry, e.detail.selected)}
        />

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
