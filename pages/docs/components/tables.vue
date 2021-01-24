<template>
  <!-- ### TABLES ### -->
  <div id="tables" class="mb-4">
    <h4 class="mb-4">
      Tables
    </h4>
    <p>
      To implement a basic style over tables you can use class <b>.table</b>
    </p>
    <pre><code lang="html"><span class="tag">&lt;table</span> <span class="prop">class=</span><span class="val">"table"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;thead&gt;</span> 
        ...
    <span class="tag">&lt;/thead&gt;</span> 
    <span class="tag">&lt;tbody&gt;</span> 
        ...
    <span class="tag">&lt;/tbody&gt;</span> 
<span class="tag">&lt;/table&gt;</span>
</code></pre>
    <table class="table mb-4">
      <thead>
        <tr>
          <th>Breakpoint</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            xl
          </td>
          <td>
            col-w-xl-3
          </td>
        </tr>
        <tr>
          <td>
            lg
          </td>
          <td>
            col-w-lg-4
          </td>
        </tr>
        <tr>
          <td>
            md
          </td>
          <td>
            col-w-md-6
          </td>
        </tr>
        <tr>
          <td>
            sm
          </td>
          <td>
            col-w-xl-12
          </td>
        </tr>
      </tbody>
    </table>
    <p class="mb-4">
      You can add a hover effect by adding the class <b>.table-with-hover </b>
    </p>
    <pre><code lang="html"><span class="tag">&lt;table</span> <span class="prop">class=</span><span class="val">"table table-with-hover"</span><span class="tag">&gt;</span>
    ...
<span class="tag">&lt;/table&gt;</span></code></pre>
    <table class="table table-with-hover mb-4">
      <thead>
        <tr>
          <th>Breakpoint</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            xl
          </td>
          <td>
            col-w-xl-3
          </td>
        </tr>
        <tr>
          <td>
            lg
          </td>
          <td>
            col-w-lg-4
          </td>
        </tr>
        <tr>
          <td>
            md
          </td>
          <td>
            col-w-md-6
          </td>
        </tr>
        <tr>
          <td>
            sm
          </td>
          <td>
            col-w-xl-12
          </td>
        </tr>
      </tbody>
    </table>
    <p class="mb-4">
      You can add collapsed border with the class <b>.table-with-boder </b>
    </p>
    <pre><code lang="html"><span class="tag">&lt;table</span> <span class="prop">class=</span><span class="val">"table table-with-border"</span><span class="tag">&gt;</span>
        ...
    <span class="tag">&lt;/table&gt;</span></code></pre>
    <table class="table table-with-border">
      <thead>
        <tr>
          <th>Breakpoint</th>
          <th>Example</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            xl
          </td>
          <td>
            col-w-xl-3
          </td>
        </tr>
        <tr>
          <td>
            lg
          </td>
          <td>
            col-w-lg-4
          </td>
        </tr>
        <tr>
          <td>
            md
          </td>
          <td>
            col-w-md-6
          </td>
        </tr>
        <tr>
          <td>
            sm
          </td>
          <td>
            col-w-xl-12
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- ### END OF TABLES ### -->
</template>
<script>
export default {
  layout: "doc",
  head() {
    return {
      title: "Customizable Css - Tables",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Learn how to use Customizable css Tables component"
        }
      ]
    };
  }
};
</script>
