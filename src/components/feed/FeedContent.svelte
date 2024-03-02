<script lang="ts">
    
    import FeedDate from "./FeedDate.svelte";
    import DisciplinaryNote from "./DisciplinaryNote.svelte";
    import MarkNotification from "./MarkNotification.svelte";

</script>

<main class="shadow">

    <!-- TODO: actually fetch the data -->

    <DisciplinaryNote
        title="Example"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cumque nam provident tempore aspernatur illum aut itaque vero odit, perspiciatis, veritatis nulla? Omnis deleniti voluptatibus doloribus, numquam alias harum repellat."
        details={[
            { label: "Details", icon: "./icons/details.svg" },
        ]}
    />

    <FeedDate date={new Date(2024, 0, 3)} />
    
    <MarkNotification
        title="Example"
        content="Just testin' stuff out"
        important={false}
        details={[
            { label: "Details", icon: "./icons/details.svg" },
            { label: "Statistics", icon: "./icons/statistics.svg" },
        ]}
    />
    
    <FeedDate date={new Date(2024, 0, 3)} />
    
    <MarkNotification
        title="Example"
        content="Just testin' stuff out"
        important={true}
        details={[
            { label: "Details", icon: "./icons/details.svg" },
            { label: "Statistics", icon: "./icons/statistics.svg" },
        ]}
    />

</main>

<style>

    main {
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        width: 1068px;
        padding: 10px 0 10px 0;
        margin-bottom: 1em;
        border-radius: 14px;
    }

</style>
