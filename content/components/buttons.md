---
title: 'Buttons'
description: 'Learn how to use Customizable CSS Buttons'
category: components
tags:
- button
- buttons
- outline
- flat
- buttons group
---

# Buttons

## Buttons types

the class **.btn** can be use to create a simple button, you can change the color of a button by using **btn-{theme/color}**

```html
<button class="btn">
   Default 
</button>
<button class="btn btn-primary">
   Primary 
</button>
<button class="btn btn-primary-outline">
   Primary Outline 
</button>
<button class="btn btn-primary-flat"x>
   Flat 
</button>
<button clas="btn btn-icon">
   <span class="material-icons">add</span>
<button>
```

<div class="row my-4">
   <button class="btn mb-4">
      Default button
   </button>
   <button class="btn mb-4 btn-primary">
      Primary button
   </button>
   <button class="btn mb-4 btn-primary-outline">
      Primary Outline button
   </button>
   <button class="btn mb-4 btn-primary-flat">
      Flat button
   </button>
   <button class="btn mb-4 btn-icon">
      <span class="material-icons">add</span>
   </button>
</div>

## Buttons sizes

there are 6 buttons size from 1 (smallest) to 6 (biggest), been size-2 the default size for button

```html
<button class="btn btn-size-1">
   btn-size-1
</button>
</button class="btn btn-size-2">
   btn-size-2
</button>
</button class="btn btn-size-4">
   btn-size-3
</button>
```

<button class="btn btn-size-1 mb-4">
   btn-size-1
</button>
<button class="btn btn-size-2 mb-4">
   btn-size-2
</button>
<button class="btn btn-size-4 mb-4">
   btn-size-3
</button>
<a href="" class="btn btn-size-4 mb-4">
   btn-size-4
</a>
<a href="" class="btn btn-size-5 mb-4">
   btn-size-5
</a>
<a href="" class="btn btn-size-6 mb-4">
   btn-size-6
</a>

## Buttons group

you can create button groups by using a div with class **.btn-group**


```html
<div class="btn-group">
    <a class="btn">1</a>
    <a class="btn">2</a>
    <a class="btn">3</a>
</div>
```

<div class="btn-group">
    <a class="btn">1</a>
    <a class="btn">2</a>
    <a class="btn">3</a>
</div>