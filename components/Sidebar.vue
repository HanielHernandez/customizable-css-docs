<template lang="html">
  <div
    id="sidebarContainer"
    v-click-outside="onClickOutside"
    style="top: calc(3.5rem + 3px);"
    class="col p-4 z-10 w-lg-1/5  sidebar sidebar-collapse-lg bg-white"
  >
    <ul class="nav overflow-y-auto" style="max-height: 100%;">
      <li class="nav-item">
        <button
          href="javascript:void(0);"
          class="expandible-trigger font-medium btn flat"
          data-target="gridsMenu"
        >
          Layout
        </button>
        <div class="expandible " id="gridsMenu">
          <ul class="nav pl-4">
            <li class="nav-item">
              <NuxtLink to="/docs/layout/grid" class="nav-link">Grid</NuxtLink>
            </li>
            <li class="nav-tem">
              <NuxtLink to="/docs/layout/breakpoints" class="nav-link"
                >Breakpoints</NuxtLink
              >
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <button
          href="javascript:void(0);"
          class="expandible-trigger font-medium btn flat"
          data-target="formsMenu"
        >
          Forms
        </button>
        <div id="formsMenu" class="expandible">
          <ul class="nav pl-4">
            <li class="nav-item">
              <NuxtLink to="/docs/forms/form_field" class="nav-link">
                Form field</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink
                to="/docs/forms/form_field#form-field-with-addons"
                class="nav-link"
                >Form field with addons</NuxtLink
              >
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <button
          href="javascript:void(0);"
          class="expandible-trigger font-medium btn flat"
          data-target="componentsMenu"
        >
          Components
        </button>
        <div id="componentsMenu" class="expandible">
          <ul class="nav pl-4">
            <li class="nav-item">
              <NuxtLink to="/docs/components/buttons" class="nav-link">
                Buttons</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink to="/docs/components/cards" class="nav-link">
                Cards</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink to="/docs/components/modals" class="nav-link"
                >Modal</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink to="/docs/components/notifications" class="nav-link"
                >Notifications</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink to="/docs/components/navs_and_tabs" class="nav-link"
                >Navs and Tabs</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink to="/docs/components/navbar" class="nav-link"
                >Navbar</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink to="/docs/components/list" class="nav-link">
                List</NuxtLink
              >
            </li>

            <li class="nav-item">
              <NuxtLink to="/docs/components/tables" class="nav-link">
                Tables</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink to="/docs/components/spinner" class="nav-link">
                Spinner</NuxtLink
              >
            </li>
          </ul>
        </div>
      </li>
      <li class="nav-item">
        <button
          href="javascript:void(0);"
          class="expandible-trigger font-medium btn flat"
          data-target="utilitiesMenu"
        >
          Utilities
        </button>
        <div class="expandible" id="utilitiesMenu">
          <ul class="nav pl-4">
            <li class="nav-item">
              <NuxtLink to="/docs/utilities/colors" class="nav-link"
                >Colors</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink to="/docs/utilities/borders_and_borders_radius" class="nav-link"
                >Borders and Border Radius</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink to="/docs/utilities/displays" class="nav-link"
                >Displays</NuxtLink
              >
            </li>

            <li class="nav-item">
              <NuxtLink to="/docs/utilities/flex_box" class="nav-link"
                >Flex box</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink to="/docs/utilities/position" class="nav-link"
                >Position</NuxtLink
              >
            </li>

            <li class="nav-item">
              <NuxtLink to="/docs/utilities/overflows" class="nav-link">
                Overflow</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink to="/docs/utilities/padding_and_margin" class="nav-link"
                >Padding and Margin</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink to="/docs/utilities/opacity" class="nav-link"
                >Opacity</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink to="/docs/utilities/z_index" class="nav-link"
                >Z-index</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink to="/docs/utilities/shadows" class="nav-link"
                >Shadows</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink to="/docs/utilities/text" class="nav-link"
                >Fonts and text</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink
                to="/docs/utilities/trasitions_and_hover"
                class="nav-link"
                >Transitions and Hover</NuxtLink
              >
            </li>
          </ul>
        </div>
      </li>
    </ul>

    <button
      class="btn expand-btn sidebar-toggler bg-white"
      data-target="sidebarContainer"
      ref="closeSidebar"
      id="expandTrigger"
    >
      <span class="material-icons"> chevron_right</span>
    </button>
  </div>
</template>
<script>
import vClickOutside from "v-click-outside";
export default {
  directives:{
        clickOutside: vClickOutside.directive
  },
  methods:{
    onClickOutside(){
      
    }
  }
}
</script>