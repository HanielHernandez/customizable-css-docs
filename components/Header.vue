<template lang="html">
  <div class="navbar fixed z-20 navbar-collapse-md navbar-white">
    <nuxt-link to="/" class="brand"> Customizable CSS</nuxt-link>
    <button class="btn nav-toggler b-0" data-target="navbar_navigation">
      <i
        class="material-icons nav-toggler-icon"
        data-target="navbar_navigation"
      >
        menu
      </i>
    </button>
    <input type="text" class="form-input " style="width:150px" />
    <div class="nav-menu justify-end hidden" id="navbar_navigation">
      <ul class="nav">
        <li class="nav-item">
          <nuxt-link to="/" class="nav-link">Home</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/doc" class="nav-link">Docs</nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/about" class="nav-link">About</nuxt-link>
        </li>
      </ul>
    </div>
  </div>
</template>
