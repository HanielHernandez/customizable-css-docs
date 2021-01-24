<template>
  <div id="buttons" class="">
    <h4 class="mb-4 ">
      Buttons
    </h4>

    <p class="mb-4">
      the class <b>.btn </b> can be use to create a simple button, you can
      change the color of a button by using <b>.btn-{theme/color}</b>
    </p>

    <pre><code lang="html"><span class="tag">&lt;button</span> <span class="prop">class=</span><span class="val">"btn"</span><span class="tag">&gt;</span>
    Default button
<span class="class tag">&lt;/button&gt;</span>
<span class="tag">&lt;button</span> <span class="prop">class=</span><span class="val">"btn btn-primary"</span><span class="tag">&gt;</span>
    Primary button
<span class="class tag">&lt;/button&gt;</span>
<span class="tag">&lt;button</span> <span class="prop">class=</span><span class="val">"btn btn-primary-outline""</span><span class="tag">&gt;</span>
    Primary Outline button
<span class="class tag">&lt;/button&gt;</span>
<span class="tag">&lt;button</span> <span class="prop">class=</span><span class="val">"btn btn-primary-flat""</span><span class="tag">&gt;</span>
    Flat button
<span class="class tag">&lt;/button&gt;</span></code></pre>

    <div class="mb-4">
      <a href="" class="btn">
        Default button
      </a>
      <a href="" class="btn btn-primary">
        Primary button
      </a>
      <a href="" class="btn btn-primary-outline">
        Outline button
      </a>
      <a href="" class="btn flat">
        Flat button
      </a>
    </div>
    <h5>
      Buttons size
    </h5>
    <p class="mb-4">
      there are 6 buttons size from 1 (smallest) to 6 (biggest), been size-2 the
      default size for button
    </p>
    <pre><code lang="html"><span class="tag">&lt;button </span><span class="prop">class=</span><span class="val">"btn btn-size-1"</span><span class="tag">&gt;</span>
    button with btn-size-1
<span class="tag">&lt;button&gt;</span>
<span class="tag">&lt;button </span><span class="prop">class=</span><span class="val">"btn btn-size-2"</span><span class="tag">&gt;</span>
    button with btn-size-2
<span class="tag">&lt;button&gt;</span>
<span class="tag">&lt;button </span><span class="prop">class=</span><span class="val">"btn btn-size-4"</span><span class="tag">&gt;</span>
    button with btn-size-3
<span class="tag">&lt;button&gt;</span>
</code></pre>
    <div class="mb-4 ">
      <a href="" class="btn btn-size-1 mb-4">
        button with btn-size-1
      </a>
      <a href="" class="btn btn-size-2 mb-4">
        button with btn-size-2
      </a>
      <a href="" class="btn btn-size-3 mb-4">
        button with btn-size-3
      </a>
      <a href="" class="btn btn-size-4 mb-4">
        button with btn-size-4
      </a>
      <a href="" class="btn btn-size-5 mb-4">
        button with btn-size-5
      </a>
      <a href="" class="btn btn-size-6 mb-4">
        button with btn-size-6
      </a>
      <h5>
        Buttons group
      </h5>

      <p class="mb-4 ">
        you can create button groups by using a div with class <b>.btn-group</b>
      </p>
      <pre><code lang="html"><span class="tag">&lt;div</span> <span class="prop">class=</span><span class="val">"btn-group"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;a</span> <span class="prop">class=</span><span class="val">"btn"</span><span class="tag">&gt;</span>1<span class="tag">&lt;/a&gt;</span>
    <span class="tag">&lt;a</span> <span class="prop">class=</span><span class="val">"btn"</span><span class="tag">&gt;</span>2<span class="tag">&lt;/a&gt;</span>
    <span class="tag">&lt;a</span> <span class="prop">class=</span><span class="val">"btn"</span><span class="tag">&gt;</span>3<span class="tag">&lt;/a&gt;</span>
<span class="tag">&lt;/div&gt;</span></code></pre>
      <div class="btn-group">
        <a href="" class="btn">1</a>
        <a href="" class="btn">2</a>

        <a href="" class="btn">
          3
        </a>
      </div>
      <div class="btn-group">
        <a href="" class="btn">1</a>
        <a href="" class="btn">2</a>

        <a href="" class="btn btn-icon">
          <i class="material-icons">
            add
          </i>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "doc",
  head() {
    return {
      title: "Customizable Css - Buttons",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Learn how to use Customizable css buttons"
        }
      ]
    };
  }
};
</script>
