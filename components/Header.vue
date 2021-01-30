<template lang="html">
  <div class="navbar fixed z-20 navbar-collapse-md navbar-white" style="top:0; right:0;">
    <div class="container container-xxl row justify-between align-center" style="margin:0px auto;">
    <nuxt-link to="/" class="brand"> Customizable CSS</nuxt-link>
    <div class="searchbar-container display-md-none" :class="{show:showSearchBar}">
      <search class="display-sm-0" />
    </div>
    <div class="pr-4">
<a class="btn b-0 mr-0 p-2 display-sm-none " @click="toggleSearchBar()" data-target="navbar_navigation">
      <i
        class="material-icons nav-toggler-icon "
        data-target="navbar_navigation"
      >
        {{showSearchBar?'close':'search'}}
      </i>
    </a>
    <button class="btn nav-toggler p-2 mr-4 b-0" data-target="navbar_navigation">
      <i
        class="material-icons nav-toggler-icon"
        data-target="navbar_navigation"
      >
        menu
      </i>
    </button>
    </div>

    <!-- Navigation -->
    <div class="nav-menu flex-auto justify-end hidden flex-auto" style="width:auto" id="navbar_navigation">
      <ul class="nav">
        <li class="nav-item py-2 display-none display-md-block">
                <search class="display-sm-0" />
        </li>
        <li class="nav-item">
          <nuxt-link to="/" class="nav-link">Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/docs" class="nav-link">Docs</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/about" class="nav-link">About</nuxt-link>
        </li>
      </ul>
       </div>
    </div>
  </div>
</template>
<script>
import Search from "./Search";
export default {
  components: {
    Search,
  },
  data: () => {
    return {
      showSearchBar: false,
    };
  },
  methods: {
    toggleSearchBar() {
      this.showSearchBar = !this.showSearchBar;
    },
  },
};
</script>
<style lang="scss">
</style>