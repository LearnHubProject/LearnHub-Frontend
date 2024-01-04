<script lang="ts">
    
    import DisciplinaryNote from "./DisciplinaryNote.svelte";
    import MarkNotification from "./MarkNotification.svelte";
    

</script>

<main>

    <h1>Student overview page</h1>

    <DisciplinaryNote
        title="Example"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit, cumque nam provident tempore aspernatur illum aut itaque vero odit, perspiciatis, veritatis nulla? Omnis deleniti voluptatibus doloribus, numquam alias harum repellat."
        notificationDetails={[
            { label: "Details", icon: "./icons/details.svg" }
        ]}
    />

    <DisciplinaryNote
        title="Example"
        content="Just testin' stuff out"
        notificationDetails={[
            { label: "Details", icon: "./icons/details.svg" }
        ]}
    />

    <MarkNotification
        title="Example"
        content="Just testin' stuff out"
        important={false}
        notificationDetails={[
            { label: "Details", icon: "./icons/details.svg" },
            { label: "Statistics", icon: "./icons/statistics.svg" }
        ]}
    />

    <MarkNotification
        title="Example"
        content="Just testin' stuff out"
        important={true}
        notificationDetails={[
            { label: "Details", icon: "./icons/details.svg" },
            { label: "Statistics", icon: "./icons/statistics.svg" }
        ]}
    />

</main>

<style>

</style>
