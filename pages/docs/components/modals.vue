<template>
  <!--###  MODALS ###-->
  <div id="modals" class="mb-4">
    <h4 class="mb-4">
      Modals
    </h4>
    <p>
      Click the following link to show a modal
    </p>
    <button class="mb-4 btn btn-primary modal-trigger" data-target="my-modal">
      Show modal
    </button>
    <pre><code lang="html"><span class="tag">&lt;button</span> <span class="prop">class=</span><span class="val">"mb-4 btn btn-primary modal-trigger"</span> <spab class="prop">data-target=</spab><span class="val">"my-modal"</span>&gt;
<span class="tag">&lt;/button</span>&gt;
<span class="tag">&lt;div</span> <span class="prop">class=</span><span class="val"><span class="val">&quot;modal&quot;</span></span> <span class="prop">id=</span><span class="val">&quot;my-modal&quot;</span><span class="tag">&gt;</span>
    <span class="tag">&lt;div </span> <span class="prop">class=</span><span class="val">&quot;modal-background&quot;</span> <span class="tag">&gt;</span>
        <span class="tag">&lt;div</span> <span class="prop">class=</span><span class="val">&quot;modal-container&quot;</span> <span class="tag">&gt;</span>
            <span class="tag">&lt;div</span> <span class="prop">class=</span><span class="val">&quot;modal-content&quot;</span> <span class="tag">&gt;</span>
                <span class="tag">&lt;div</span> <span class="prop">class=</span><span class="val">&quot;modal-header&quot;</span> <span class="tag">&gt;</span>
                    <span class="tag">&lt;div</span> <span class="prop">class=</span><span class="val">&quot;display-flex justify-between&quot;</span> <span class="tag">&gt;</span>
                        <span class="tag">&lt;p </span><span class="prop">class=</span><span class="val">"modal-title"</span><span>&gt;</span>My Modal title<span class="tag">&lt;/p&gt;</span> 
                        <span class="tag"> &lt;button <span class="prop">class=</span><span class="val">&quot;close modal-trigger&quot;</span> <span class="prop">data-target=</span><span class="val">&quot;my-modal&quot;&gt;</span>  </span>
                        <span class="tag">&lt;/button&gt;</span> 
                    <span class="tag">&lt;/div&gt;</span> 
                <span class="tag">&lt;/div&gt;</span> 
                <span class="tag">&lt;div</span> <span class="prop">class=</span><span class="val">&quot;modal-body&quot;</span><span class="tag">&gt;</span>
                    Lorem ipsum dolor sit ...
                <span class="tag">&lt;/div&gt;</span>
                <span class="tag">&lt;div <span class="prop">class=</span><span class="val">"modal-footer&quot;</span>&gt;</span>
                    <span class="tag">&lt;button <span class="prop">class=</span><span class="val">"btn btn-primary-flat p-2&quot;</span>&gt; </span>
                        Option a
                    <span class="tag">&lt;/button&gt;</span>
                    <span class="tag">&lt;button <span class="prop">class=</span><span class="val">"btn btn-primary-flat p-2&quot;</span>&gt; </span>
                        option B
                    <span class="tag">&lt;/button&gt;</span>
                <span class="tag">&lt;/div&gt;</span>
            <span class="tag">&lt;/div&gt;</span>
        <span class="tag">&lt;/div&gt;</span>
    <span class="tag">&lt;/div&gt;</span> 
<span class="tag">&lt;/div&gt;</span></code></pre>

    <div class="modal modal-animated" id="my-modal">
      <div class="modal-background">
        <div class="modal-container">
          <div class="modal-content">
            <div class="modal-header">
              <div class="display-flex justify-between">
                <p class="modal-title">
                  My Modal title
                </p>
                <button
                  class="close modal-trigger"
                  data-target="my-modal"
                ></button>
              </div>
            </div>
            <div class="modal-body">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Temporibus, quae? Maxime dicta similique delectus molestiae cumque
              ratione quo libero placeat iste dolor? Alias dignissimos eos ea
              ullam deleniti officia facilis?
            </div>
            <div class="modal-footer">
              <button class="btn btn-primary p-2">
                Option a
              </button>
              <button class="btn btn-primary-flat p-2">
                option B
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <p class="mb-4">
      you can add an animation buy adding the class <b>.modal-animated</b> to a
      <b>.modal</b> div , remember to use <b>.modal-trigger</b> in order to open
      or close the modal
    </p>
    <p class="mb-4">
      You can change the max width of the modal content by using on of the
      following classes
    </p>
    <table class="table w-12 w-md-6/12 table-with-border ">
      <thead>
        <tr>
          <th class="text-left">
            Class
          </th>
          <th>
            <span class="text-right">
              Width
            </span>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <b>deafult</b>
          </td>
          <td>
            600px
          </td>
        </tr>
        <tr>
          <td>
            <b>.modal-xxl</b>
          </td>
          <td>
            1400px
          </td>
        </tr>
        <tr>
          <td>
            <b>.modal-xl</b>
          </td>
          <td>
            1280px
          </td>
        </tr>
        <tr>
          <td>
            <b>.modal-lg</b>
          </td>
          <td>
            720px
          </td>
        </tr>
        <tr>
          <td>
            <b>.modal-sm</b>
          </td>
          <td>
            350px
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- #### END OF MODALS ####-->
</template>
<script>
export default {
  layout: "doc"
};
</script>
