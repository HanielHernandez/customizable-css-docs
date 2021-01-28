---
title: Navs and Tabs
description: Learn how to use Customizable CSS Navs tabs
tags:
- navs
- breadcrumbs
- tabs
---

# Navs and Tabs

## Navs

### Basic Nav

you can use **.nav** class to create menus and navigations

```html
<ul class="nav" > 
  <li class="nav-item">
    <a  href="#" class="nav-link">Link a</a>
  </li>
  <li class="nav-item">
    <a  href="#" class="nav-link">Link a</a>
  </li>
  <li class="nav-item">
    <a  href="#" class="nav-link">Link a</a>
  </li>
</ul>
```

<ul class="nav my-4" > 
  <li class="nav-item">
  <a  href="#" class="nav-link">Link a</a>
  </li>
  <li class="nav-item">
  <a  href="#" class="nav-link">Link a</a>
  </li>
  <li class="nav-item">
  <a  href="#" class="nav-link">Link a</a>
  </li>
  </ul>

  
### Horizontal Nav

You can change the direction of the nav by adding the class .horizontal

```html
<ul class="nav horizontal" > 
  ...
</ul>
```
<ul class="nav horizontal my-4" > 
  <li class="nav-item">
    <a  href="#" class="nav-link">Link a</a>
  </li>
  <li class="nav-item">
    <a  href="#" class="nav-link">Link a</a>
  </li>
  <li class="nav-item">
    <a  href="#" class="nav-link">Link a</a>
  </li>
</ul>

### Breadcrumb Nav

You can use nav as breadcrumbs by ading the class **.breadcrumbs**, you can also add the class **.is-active** to a **.nav-link** in order show the current position of the breadcrumb.

```html
<ul class="nav breadcrumbs" > 
  <li class="nav-item">
    <a  href="#" class="nav-link">Link a</a>
  </li>
  <li class="nav-item">
    <a  href="#" class="nav-link">Link a</a>
  </li>
  <li class="nav-item">
    <a  href="#" class="nav-link">Link a</a>
  </li>
</ul>  
```
 
<ul class="nav breadcrumbs my-4" > 
  <li class="nav-item">
  <a  href="#" class="nav-link">Link a</a>
  </li>
  <li class="nav-item">
  <a  href="#" class="nav-link">Link a</a>
  </li>
  <li class="nav-item">
  <a  href="#" class="nav-link is-active">Link a</a>
  </li>
  </ul>  


  ## Tabs


 ### Basic tabs
 You can create tabs by adding the class **.tabs** into a **.nav** component

```html
<ul class="nav tabs">
    <li class="nav-item">
        <a href="" class="nav-link">Link a</a>
    </li>
    <li class="nav-item">
        <a href="" class="nav-link">Link b</a>
    </li>
    <li class="nav-item active">
        <a href="" class="nav-link is-active">Link c</a>
    </li>
</ul>
```
<ul class="nav tabs my-4">
    <li class="nav-item">
        <a href="" class="nav-link">Link a</a>
    </li>
    <li class="nav-item">
        <a href="" class="nav-link">Link b</a>
    </li>
    <li class="nav-item active">
        <a href="" class="nav-link is-active">Link c</a>
    </li>
</ul>

### Tabs Position

you can change the poition of the tabs by using the flexbox utilities classes **.justify-**

```html
<ul class="nav tabs">
  ...
</ul>
<ul class="nav tabs justify-center">
  ...
</ul>
<ul class="nav tabs justify-end">
  ...
</ul>
```


<ul class="nav tabs mb-4">
    <li class="nav-item">
        <a href="" class="nav-link">Link a</a>
    </li>
    <li class="nav-item">
        <a href="" class="nav-link">Link b</a>
    </li>
    <li class="nav-item active">
        <a href="" class="nav-link is-active">Link c</a>
    </li>
</ul>
<ul class="nav tabs justify-center mb-4">
    <li class="nav-item">
        <a href="" class="nav-link">Link a</a>
    </li>
    <li class="nav-item">
        <a href="" class="nav-link">Link b</a>
    </li>
    <li class="nav-item active">
        <a href="" class="nav-link is-active">Link c</a>
    </li>
</ul>
<ul class="nav tabs justify-end mb-4">
    <li class="nav-item">
        <a href="" class="nav-link">Link a</a>
    </li>
    <li class="nav-item">
        <a href="" class="nav-link">Link b</a>
    </li>
    <li class="nav-item active">
        <a href="" class="nav-link is-active">Link c</a>
    </li>
</ul>

### Tabs full

You can make tabs to use the full width of its container by adding the class **.full**


```html
<ul class="nav tabs full">
  ...
</ul>
```

<ul class="nav tabs full my-4">
    <li class="nav-item">
        <a href="" class="nav-link">Link a</a>
    </li>
    <li class="nav-item">
        <a href="" class="nav-link">Link b</a>
    </li>
    <li class="nav-item active">
        <a href="" class="nav-link is-active">Link c</a>
    </li>
</ul>

### Outlined Tabs

you can change the style of tabs to outline by adding the class **.outline**

```html
<ul class="nav tabs outline">
  ...
</ul>
```

<ul class="nav tabs outline mb-4">
    <li class="nav-item">
        <a href="" class="nav-link">Link a</a>
    </li>
    <li class="nav-item">
        <a href="" class="nav-link">Link b</a>
    </li>
    <li class="nav-item active">
        <a href="" class="nav-link is-active">Link c</a>
    </li>
</ul>