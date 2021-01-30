<template lang="html">
  <div class="navbar fixed z-20 navbar-collapse-md navbar-white" style="top:0; right:0;">
    <div class="container container-xxl row justify-between align-center" >
    <nuxt-link to="/" class="brand"> Customizable CSS</nuxt-link>
    <div class="searchbar-container display-md-none" :class="{show:showSearchBar}">
      <search class="display-sm-0"> </search>
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
    <div class="nav-menu flex-auto justify-end hidden " id="navbar_navigation">
      <ul class="nav justify-end">
        <li class="nav-item py-2 display-none display-md-block pr-2">
                <search class="display-sm-0" />
        </li>
        <li class="nav-item ">
          <nuxt-link to="/" class="nav-link hover:text-blue-600">
            Home
          </nuxt-link>
        </li>
        <li class="nav-item ">
          <nuxt-link to="/docs/" class="nav-link hover:text-blue-600" >
            Docs
          </nuxt-link>
        </li>
        <li class="nav-item hover:text-blue-600">
          <nuxt-link to="/about/" class="nav-link  hover:text-blue-600" >
            About
          </nuxt-link>
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
<style scoped lang="scss">
.nav-link:hover{
  background: rgba( #1e88e5, 0.12);
}
</style>