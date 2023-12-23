<script lang="ts">

    import Footer from "./Footer.svelte";
    import TextInput from "./TextInput.svelte";
    import Blobs from "./Blobs.svelte";

    function login(): void {
        console.log("logging in");
    }

</script>

<main>

    <div>

        <img alt="LearnHub Logo" src="./logo.svg" />

        <h1>Welcome!</h1>

        <h2>Please sign in</h2>

        <TextInput
            placeholder="Login"
        />

        <TextInput
            placeholder="Password"
            type="password"
        />

        <!-- a or button? -->
        <a href="" class="forgot-password">
            Forgot Your Password?
        </a>

        <button on:click={login}>
            Login
        </button>

        <a href="" class="create-account">
            Create New Account
        </a>

    </div>

    <Footer />

    <Blobs />

</main>

<style>

    main {
        position: relative;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 100%;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: fit-content;
        margin: auto;
        z-index: 1;
    }

    img {
        margin-bottom: 40px;
    }

    h1 {
        color: black; /* should be changed */
        margin-bottom: 10px;
        font-size: 64px;
        font-weight: bold;
        text-transform: uppercase;
    }

    h2 {
        color: var(--cl-low-emphasis);
        font-size: 32px;
        font-weight: normal;
        margin-bottom: 40px; /* */
    }

    .forgot-password {
        color: var(--cl-secondary);
        text-align: right;
        width: 100%;
        font-size: 12px;
        font-weight: bold;
        text-transform: capitalize;
    }

    button {
        width: 100%;
        height: 54px; /* */
        margin: 14px 0 40px 0; /* */
        border: none;
        border-radius: 4px;
        background-color: var(--cl-accent);
        color: white;
        font-size: 16px;
        font-weight: bold;
        cursor: pointer;
    }

    .create-account {
        color: var(--cl-secondary);
        font-size: 16px;
        font-weight: bold;
        text-transform: capitalize;
    }

</style>
