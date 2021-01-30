<template lang="html">
  <div style="padding-top: 58px;scroll-behavior: smooth;">
    <Header />
    <div class="container container-xxl " >
      <div class="row " >
        <Sidebar />
        <div class="col w-12 w-lg-4/5 px-4">
          <NuxtChild />
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>
<script>
import Sidebar from "../components/Sidebar";
import Footer from '../components/Footer';
export default {
  layout:'doc',
  components: {
    Sidebar,
    Footer
  }
};
</script>
