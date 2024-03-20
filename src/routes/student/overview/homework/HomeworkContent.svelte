<script lang="ts">
    
    import Hometask from "../homework/Hometask.svelte";
    import TestReminder from "./TestReminder.svelte";

</script>

<main class="shadow tab-content">

    <Hometask
        subjectTitle="Mathematics"
        description="Solve all 7 Millennium Problems"
        details={[
            { label: "Details", icon: "./icons/details.svg" },
        ]}
    />

    <Hometask
        subjectTitle="Mathematics"
        description="Solve all 7 Millennium Problems"
        attachedFiles={[{ name: "test file", url: "abcdef.txt" }]}
        details={[
            { label: "Details", icon: "./icons/details.svg" },
        ]}
    />

    <TestReminder
        subjectTitle="Mathematics"
        content="Test on integrals"
        details={[
            { label: "Details", icon: "./icons/details.svg" },
        ]}
    />

</main>
