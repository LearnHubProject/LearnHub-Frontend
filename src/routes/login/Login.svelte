<script lang="ts">

    import { loginRequest } from "../../scripts/api";
    import Footer from "../../components/Footer.svelte";
    import TextInput from "./TextInput.svelte";
    import Blobs from "../../components/Blobs.svelte";

    let email: string;
    let password: string;

    async function login(): Promise<void> {
        // TODO: log in
        let resp = await loginRequest(email, password);
        if (!resp.successful) {
            console.error(resp.error);
            // Also reflect with the UI
            return;
        }

        // Assing the token and the role of the user

        location.href = '/overview';
    }

</script>

<svelte:head>
    <title>LearnHub - Login</title>
</svelte:head>

<main>

    <div>

        <img src="./logo.svg" alt="LearnHub Logo" />

        <h1>Welcome!</h1>

        <h2>Please sign in</h2>

        <TextInput
            placeholder="Login"
            bind:text={email}
        />

        <TextInput
            placeholder="Password"
            type="password"
            bind:text={password}
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
        color: var(--cl-high-emphasis);
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
        height: 54px;
        margin: 14px 0 40px 0;
        border: none;
        border-radius: 4px;
        background-color: var(--cl-accent);
        color: var(--cl-background-tint);
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
