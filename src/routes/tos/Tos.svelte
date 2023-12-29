<script lang="ts">

    import Footer from "../../components/Footer.svelte";
    import Blobs from "../../components/Blobs.svelte";


</script>

<svelte:head>
    <title>LearnHub - Tos</title>
</svelte:head>

<main>

    <div>

        <section>
            <h1>Terms of Service</h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eius vero numquam facilis quisquam eos officiis optio! Officiis assumenda delectus reiciendis ipsam minima vitae perspiciatis quos, harum nobis! Numquam, sapiente reprehenderit.
            </p>
        </section>

        <section>
            <h2>How it all began</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsum nisi sed. Labore eius aliquam ea nobis temporibus distinctio laboriosam laborum iusto est quos ut, eligendi perspiciatis, non cupiditate architecto.
            </p>
        </section>

        <section>
            <h2>Contributing</h2>
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam officia consequatur omnis id adipisci asperiores, quaerat eum aut voluptas? Illo deleniti repellendus non dignissimos distinctio reprehenderit ipsa suscipit accusantium officiis!
            </p>
        </section>
        
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
        max-width: 30%;
        padding: 2em;
        margin: auto;
        border: 1px solid var(--cl-secondary);
        border-radius: 1em;
        background-color: var(--cl-surface);
        z-index: 1;
    }

    section {
        margin: 1em;
        font-size: 18px;
    }

    h1 {
        font-size: 36px;
        font-weight: bold;
    }

    h2 {
        font-size: 24px;
        font-weight: bold;
    }

    p {
        text-align: justify;
    }

</style>
