<template lang="html">
  <div class="navbar fixed navbar-collapse-md navbar-white">
    <nuxt-link to="/" class="brand"> Customizable CSS</nuxt-link>
    <button class="btn nav-toggler" data-target="navbar_navigation">
      <i class="material-icons">
        menu
      </i>
    </button>
    <div class="nav-menu justify-end hidden" id="navbar_navigation">
      <ul class="nav">
        <li class="nav-item">
          <nuxt-link to="/" class="nav-link">Home</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
