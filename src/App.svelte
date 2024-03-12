<script lang="ts">
    
    import { routeApp } from "./routes/router";
    import { user } from "$script/user"
    import Login from "./routes/login/Login.svelte";
    import About from "./routes/about/About.svelte";
    import Privacy from "./routes/privacy/Privacy.svelte";
    import Tos from "./routes/tos/Tos.svelte";
    import StudentOverview from "./routes/student/overview/StudentOverview.svelte"
    import ParentOverview from "./routes/parent/overview/ParentOverview.svelte"
    import TeacherOverview from "./routes/teacher/overview/TeacherOverview.svelte"
    import AdminOverview from "./routes/admin/overview/AdminOverview.svelte"

    const route = routeApp();

</script>

{#if route === '/'}

    <Login />

{:else if route === '/about'}

    <About />

{:else if route === '/privacy'}

    <Privacy />

{:else if route === '/tos'}

    <Tos />

{:else if route === '/overview'}

    {#if user.role === 'student'}

        <StudentOverview />

    {:else if user.role === 'parent'}

        <ParentOverview />

    {:else if user.role === 'teacher'}

        <TeacherOverview />

    {:else} <!-- === 'admin' is redundant -->

        <AdminOverview />

    {/if}

{/if}

<style>
    
</style>
