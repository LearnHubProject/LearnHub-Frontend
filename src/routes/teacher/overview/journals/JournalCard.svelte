<script lang="ts" context="module">

    export interface JournalCardProps {
        title: string,
        course: string,
        className: string
    }

</script>

<script lang="ts">

    export let title: string;
    export let course: string;
    export let className: string;

</script>

<button>

    <h3>{title}</h3>
    <p>{className}</p>
    <span>{course}</span>

</button>

<style>

    button {
        display: flex;
        flex-wrap: wrap;
        height: 116px;
        padding: 20px;
        box-sizing: border-box;
        border: 1px solid #D0D0D3;
        border-radius: 7px;
    }

    button > * {
        width: 50%;
        padding: 0;
        font-size: 24px;
        font-weight: 500;
    }

    h3,
    span {
        text-align: left;
    }

    p {
        text-align: right;
    }

</style>
