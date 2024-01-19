<script lang="ts">

    import { createEventDispatcher } from "svelte";
    import Notification, { type AttachedFileData, type NotificationDetails } from "../Notification.svelte";
    import Checkbox from "../../../../components/Checkbox.svelte";

    // TODO: add more data, specifically for the details menu
    export let subjectTitle: string = "[Undefined]";
    export let taskDescription: string = "undefined";
    export let notificationDetails: NotificationDetails[] = [];
    export let attachedFiles: AttachedFileData[] = [];

    let dispatcher = createEventDispatcher();

    let done: boolean;

    $: if (done !== undefined) {
        // TODO: save to database
    }

</script>

<Notification
    title={subjectTitle}
    content={taskDescription}
    {notificationDetails}
    {attachedFiles}
    on:detailChoice={(e) => dispatcher('detailChoice', e.detail.detailIndex)}
>

    <div>
        <Checkbox bind:checked={done} />
    </div>

</Notification>

<style>

    div {
        margin: 0 9px 0 9px;
    }

</style>
