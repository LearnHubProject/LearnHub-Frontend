<script lang="ts">

    import { createEventDispatcher } from "svelte";
    import Notification, { type NotificationDetails } from "./Notification.svelte";

    export let title: string = "[Undefined]";
    export let content: string = "undefined";
    export let important: boolean = false;
    export let notificationDetails: NotificationDetails = [];

    let dispatcher = createEventDispatcher();

</script>

<Notification
    {title}
    {content}
    {notificationDetails}
    on:detailChoice={(e) => dispatcher('detailChoice', e.detail.detailIndex)}
>

    <span style="{important ? 'font-weight: bold;' : ''}">Et</span>

</Notification>

<style>

    span {
        color: var(--cl-high-emphasis);
        text-align: center;
        font-size: 48px;
    }

</style>
