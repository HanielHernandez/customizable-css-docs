<template>
  <div>
    <Header></Header>
    <div class="container container-xxl pt-14">
      <Nuxt />
    </div>
  </div>
</template>
<script>
import Header from "../components/Header";
export default {
  components: {
    Header
  }
};
</script>
<style></style>
