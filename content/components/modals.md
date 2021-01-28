

# Modals

## Trigger a modal

To create a modal frist you must create the trigger, a triggers is basically a element that include the class **.modal-trigger** and a data propert **data-target** set to the **modal element id**
```html
<button 
  class="btn btn-primary modal-trigger" 
  data-target="my-modal">
  Show modal
</button>
<div class="modal modal-animated" id="my-modal">
  ...
</div>
```
then you can add content to the modal

```html
<button 
  class="btn btn-primary modal-trigger" 
  data-target="my-modal">
  Show modal
</button>
<div class="modal modal-animated" id="my-modal">
  <div class="modal-container">
    <div class="modal-content">
      <div class="modal-header">
          <div class="display-flex justify-between">
              <p class="modal-title">
                  My Modal title
              </p>
              <button class="close modal-trigger" data-target="my-modal">
              </button>
          </div>
      </div>
      <div class="modal-body">
              Modal body goes here
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

```

<button class=" mb-4 btn btn-primary modal-trigger" data-target="my-modal">
  Show modal
</button>
<div class="modal modal-animated" id="my-modal">

<div class="modal-container">
  <div class="modal-content">
      <div class="modal-header">
          <div class="display-flex justify-between">
              <p class="modal-title">
                  My Modal title
              </p>
              <button class="close modal-trigger" data-target="my-modal">
              </button>
          </div>
      </div>
      <div class="modal-body">
              Modal body goes here
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

the class modal **.modal-animated** is use to add transition animation but it can be disable by removing it.

## Modal sizes

You can change the max width of the modal content by using on of the following classes
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


