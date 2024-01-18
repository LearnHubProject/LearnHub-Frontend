<script lang="ts">

    import { createEventDispatcher } from "svelte";
    import Notification, { type NotificationDetails } from "../Notification.svelte";
    import Checkbox from "../../../../components/Checkbox.svelte";

    // TODO: add more data, specifically for the details menu
    export let subjectTitle: string = "[Undefined]";
    export let taskDescription: string = "undefined";
    export let notificationDetails: NotificationDetails = [];

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
    on:detailChoice={(e) => dispatcher('detailChoice', e.detail.detailIndex)}
>

    <Checkbox bind:checked={done} />

</Notification>
