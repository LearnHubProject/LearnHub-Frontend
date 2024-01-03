<script lang="ts">

</script>

<footer>

    <span class="left">

        <a href="/">&copy; LearnHub. All rights reserved</a>
        <a href="/about">About Us</a>
        <a href="/privacy">Privacy Policy</a>
        <a href="/tos">Terms of Service</a>
        
    </span>

    <span class="right">

        <img alt="GH" src="./icons/github-mark 1.svg" />
        <a href="">Source Code</a>

    </span>

</footer>

<style>

    footer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: calc(100% - 1em * 2);
        color: var(--cl-high-emphasis);
        padding: 1em;
        border-top: 1px solid var(--cl-divider);
        background-color: var(--cl-surface);
        font-size: 12px;
        z-index: 9999999;
    }

    .left {
        display: flex;
        align-items: center;
        height: 100%;
        margin-left: 0.5em;
    }

    a {
        margin: 0 1em 0 1em;
        color: inherit;
        text-decoration: none;
    }

    .right {
        display: flex;
        flex-direction: row-reverse;
        justify-content: flex-start;
        align-items: center;
        height: 100%;
        margin-right: 0.5em;
    }

</style>
