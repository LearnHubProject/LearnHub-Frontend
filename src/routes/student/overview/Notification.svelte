<script lang="ts" context="module">

    export type NotificationDetails = { label: string, icon?: string }[];

</script>

<script lang="ts">
    
    import { createEventDispatcher } from "svelte";
    import NotificationDetailOption from "./NotificationDetailOption.svelte";

    export let title: string = "[Undefined]";
    export let content: string = "undefined";
    export let notificationDetails: NotificationDetails = [];

    let detailsMenu: HTMLDivElement;
    let showDetails = false;
    let dispatcher = createEventDispatcher();

    function closeDetailsMenuOnClickAnywhere(e: MouseEvent): void {

        for (let elem: HTMLElement | null = e.target as HTMLElement; elem != null; elem = elem.parentElement) {
            if (elem == detailsMenu) {
                return;
            }
        }

        showDetails = false;

        document.removeEventListener('click', closeDetailsMenuOnClickAnywhere);
    }

    function toggleDetailsMenu(): void {
        showDetails = !showDetails;

        if (showDetails) {
            // A timeout is needed since the click event of the button seems to trigger the document event right after this function returns
            setTimeout(() => {
                document.addEventListener('click', closeDetailsMenuOnClickAnywhere);
            }, 10);
        }
    }

    function detailChoice(detailIndex: number): void {
        showDetails = false;
        // A left listener means that it's impossible to open the menu again
        document.removeEventListener('click', closeDetailsMenuOnClickAnywhere);
        dispatcher('detailChoice', { detailIndex });
    }

</script>

<main>

    <div>
        <div class="slot-wrapper">
            <slot />
        </div>
        
        <section>
            <h5>{title}</h5>
            <p>{content}</p>
        </section>
    </div>

    <button class="details-menu-toggle" on:click={toggleDetailsMenu}>
        <img src="./icons/3_vertical_dots_menu.svg" alt="" />
    </button>
    
    <div class="details-menu shadow" style="display: {showDetails ? 'initial' : 'none'};" bind:this={detailsMenu}>
        <div>
            
            {#each notificationDetails as detail, i}

            <NotificationDetailOption
                label={detail.label}
                icon={detail.icon}
                on:click={() => detailChoice(i)}
            />

            {/each}

        </div>
    </div>

</main>

<style>

    main {
        position: relative;
        display: grid;
        grid-template-columns: 1fr min-content;
        grid-template-rows: 1fr;
        align-items: center;
        width: 1068px;
        height: 94px;
        padding: 20px 2em 20px 2em;
        background-color: var(--cl-surface);
        box-sizing: border-box;

        border: 2px dotted black;
    }

    .slot-wrapper {
        width: 80px;
    }

    .details-menu-toggle {
        aspect-ratio: 1 / 1;
        border-radius: 4px;
    }

    div {
        display: flex;
        align-items: center;
        overflow: hidden;
    }

    section {
        width: 100%;
    }

    /* Doesn't work */
    h5,
    p {
        font-size: 20px;
        font-weight: normal;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
    }

    h5 {
        color: var(--cl-high-emphasis);
    }

    p {
        color: var(--cl-medium-emphasis);
    }

    .details-menu {
        position: absolute;
        top: 20px;
        right: 2em;
        background-color: var(--cl-surface);
        z-index: 9999;
    }
    
    .details-menu > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
    }

</style>
