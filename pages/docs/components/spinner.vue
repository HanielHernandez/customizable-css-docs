<template>
  <!-- ### SPINNER / LOADER ###-->
  <div id="spinner">
    <H4>Spinner</H4>
    <p>
      you can create a spinner for loading animations by adding the class
      <b>.spinner </b> into a div
    </p>
    <pre><code data="html"><span class="tag">&lt;div</span><span class="prop"> class=</span><span class="val">"spinner"</span>>
<span class="tag">&lt;/div></span></code></pre>
    <div class="row justify-center mb-4">
      <div class="spinner"></div>
    </div>
    <p>
      youn can change spinner color by adding the class
      <b>.spiner-{theme-color}</b>
    </p>
    <pre><code data="html"><span class="tag">&lt;div</span><span class="prop"> class=</span><span class="val">"spinner spinner-primary"</span>>
<span class="tag">&lt;/div></span></code>
<code data="html"><span class="tag">&lt;div</span><span class="prop"> class=</span><span class="val">"spinner spinner-green-500"</span>>
<span class="tag">&lt;/div></span></code></pre>
    <div class="row justify-start mb-4">
      <div class="spinner spinner-primary mr-4"></div>
      <div class="spinner spinner-green-500"></div>
    </div>
    <p>
      you can change the width and tickness of a spinner by using the class
      <b>.w-{1-24}</b> and
      <b>.t-{1-24}</b>
    </p>
    <pre><code data="html"><span class="tag">&lt;div</span><span class="prop"> class=</span><span class="val">"spinner w-5 t-6"</span>>
<span class="tag">&lt;/div></span></code>
<code data="html"><span class="tag">&lt;div</span><span class="prop"> class=</span><span class="val">"spinner w-12 t-2"</span>>
<span class="tag">&lt;/div></span></code></pre>
    <div class="row p-4 justify-start align-center">
      <div class="spinner w-5 t-6 mr-4"></div>
      <div class="spinner w-12 t-2"></div>
    </div>
  </div>
  <!-- ### END OF SPINNER ###--></template
>
<script>
export default {
  layout: "doc",
  head() {
    return {
      title: "Customizable Css - Spinner",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Learn how to use Customizable css Spinner component"
        }
      ]
    };
  }
};
</script>
