<template lang="html">
  <div>
    <Header />
    <div class="container container-xxl " style="padding-top: 58px">
      <div class="row">
        <Sidebar />
        <div class="col w-12 p-4">
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
