<script lang="ts" context="module">

    type UserRole = 'student' | 'parent' | 'teacher' | 'admin';

</script>

<script lang="ts">
    
    import { routeApp } from "./routes/router";
    import Login from "./routes/login/Login.svelte";
    import StudentOverview from "./routes/student/overview/StudentOverview.svelte"
    import ParentOverview from "./routes/parent/overview/ParentOverview.svelte"
    import TeacherOverview from "./routes/teacher/overview/TeacherOverview.svelte"
    import AdminOverview from "./routes/admin/overview/AdminOverview.svelte"

    const route = routeApp();
    const role: UserRole = 'student';

</script>

{#if route === '/'}

    <Login />

{:else if route === '/overview'}

    {#if role === 'student'}

        <StudentOverview />

    {:else if role === 'parent'}

        <ParentOverview />

    {:else if role === 'teacher'}

        <TeacherOverview />

    {:else} <!-- === 'admin' is redundant -->

        <AdminOverview />

    {/if}

{/if}

<style>
    
</style>
