<script>
    import {sidebarCollapsed} from "../../../stores";
/*
    let sidebarCollapsedValue;
    sidebarCollapsed.subscribe(value => {sidebarCollapsedValue = value});
*/

</script>
<div class="portal-side-nav">
    {#if (!$sidebarCollapsed)}
        <img alt="nav-logo" src="https://via.placeholder.com/240x85.png?text=nav-logo" />
    {/if}
    <ul>
        <li>Menu Item 1</li>
        <li>Menu Item 2</li>
        <li>Menu Item 3</li>
        <li>Menu Item 4</li>
        <li>Menu Item 5</li>
        <li>
        <ul>
            <li>Sub Menu Item 1</li>
            <li>Sub Menu Item 2</li>
            <li>Sub Menu Item 3</li>

        </ul>
        </li>
    </ul>
</div>
