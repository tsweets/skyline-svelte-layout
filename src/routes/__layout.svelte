<script lang="ts">
    import PortalHeader from "$lib/./layout/portal-header/PortalHeader.svelte";
    import PortalSideNav from "$lib/./layout/portal-side-nav/PortalSideNav.svelte";
    import PortalMainHeader from "$lib/./layout/portal-main-header/PortalMainHeader.svelte";
    import OverviewCard from "$lib/./layout/overview-card/OverviewCard.svelte";
    import PortalCard from "$lib/./layout/portal-card/PortalCard.svelte";
    import PortalFooter from "$lib/./layout/portal-footer/PortalFooter.svelte";
    import "../app.css";
    import '../layout.css';
    import {sidebarCollapsed} from "../stores";

    /*let sidebarCollapsedValue;
    sidebarCollapsed.subscribe(value => {sidebarCollapsedValue = value});*/
</script>
<div class="grid-container" class:collapsed="{$sidebarCollapsed}">

    <!--

        <div class="grid-container" v-bind:class="{ collapsed: sidebarCollapsed }">
    -->
    <header class="header">
        <PortalHeader />
    </header>

    <aside class="sidenav" class:collapse="{$sidebarCollapsed}">
        <PortalSideNav/>
    </aside>

    <main class="main">
        <div class="main-header">
            <PortalMainHeader/>
        </div>

        <div class="main-overview">
            <div class="overviewcard">
                <OverviewCard/>
            </div>
            <div class="overviewcard">
                <OverviewCard/>
            </div>
            <div class="overviewcard">
                <OverviewCard/>
            </div>
            <div class="overviewcard">
                <OverviewCard/>
            </div>
        </div>

        <div class="main-cards">
            <div class="card">
                <PortalCard/>
            </div>
            <div class="card">
                <PortalCard/>
            </div>
            <div class="card">
                <PortalCard/>
            </div>
        </div>
    </main>

    <footer class="footer">
        <PortalFooter/>
    </footer>
</div>


