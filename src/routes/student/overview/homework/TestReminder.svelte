<script lang="ts">

    import { createEventDispatcher } from "svelte";
    import Notification, { type NotificationDetails } from "$comp/Notification.svelte";

    export let subjectTitle: string = "[Undefined]";
    export let content: string = "undefined";
    export let details: NotificationDetails[] = [];

    let dispatcher = createEventDispatcher();

</script>

<Notification
    title={subjectTitle}
    {content}
    {details}
    on:detailChoice={(e) => dispatcher('detailChoice', e.detail.detailIndex)}
>

    <img src="./icons/exclamation_mark.svg" alt="">

</Notification>
