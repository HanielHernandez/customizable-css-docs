<template>
  <!-- ### NOTIFICATIONS/TOAST ###-->
  <div id="notifications" class="mb-4">
    <h4>
      Notification
    </h4>
    <p class="mb-4">Notification can be use to notify an action to a user</p>
    <pre><code lang="html"><span class="tag">&lt;div </span><span class="prop">class=</span><span class="val">"notification"</span>&gt;
    <span class="tag">&lt;button</span> <span class="prop">class=</span><span class="val">"close"</span><span class="tag">&gt;&lt;/button&gt;</span>
    <span class="tag">&lt;div </span><span class="prop">class=</span><span class="val">"notification-title</span><span class="tag">&gt;</span>
        My notification title
    <span class="tag">&lt;/div&gt;</span>
    <span class="tag">&lt;div </span><span class="prop">class=</span><span class="val">"notification-message</span><span class="tag">&gt;</span>
        Toast message goest here
    <span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;/div&gt;</span></code></pre>
    <div class="notification">
      <button class="close"></button>
      <div class="notification-title">
        My notification title
      </div>
      <div class="notification-message">
        Toast message goest here
      </div>
    </div>
    <div class="notification">
      <button class="close"></button>
      <div class="notification-message">
        Toast message goest here
      </div>
    </div>
  </div>
  <!-- ### END OF NOTIFICATIONS/TOAST ###-->
</template>
<script>
export default {
  layout: "doc",
  head() {
    return {
      title: "Customizable Css - Notifications",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Learn how to use Customizable css Notifications component"
        }
      ]
    };
  }
};
</script>
