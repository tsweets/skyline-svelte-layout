<div class="header-container">
    <i  on:click={handleToggleMenuClick} class="header__toggle fa fa-bars"/>

    <div class="header__search">Search...</div>
    <div class="header__avatar"><img alt="user-avatar" src="https://via.placeholder.com/32x32.png?text=TS"/></div>
</div>

<script lang="ts">
    import {sidebarCollapsed} from "../../../stores";
    function handleToggleMenuClick(event) {
        console.log("Menu Toggle Clicked: ");
        sidebarCollapsed.update(sidebarCollapsed => !sidebarCollapsed)
    }
</script>

