<script lang="ts">
    
    import Hometask from "../homework/Hometask.svelte";
    import TestReminder from "./TestReminder.svelte";

</script>

<main class="shadow">

    <Hometask
        subjectTitle="Mathematics"
        taskDescription="Solve all 7 Millennium Problems"
    />

    <Hometask
        subjectTitle="Mathematics"
        taskDescription="Solve all 7 Millennium Problems"
        attachedFiles={[{ name: "test file", url: "abcdef.txt" }]}
    />

    <TestReminder
        subjectTitle="Mathematics"
        content="eee"
    />

</main>

<style>

    main {
        display: flex;
        flex-direction: column;
        justify-content: stretch;
        width: 1068px;
        padding: 10px 0 10px 0;
        border-radius: 14px;
    }

</style>
