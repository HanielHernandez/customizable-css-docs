<template lang="html">
  <div style="padding-top: 58px">
    <Header />
    <div class="container container-xxl " >
      <div class="row " >
        <Sidebar />
        <div class="col w-12 w-lg-9/12 px-4">
          <NuxtChild />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Sidebar from "../components/Sidebar";

export default {
  components: {
    Sidebar
  }
};
</script>
