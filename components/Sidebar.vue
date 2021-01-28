<template lang="html">
  <div
    id="sidebarContainer"
    class="col p-2 z-10 col-w-lg-3  sidebar sidebar-collapse-lg bg-white"
    style="border-right:1px solid rgba(0,0,0,0.12);"
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
              <NuxtLink to="/docs/breakpoints" class="nav-link"
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
          <ul class="nav">
            <li class="nav-item">
              <NuxtLink to="/docs/form_field" class="nav-link">
                Form field</NuxtLink
              >
            </li>
            <li class="nav-item">
              <NuxtLink
                to="/docs/form_field#form_field_with_addons"
                class="nav-link"
                >Foorm field with addon</NuxtLink
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
          <ul class="nav">
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
              <NuxtLink to="/docs/components/navs" class="nav-link"
                >Navs</NuxtLink
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
          <ul class="nav">
            <li class="nav-item">
              <NuxtLink to="/docs/utilities/colors" class="nav-link"
                >Colors</NuxtLink
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
              <NuxtLink to="//docs/utilities/z_index" class="nav-link"
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
                to="/docs/utilities/transitions_and_hover"
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
      id="expandTrigger"
    >
      <span class="material-icons"> chevron_right</span>
    </button>
  </div>
</template>
