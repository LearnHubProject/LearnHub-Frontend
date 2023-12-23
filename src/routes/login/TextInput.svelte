<script lang="ts">

    export let type: 'text' | 'password' = 'text';
    export let placeholder: string = "";

    let passwordVisible: boolean = false;

    function togglePassVisibility(): void {
        passwordVisible = !passwordVisible;
    }

</script>

<main>

    <input type={passwordVisible ? 'text' : type} {placeholder} />


    {#if type !== 'text'}

        <button on:click={togglePassVisibility}>
        
            <img alt="eye" src="/eye.svg" />
        
        </button>

    {/if}

</main>

<style>

    main {
        display: flex;
        width: 380px;
        height: fit-content;
        background-color: rgb(33, 33, 33, .08); /* should be a variable! */
        border-radius: 4px;
        margin: 7px 0 7px 0;
    }
    
    input {
        width: 100%;
        padding: 16px 12px 14px 14px;
        background-color: transparent;
        font-size: 16px;
        line-height: 1.5;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        aspect-ratio: 1 / 1;
        margin: 12px;
        border: none;
        border-radius: 4px;
    }

</style>
