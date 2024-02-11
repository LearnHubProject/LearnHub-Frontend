<script lang="ts">

    import { createEventDispatcher } from "svelte";
    import Notification, { type NotificationDetails } from "../Notification.svelte";

    export let title: string = "[Undefined]";
    export let content: string = "undefined";
    export let details: NotificationDetails[] = [];

    let dispatcher = createEventDispatcher();

</script>

<Notification
    {title}
    {content}
    {details}
    on:detailChoice={(e) => dispatcher('detailChoice', e.detail.detailIndex)}
>

    <img src="./icons/disciplinary_note.svg" alt="" />

</Notification>
