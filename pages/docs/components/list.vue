<template>
  <div id="list">
    <H4>Lists</H4>
    <p>you can order a list of items by using the class <b>.list</b></p>
    <p>Normal <b>ul</b>:</p>
    <ul class="mb-4">
      <li>
        item 1
      </li>
      <li>
        item 2
      </li>
      <li>
        item 3
      </li>
    </ul>
    <p class="mt-4"><b>ul</b> with <b>.list</b></p>
    <pre><code lang="html"><span class="tag">&lt;ul</span> <span class="prop">class=</span><span class="val">"list"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;li</span> <span class="prop">class=</span><span class="val">"item"</span><span class="tag">&gt;</span>
        Lorem ipsum dolor
    <span class="tag">&lt;/li&gt;</span>
    <span class="tag">&lt;li</span> <span class="prop">class=</span><span class="val">"item"</span><span class="tag">&gt;</span>
        Lorem ipsum dolor
    <span class="tag">&lt;/li&gt;</span>
    <span class="tag">&lt;li</span> <span class="prop">class=</span><span class="val">"item"</span><span class="tag">&gt;</span>
        Lorem ipsum dolor
    <span class="tag">&lt;/li&gt;</span>
<span class="tag">&lt;/ul&gt;</span></code></pre>
    <ul class="list">
      <li class="item">
        Lorem ipsum dolor
      </li>
      <LI class="item">
        Lorem ipsum dolor
      </LI>
      <li class="item">
        Lorem ipsum dolor
      </li>
    </ul>
    <p>
      If you want you can separate each list item by adding the class
      <b>.list-separated</b>
    </p>
    <pre><code lang="html"><span class="tag">&lt;ul</span> <span class="prop">class=</span><span class="val">"list separated"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;li</span> <span class="prop">class=</span><span class="val">"item"</span><span class="tag">&gt;</span>
        Lorem ipsum dolor
    <span class="tag">&lt;/li&gt;</span>
    <span class="tag">&lt;li</span> <span class="prop">class=</span><span class="val">"item"</span><span class="tag">&gt;</span>
        Lorem ipsum dolor
    <span class="tag">&lt;/li&gt;</span>
    <span class="tag">&lt;li</span> <span class="prop">class=</span><span class="val">"item"</span><span class="tag">&gt;</span>
        Lorem ipsum dolor
    <span class="tag">&lt;/li&gt;</span>
<span class="tag">&lt;/ul&gt;</span></code></pre>
    <ul class="list list-separated mb-4">
      <li class="item">
        Lorem ipsum dolor
      </li>
      <LI class="item">
        Lorem ipsum dolor
      </LI>
      <li class="item">
        Lorem ipsum dolor
      </li>
    </ul>

    <p class="mb-4">
      You can also add <b>.list-border </b> class in order to make list item
      bordered
    </p>
    <pre><code lang="html"><span class="tag">&lt;ul</span> <span class="prop">class=</span><span class="val">"list list-border"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;li</span> <span class="prop">class=</span><span class="val">"item"</span><span class="tag">&gt;</span>
        Lorem ipsum dolor
    <span class="tag">&lt;/li&gt;</span>
    <span class="tag">&lt;li</span> <span class="prop">class=</span><span class="val">"item"</span><span class="tag">&gt;</span>
        Lorem ipsum dolor
    <span class="tag">&lt;/li&gt;</span>
    <span class="tag">&lt;li</span> <span class="prop">class=</span><span class="val">"item"</span><span class="tag">&gt;</span>
        Lorem ipsum dolor
    <span class="tag">&lt;/li&gt;</span>
<span class="tag">&lt;/ul&gt;</span></code></pre>
    <ul class="list list-border">
      <li class="item">
        Lorem ipsum dolor
      </li>
      <li class="item">
        sit amet consectetur
      </li>
      <li class="item">
        adipisicing elit. Quae reiciendis
      </li>
      <li class="item">
        voluptas repellendus veritatis
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  layout: "doc",
  head() {
    return {
      title: "Customizable Css - List",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Learn how to use Customizable css List component"
        }
      ]
    };
  }
};
</script>
