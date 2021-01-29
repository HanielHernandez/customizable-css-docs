---
title: Forms field
description: Learn how to use Customizable CSS Form field
category: forms
tags:
  - forms
  - form field
  - form field horizontal
  - addons
  - search bar
---

# Forms Fields

## Form field

you can createa simple form field with the class **.form-field**

```html
<div class="form-field" id="name">
  <label for="name">Name </label>
  <input class="form-input" type="text" name="name" />
  <span class="form-text">
    this field is required
  </span>
</div>
```

<div class="form-field mb-4" id="name" >
    <label for="name" >Name </label> 
    <input  class="form-input" type="text" name="name">
    <span class= "form-text mb-4" >
        this field is required
    </span> 
</div>

## Invalid Form field

In order to indicate an invalid form field you can add the class **.invalid** to an existing **.form-field**

```html
<div class="form-field invalid " id="name">
  <label for="name">Name </label>
  <input class="form-input" type="text" name="name" />
  <span class="form-text">
    this field is required
  </span>
  <div></div>
</div>
```

<div class="form-field invalid my-4" id="name" >
    <label for="name" >Name </label> 
    <input  class="form-input" type="text" name="name">
    <span class= "form-text mb-4" >
        this field is required
    </span> 
</div>

## Horizontal Form Field

You can make horizontal fields by adding the class **.horizontal** into a form field

```html
<div class="form-field horizontal " id="name">
  <label for="name">Name </label>
  <input class="form-input" type="text" name="name" />
  <span class="form-text">
    this field is required
  </span>
  <div></div>
</div>
```

<div class="form-field horizontal w-12 my-4" id="name" >
    <label for="name" >Name </label> 
    <input  class="form-input" type="text" name="name">
</div>


## Form Field with addons

you can adds addons by encapsulating the field and addon on a **div** with the **.with-addons** class

```html
<div class="form-field"> 
    <label>Field</label>
    <div class="with-addons">
        <input type="text" class="form-input">
        <button class="btn">Search</button> 
    </div>
</div>
```

<div class="form-field w-12/12"> 
    <label>Field</label>
    <div class="with-addons">
        <input type="text" class="form-input">
        <button class="btn">Search</button> 
    </div>
</div>
