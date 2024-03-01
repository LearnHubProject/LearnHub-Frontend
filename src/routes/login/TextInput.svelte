<script lang="ts">

    export let type: 'text' | 'password' = 'text';
    export let placeholder: string = "";
    export let text: string = "";

    let passwordVisible: boolean = false;

    function togglePassVisibility(): void {
        passwordVisible = !passwordVisible;
    }

    function textChanged(e: Event): void {
        if (!(e.target instanceof HTMLInputElement)) { // unreachable, but just in case
            console.error("The target of the InputEvent was not a text field.");
            return;
        }

        text = (e.target as HTMLInputElement).value;
    }

</script>

<main>

    <!-- Can't just bind:value, doesn't work for dynamic input types -->
    <input type={passwordVisible ? 'text' : type} {placeholder} on:input={textChanged} />


    {#if type !== 'text'}

        <button on:click={togglePassVisibility}>
        
            <img src={passwordVisible ? './icons/visibility_off.svg' : './icons/visibility.svg'} alt="visible" />
        
        </button>

    {/if}

</main>

<style>

    main {
        display: grid;
        grid-template-columns: 1fr max-content;
        grid-template-rows: 1fr;
        align-items: center;
        width: 380px;
        height: fit-content;
        background-color: rgb(237, 234, 238);
        border-radius: 4px;
        margin: 7px 0 7px 0;
    }
    
    input {
        padding: 16px 12px 14px 14px;
        background-color: transparent;
        font-size: 16px;
        line-height: 1.5;
    }

    button {
        margin: 12px;
        aspect-ratio: 1 / 1;
        border-radius: 4px;
    }

</style>
