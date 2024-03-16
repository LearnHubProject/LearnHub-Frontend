<script lang="ts">

    function showSettings() {
        // TODO
    }

    function logout() {
        // TODO
    }

</script>

<main>

    <div class="left">

        <h1>LearnHub</h1>

    </div>

    <div class="right">
        
        <button title="Settings" on:click={showSettings}>
            <img src="./icons/settings.svg" alt="">
        </button>

        <button title="Log out" on:click={logout}>
            <img src="./icons/exit.svg" alt="">
        </button>

        <p>Firstname Lastname</p>

    </div>

</main>

<style>

    main {
        display: flex;
        align-items: stretch;
        height: 100px;
        border-bottom: 3px solid var(--cl-divider);
        box-sizing: border-box;
    }

    .left {
        flex-grow: 1;
        display: flex;
        align-items: center;
        margin-left: 100px;
    }
    
    .right {
        flex-grow: 1;
        display: flex;
        flex-direction: row-reverse;
        gap: 55px;
        align-items: center;
        margin-right: 100px;
    }

    h1 {
        font-size: 36px;
        font-weight: 300;
    }

    p {
        font-size: 31px;
        font-weight: 300;
    }

</style>
