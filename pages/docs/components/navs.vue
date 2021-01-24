<template lang="html">
  <!-- ### NAVS  ###-->
  <div id="navs">
    <h5>
      Navs
    </h5>
    <p>
      You can use nav for navigation
    </p>
    <pre><code lang="html"><span class="tag">&lt;ul&gt; </span><span class="prop">class=</span><span class="val">"nav"</span> <span class="tag">&gt; </span></code>
                <span class="tag">&lt;li </span><span class="prop">class=</span><span class="val">"nav-item"</span><span class="tag">&gt;</span>
                <span class="tag">&lt;a </span> <span class="prop">href=</span><span class="val">"#"</span> <span class="prop">class=</span><span class="val">"nav-link"</span><span class="tag">&gt;</span>Link a<span class="tag">&lt;/a&gt;</span>
                <span class="tag">&lt;/li&gt;</span>
                <span class="tag">&lt;li </span><span class="prop">class=</span><span class="val">"nav-item"</span><span class="tag">&gt;</span>
                <span class="tag">&lt;a </span> <span class="prop">href=</span><span class="val">"#"</span> <span class="prop">class=</span><span class="val">"nav-link"</span><span class="tag">&gt;</span>Link a<span class="tag">&lt;/a&gt;</span>
                <span class="tag">&lt;/li&gt;</span>
                <span class="tag">&lt;li </span><span class="prop">class=</span><span class="val">"nav-item"</span><span class="tag">&gt;</span>
                <span class="tag">&lt;a </span> <span class="prop">href=</span><span class="val">"#"</span> <span class="prop">class=</span><span class="val">"nav-link"</span><span class="tag">&gt;</span>Link a<span class="tag">&lt;/a&gt;</span>
                <span class="tag">&lt;/li&gt;</span>
                <span class="tag">&lt;/ul&gt;</span></pre>
    <ul class="nav mb-4">
      <li class="nav-item">
        <a href="" class="nav-link">Link a</a>
      </li>
      <li class="nav-item">
        <a href="" class="nav-link">Link b</a>
      </li>
      <li class="nav-item">
        <a href="" class="nav-link">Link c</a>
      </li>
    </ul>

    <p class="b-4">
      You can change the direction of the nav by adding the class
      <b>.horizontal</b>
    </p>
    <pre><code lang="html"><span class="tag">&lt;ul&gt; </span><span class="prop">class=</span><span class="val">"nav horizontal"</span> <span class="tag">&gt; </span></code>
                ...
                <span class="tag">&lt;/ul&gt;</span></pre>
    <ul class="nav horizontal mb-4">
      <li class="nav-item">
        <a href="" class="nav-link">Link a</a>
      </li>
      <li class="nav-item">
        <a href="" class="nav-link">Link b</a>
      </li>
      <li class="nav-item">
        <a href="" class="nav-link">Link c</a>
      </li>
    </ul>
    <p class="b-4">
      You can use nav as breadcrumbs by ading the class <b>.breadcrumbs</b>, you
      can also add the class <b>.is-active</b> to a <b>.nav-link</b>
      in order represent the curren position of breadcrumb.
    </p>
    <pre><code lang="html"><span class="tag">&lt;ul&gt; </span><span class="prop">class=</span><span class="val">"nav breadcrumbs"</span> <span class="tag">&gt; </span>
                <span class="tag">&lt;li&gt; </span><span class="prop">class=</span><span class="val">"nav-item"</span> <span class="tag">&gt; </span>
                <span class="tag">&lt;a&gt; </span><span class="prop">class=</span><span class="val">"nav-link"</span> <span class="tag">&gt; </span> ... <span class="tag">&lt;/a&gt;</span>
                <span class="tag">&lt;/li&gt;</span>
                <span class="tag">&lt;li&gt; </span><span class="prop">class=</span><span class="val">"nav-item"</span> <span class="tag">&gt; </span>
                <span class="tag">&lt;a&gt; </span><span class="prop">class=</span><span class="val">"nav-link is-active"</span> <span class="tag">&gt; </span> ... <span class="tag">&lt;/a&gt;</span>
                <span class="tag">&lt;/li&gt;</span>
                <span class="tag">&lt;/ul&gt;</span>
                </code>   
                </pre>
    <ul class="nav breadcrumbs mb-4">
      <li class="nav-item">
        <a href="" class="nav-link">Link a</a>
      </li>
      <li class="nav-item">
        <a href="" class="nav-link">Link b</a>
      </li>
      <li class="nav-item">
        <a href="" class="nav-link is-active">Link c</a>
      </li>
    </ul>
  </div>
  <!-- ### END OF NAVS  ###-->
</template>
<script>
export default {
  layout: "doc",
  head() {
    return {
      title: "Customizable Css - Navs",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Learn how to use Customizable css Navs component"
        }
      ]
    };
  }
};
</script>
