<template lang="">
  <div>
    <div id="forms">
      <h4>Forms</h4>
      <h5>
        Form field
      </h5>
      <pre><code lang="html"><span class="tag">&lt;div</span> <span class="prop">class=</span><span class="val">"form-field"</span> <span class="prop">id=</span><span class="val">"name"</span> <span class="tag">></span>
    <span class="tag">&lt;label</span><span class="prop">for=</span><span class="val">"name"</span> <span class="tag">></span>Name <span class="tag">&lt;/label></span> 
    <span class="tag">&lt;input </span> <span class="prop">class=</span><span class="val">"form-input"</span> <span class="prop">type=</span><span class="val">"text"</span> <span class="prop">name=</span><span class="val">"name"</span><span class="tag">></span>
    <span class="tag">&lt;span </span> <span class="prop">class=</span> <span class="val">"form-text"</span> 
        this field is required
    <span class="tag">&lt;/span></span> 
<span class="tag">&lt;div></span></code></pre>

      <div class="form-field">
        <label for="">Name</label>
        <input
          type="text"
          name=""
          placeholder="Write down your name"
          class="form-input"
          id=""
        />
        <span class="form-text">
          this field is required
        </span>
      </div>
      <h5>
        Horizontal field
      </h5>
      <p>
        You can make horizontal fields by adding the class
        <b>.horizontal</b> into a form field
      </p>
      <pre><code lang="html"><span class="tag">&lt;div</span> <span class="prop">class=</span><span class="val">"form-field horizontal"</span> <span class="prop">id=</span><span class="val">"name"</span> <span class="tag">></span>
    <span class="tag">&lt;label</span><span class="prop">for=</span><span class="val">"name"</span> <span class="tag">></span>Name <span class="tag">&lt;/label></span> 
    <span class="tag">&lt;input </span> <span class="prop">class=</span><span class="val">"form-input"</span> <span class="prop">type=</span><span class="val">"text"</span> <span class="prop">name=</span><span class="val">"name"</span><span class="tag">></span>
    <span class="tag">&lt;span </span> <span class="prop">class=</span> <span class="val">"form-text"</span> 
        this field is required
    <span class="tag">&lt;/span></span> 
<span class="tag">&lt;div></span></code></pre>
      <div class="form-field horizontal">
        <label for="">Name</label>
        <input type="text" class="form-input" name="" id="" />
      </div>
      <h5 class="mb-4">Invalid form field</h5>
      <p>
        In order to indicate an invalid form field you can add the class
        <b>.invalid</b> to an exiting <b>.form-field</b>
      </p>
      <pre><code lang="html"><span class="tag">&lt;div</span> <span class="prop">class=</span><span class="val">"form-field invalid"</span> <span class="prop">id=</span><span class="val">"name"</span> <span class="tag">></span>
    <span class="tag">&lt;label</span><span class="prop">for=</span><span class="val">"name"</span> <span class="tag">></span>Name <span class="tag">&lt;/label></span> 
    <span class="tag">&lt;input </span> <span class="prop">class=</span><span class="val">"form-input"</span> <span class="prop">type=</span><span class="val">"text"</span> <span class="prop">name=</span><span class="val">"name"</span><span class="tag">></span>
    <span class="tag">&lt;span </span> <span class="prop">class=</span> <span class="val">"form-text"</span> 
        this field is required
    <span class="tag">&lt;/span></span> 
<span class="tag">&lt;div></span></code></pre>
      <div class="form-field invalid">
        <label for="">Invalid field</label>
        <input type="text" name="" placeholder="" class="form-input" id="" />
      </div>
      <h5 class="mb-4" id="form_field_with_addons">Forms Addons</h5>
      <p>
        you can adds addons by encapsulating the field and addon on a
        <b>div</b> with the <b>.with-addons</b> class
      </p>
      <pre><code lang="html"><span class="tag">&lt;div </span><span class="prop">class=</span><span class="val">"form-field"</span><span class="tag">&gt;</span> 
    <span class="tag">&lt;label&gt;</span>Field<span class="tag">&lt;/label&gt;</span>
    <span class="tag">&lt;div </span><span class="prop">class=</span><span class="val">"with-addon"</span><span class="tag">&gt;</span>
        <span class="tag">&lt;input</span> <span class="prop">type=</span><span class="val">"text"</span> <span class="prop">class=</span><span class="val">"form-input"</span><span class="tag">&gt;</span>
        <span class="tag">&lt;button</span> <span class="prop">class=</span><span class="val">"btn"</span><span class="tag">&gt;</span>Search<span class="tag">&lt;/button&gt;</span> 
    <span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;/div&gt;</span></code></pre>

      <div class="form-field  w-12/12">
        <label for="">Field</label>
        <div class="with-addons">
          <input type="text" name="" class="form-input" id="" />
          <button class="btn">
            search
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  layout: "doc",
  head() {
    return {
      title: "Customizable Css - Form field",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Learn how to use the form fields classes"
        }
      ]
    };
  }
};
</script>
