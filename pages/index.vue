<template>
  <div>
    <div
      class="row justify-center align-center"
      style="height:calc(100vh - 57px);"
    >
      <div class="col col-w-12 col-w-md-8 col-w-lg-6 text-center">
        <h1 class="font-7xl text-center">
          Wellcome to Customizable css
        </h1>
        <p class="font-xl">
          Customizable css is a css framework that use Utility based clasess as
          well as Components
        </p>
        <div class="row justify-center">
          <nuxt-link to="/docs" class="btn btn-primary btn-size-4 ">
            Get started</nuxt-link
          >
          <a
            href="https://www.npmjs.com/package/customizable-css"
            class="btn btn-primary-outline btn-size-4"
          >
            Installatio</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  header: {
    title: ""
  }
};
</script>

<style lang="scss">
.hljs {
  &-tag {
    color: lightblue;
  }
}
</style>
