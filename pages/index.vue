<template>
  <div>
    <div
      class="row justify-center align-center"
      style="height:calc(100vh - 57px);"
    >
      <div class="col col-w-12 col-w-md-8 col-w-lg-6 text-center">
        <h1 class="font-sm-4xl font-3xl text-center">
          Wellcome to 
        </h1>
        <h1 class="font-md-7xl font text-blue-600 bold">
          Customizable css
        </h1>
        <p class="font-xl">
          Customizable css is a css framework that use Utility based clasess as
          well as Components
        </p>
        <div class="row justify-center">
          <nuxt-link to="/docs" class="btn mb-4  btn-primary btn-size-4 transition-colors timing-ease-in-out duration-200">
            Get started</nuxt-link
          >
          <a
            href="https://www.npmjs.com/package/customizable-css"
            class="btn btn-primary-outline mb-4 btn-size-4 transition-colors timing-ease-in-out duration-200"
          >
            Installation</a
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
h2::before,h1::before,h3::before{
display: block;
    content: " ";
    margin-top: -85px;
    height: 85px;
    visibility: hidden;
    pointer-events: none;
}
pre{

  margin-bottom: 4;
}
</style>
