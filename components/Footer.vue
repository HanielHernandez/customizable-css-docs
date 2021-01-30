<template>
  <div class="footer">
    <div class=" container container-xxl  pt-8">
      <div class="row justify-between pb-8">
        <div class="">
          <h3 class="px-4  mb-0">
            Documentation
          </h3>
          <ul class="nav">
            <li class="nav-item">
              <nuxt-link to="/docs/grid/" class="nav-link">Layout </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/docs/buttons/" class="nav-link"
                >Components
              </nuxt-link>
            </li>
            <li class="nav-item">
              <nuxt-link to="/docs/colors/" class="nav-link"
                >Utilities
              </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="text-center">
          <h3 class="px-4 mb-2">
            Site
          </h3>
          <ul class="nav">
            <li class="nav-item ">
              <nuxt-link to="/" class="nav-link"> Home </nuxt-link>
            </li>
            <li class="nav-item ">
              <nuxt-link to="/docs/" class="nav-link"> Docs </nuxt-link>
            </li>
            <li class="nav-item ">
              <nuxt-link to="/about/" class="nav-link"> About </nuxt-link>
            </li>
          </ul>
        </div>
        <div class="text-right">
          <h3 class="px-4">
            Support
          </h3>
          <ul class="nav">
            <li class="nav-item ">
              <a href="https://github.com/HanielHernandez/custom-css" class="nav-link" style="display-flex align-center"> 
                <img src="/img/github.png" alt="" style="width:24px; height:24px;"> </a>
            </li>
            <li class="nav-item ">
              <a href="https://www.npmjs.com/package/customizable-css" class="nav-link"> NPM </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="row p-4 bt align-center">
        <p class="mb-0"> <b>Customizable CSS</b> By Haniel Hernández. <b>2021</b></p> 
      </div>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.footer {
  background-color: rgba(#000, 0.05);
  color: rgba(#000, 0.53);
}
</style>
