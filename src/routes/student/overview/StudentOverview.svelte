<script lang="ts">
    
    import DisciplinaryNote from "./DisciplinaryNote.svelte";
    import MarkNotification from "./MarkNotification.svelte";
    

</script>

<main>

    <h1>Student overview page</h1>

    <DisciplinaryNote
        title="Example"
        content="Just testin' stuff out"
        notificationDetails={[
            { label: "option 1", icon: "./icons/visibility.svg" },
            { label: "option 2", icon: "./icons/visibility_off.svg" },
            { label: "option 3 djfhgdsjfbdsjkfh", icon: "./icons/github-mark 1.svg" }
        ]}
    />

    <MarkNotification
        title="Example"
        content="Just testin' stuff out"
        important={false}
        notificationDetails={[
            { label: "option 1", icon: "./icons/visibility.svg" },
            { label: "option 2", icon: "./icons/visibility_off.svg" },
            { label: "option 3 djfhgdsjfbdsjkfh", icon: "./icons/github-mark 1.svg" }
        ]}
    />

    <MarkNotification
        title="Example"
        content="Just testin' stuff out"
        important={true}
        notificationDetails={[
            { label: "option 1", icon: "./icons/visibility.svg" },
            { label: "option 2", icon: "./icons/visibility_off.svg" },
            { label: "option 3 djfhgdsjfbdsjkfh", icon: "./icons/github-mark 1.svg" }
        ]}
    />

</main>

<style>

</style>
