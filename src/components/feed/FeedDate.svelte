<script lang="ts" context="module">

    // Taken from:
    // https://stackoverflow.com/questions/673905/how-can-i-determine-a-users-locale-within-the-browser
    function getLang(): string {
        if (navigator.languages != undefined) return navigator.languages[0];
        return navigator.language;
    }

</script>

<script lang="ts">

    export let date: Date | undefined;

    const formatter = new Intl.DateTimeFormat(getLang(), {
        year: "numeric",
        month: "short",
        day: "2-digit",
    });

    $: formattedDate = date != undefined ? formatter.format(date) : undefined;

</script>

<main>
    <span class="divider"></span>
    <span>{formattedDate ?? "undefined date"}</span>
    <span class="divider"></span>
</main>

<style>

    main {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1em;
        height: 40px;
        margin: 0 100px 0 100px;
        color: var(--cl-low-emphasis);
        box-sizing: border-box;
    }

</style>
