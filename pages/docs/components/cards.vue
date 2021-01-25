<template>
  <!-- ### CARDS ###-->
  <div id="cards">
    <h4>
      Cards
    </h4>
    <p>youn can create cards by using the <b>.card</b> class</p>
    <pre><code lang="html"><span class="tag">&lt;div</span> <span class="prop">class=</span><span class="val">"card"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;div</span> <span class="prop">class=</span><span class="val">"card-head"</span><span class="tag">&gt;</span>
        <span class="tag">&lt;img</span> <span class="prop">class=</span><span class="val">"card-avatar "</span><span class="tag">/&gt;</span>
        <span class="tag">&lt;div</span> <span class="prop">class=</span><span class="val">"card-titles"</span><span class="tag">&gt;</span>
            <span class="tag">&lt;div</span> <span class="prop">class=</span><span class="val">"card-title"</span><span class="tag">&gt;</span> ... <span class="tag">&lt;/div&gt;</span> 
            <span class="tag">&lt;div</span> <span class="prop">class=</span><span class="val">"card-subtitle"</span><span class="tag">&gt;</span> ... <span class="tag">&lt;/div&gt;</span> 
        <span class="tag">&lt;/div&gt;</span> 
    <span class="tag">&lt;/div&gt;</span> 
    <span class="tag">&lt;div</span> <span class="prop">class=</span><span class="val">"card-content"</span><span class="tag">&gt;</span>
        <span class="tag">&lt;div</span> <span class="prop">class=</span><span class="val">"card-body"</span><span class="tag">&gt;</span>
            ...
        <span class="tag">&lt;/div&gt;</span> 
    <span class="tag">&lt;/div&gt;</span> 
    <span class="tag">&lt;div</span> <span class="prop">class=</span><span class="val">"card-footer"</span><span class="tag">&gt;</span>
        <span class="tag">&lt;div</span> <span class="prop">class=</span><span class="val">"card-actions"</span><span class="tag">&gt;</span>
            <span class="tag">&lt;a</span> <span class="prop">class=</span><span class="val">"btn flat"</span><span class="tag">&gt;</span> ... <span class="tag">&lt;/a&gt;</span> 
            <span class="tag">&lt;a</span> <span class="prop">class=</span><span class="val">"btn flat"</span><span class="tag">&gt;</span> ... <span class="tag">&lt;/a&gt;</span> 
        <span class="tag">&lt;/div&gt;</span>
    <span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;/div&gt;</span></code></pre>
    <div class="card">
      <div class="card-head">
        <img
          src="https://via.placeholder.com/40"
          alt="card avatar image"
          class="card-avatar"
        />
        <div class="card-titles">
          <p class="card-title">
            Card title goes here
          </p>
          <p class="card-subtitle">
            some card subtitle
          </p>
        </div>
      </div>
      <div class="card-content">
        <div class="card-body">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            architecto pariatur rem? Inventore, odit! Corporis nam voluptas
            labore iure commodi neque quam. At similique porro voluptates
            dolorum dolor vel fugiat.
          </p>
        </div>
      </div>
      <div class="card-footer">
        <div class="card-actions">
          <a href="" class="btn flat">
            action 1
          </a>
          <a href="" class="btn flat">
            action 2
          </a>
        </div>
      </div>
    </div>
    <div>
      <div class="card" style="width:350px; margin:0 auto;">
        <img
          src="https://via.placeholder.com/40"
          alt="card avatar image"
          class="card-img"
        />

        <div class="card-head">
          <img
            src="https://via.placeholder.com/40"
            alt="card avatar image"
            class="card-avatar"
          />
          <div class="card-titles">
            <p class="card-title">
              Card title goes here
            </p>
            <p class="card-subtitle">
              some card subtitle
            </p>
          </div>
        </div>
        <div class="card-content">
          <div class="card-body">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              architecto pariatur rem? Inventore, odit! Corporis nam voluptas
              labore iure commodi neque quam. At similique porro voluptates
              dolorum dolor vel fugiat.
            </p>
          </div>
        </div>
        <div class="card-footer">
          <div class="card-actions">
            <a href="" class="btn flat p-4 mr-0 r-0">
              action 1
            </a>
            <a href="" class="btn flat p-4 r-0">
              action 2
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- ### END OF CARDS ###-->
</template>
<script lang="">
export default {
  layout: "doc",
  transition: {
    name: "page",
    mode: "out-in"
  },
  head() {
    return {
      title: "Customizable Css - Cards",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Learn how to use Customizable css Cards"
        }
      ]
    };
  }
};
</script>
