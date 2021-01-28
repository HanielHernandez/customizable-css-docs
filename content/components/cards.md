# Cards

## Simple card

youn can create cards by using the **.card** class

```html
<div class="card">
  <div class="card-head">
    <img class="card-avatar " />
    <div class="card-titles">
      <div class="card-title">...</div>
      <div class="card-subtitle">...</div>
    </div>
  </div>
  <div class="card-content">
    <div class="card-body">
      ...
    </div>
  </div>
  <div class="card-footer">
    <div class="card-actions">
      <a class="btn flat"> ... </a>
      <a class="btn flat"> ... </a>
    </div>
  </div>
</div>
```

<div class="card my-4">
  <div class="card-head">
      <img src="https://via.placeholder.com/40" alt="card avatar image" class="card-avatar">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas architecto
              pariatur rem? Inventore, odit! Corporis nam voluptas labore iure commodi neque quam.
              At similique porro voluptates dolorum dolor vel fugiat.
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

## Card with image

```html
<div class="card">
    <img src="https://via.placeholder.com/40" alt="card avatar image" class="card-img">
  <div class="card-head">
    <img class="card-avatar " />
    <div class="card-titles">
      <div class="card-title">...</div>
      <div class="card-subtitle">...</div>
    </div>
  </div>
  <div class="card-content">
    <div class="card-body">
      ...
    </div>
  </div>
  <div class="card-footer">
    <div class="card-actions">
      <a class="btn flat"> ... </a>
      <a class="btn flat"> ... </a>
    </div>
  </div>
</div>
```

<div class="card" style="width:350px; margin:0 auto;">
  <img src="https://via.placeholder.com/40" alt="card avatar image" class="card-img">
  <div class="card-head">
      <img src="https://via.placeholder.com/40" alt="card avatar image" class="card-avatar">
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas architecto
              pariatur rem? Inventore, odit! Corporis nam voluptas labore iure commodi neque quam.
              At similique porro voluptates dolorum dolor vel fugiat.
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