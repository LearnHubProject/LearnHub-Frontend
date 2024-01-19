<script lang="ts" context="module">

    export type NotificationDetails = { label: string, icon?: string };
    export type AttachedFileData = { name: string, url: string }; // TODO: change URL into actual URL?

</script>

<script lang="ts">
    
    import { createEventDispatcher } from "svelte";
    import NotificationDetailOption from "./NotificationDetailOption.svelte";

    export let title: string = "[Undefined]";
    export let content: string = "undefined";
    export let notificationDetails: NotificationDetails[] = [];
    export let attachedFiles: AttachedFileData[] = [];

    let attachedFilesMenu: HTMLElement;
    let showAttachedFiles = false;
    let detailsMenu: HTMLDivElement;
    let showDetails = false;
    let dispatcher = createEventDispatcher();

    function closeAttachedFileMenuOnClickAnywhere(e: MouseEvent): void {

        for (let elem: HTMLElement | null = e.target as HTMLElement; elem != null; elem = elem.parentElement) {
            if (elem == attachedFilesMenu) {
                return;
            }
        }

        showDetails = false;

        document.removeEventListener('click', closeAttachedFileMenuOnClickAnywhere);
    }

    function toggleAttachedFilesMenu(e: MouseEvent): void {
        showAttachedFiles = !showAttachedFiles;

        if (showAttachedFiles) {
            // Otherwise the event triggers the document immediately
            e.stopPropagation();
            document.addEventListener('click', closeAttachedFileMenuOnClickAnywhere);
        }
    }

    function showFile(fileIndex: number): void {
        showAttachedFiles = false;
        document.removeEventListener('click', closeAttachedFileMenuOnClickAnywhere);
    }

    function closeDetailsMenuOnClickAnywhere(e: MouseEvent): void {

        for (let elem: HTMLElement | null = e.target as HTMLElement; elem != null; elem = elem.parentElement) {
            if (elem == detailsMenu) {
                return;
            }
        }

        showDetails = false;

        document.removeEventListener('click', closeDetailsMenuOnClickAnywhere);
    }

    function toggleDetailsMenu(e: MouseEvent): void {
        showDetails = !showDetails;

        if (showDetails) {
            // Otherwise the event triggers the document immediately
            e.stopPropagation();
            document.addEventListener('click', closeDetailsMenuOnClickAnywhere);
        }
    }

    function detailChoice(detailIndex: number): void {
        showDetails = false;
        document.removeEventListener('click', closeDetailsMenuOnClickAnywhere);
        dispatcher('detailChoice', { detailIndex });
    }

</script>

<main>

    <div class="main-content">
        <div class="slot-wrapper">
            <slot />
        </div>
        
        <section>
            <h5>{title}</h5>
            <p>{content}</p>
        </section>
    </div>

    {#if attachedFiles.length !== 0}

    <button class="attached-file" on:click={toggleAttachedFilesMenu}>
        <img src="./icons/file.svg" alt="" />
    </button>

    <!-- TODO: move into a separate component? -->
    <div class="attached-files-menu shadow" style="display: {showAttachedFiles ? 'initial' : 'none'};" bind:this={attachedFilesMenu}>
        <div>
            
            {#each attachedFiles as file, i}

            <NotificationDetailOption
                label={file.name}
                icon={undefined}
                on:click={() => showFile(i)}
            />

            {/each}

        </div>
    </div>

    {/if}

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
        display: flex;
        align-items: center;
        height: 94px;
        padding: 20px 2em 20px 2em;
        background-color: var(--cl-surface);
        box-sizing: border-box;

        /* border: 2px dotted black; */
    }

    .slot-wrapper {
        display: flex;
        align-items: center;
        flex-basis: 3ch;
        flex-shrink: 0;
        color: var(--cl-high-emphasis);
        font-size: 48px;
    }

    .attached-file {
        aspect-ratio: 1 / 1;
        border-radius: 4px;

    }

    .details-menu-toggle {
        aspect-ratio: 1 / 1;
        margin-left: 26px;
        border-radius: 4px;
    }

    .main-content {
        display: flex;
        align-items: center;
        flex-grow: 1;
        overflow: hidden;
    }

    section {
        flex-grow: 1;
    }

    h5,
    p {
        font-size: 20px;
        font-weight: normal;
        /* Doesn't work */
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

    .attached-files-menu {
        position: absolute;
        top: 20px;
        right: 55px;
        background-color: var(--cl-surface);
        z-index: 10000;
    }

    .details-menu {
        position: absolute;
        top: 20px;
        right: 35px;
        background-color: var(--cl-surface);
        z-index: 9999;
    }
    
    .attached-files-menu > div,
    .details-menu > div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: stretch;
    }

</style>
