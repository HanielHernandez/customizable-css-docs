---
title: Navbar
description: Learn how to use Customizable CSS Navars
category: components
tags:
- navbar
- navbar responsive
---

# Navbar

## Responsive Navbar

You can create responsive navbar by adding a **.navbar-collapse-{breakpoint}**, encapsulating the **.nav** element with a **.nav-menu element**, and a adding a **.nav-toggler** button with a **data-target** perperty set to and id use by the **.nav-menu**, **.nav** will be hidden until the collapse breakpoint is reach, your final sctructure should look like this:

* .navbar element with a .navbar-collpse-{breakpoint} class, this should contain the following elements:
  * **.brand** your brand or any element
  *  **.nav-toggler** button with a **data-target property** set to the id of a **.nav-menu** element class
  *  **.nav-menu element** with an id set to the **.nav-toggler data-target** value. this element yould contains
     *  **.nav** element with your links or any other kind of element

```html
<nav class="navbar b navbar-white navbar-collapse-md">
    <a class="brand">
        Brand
    </a>
    <button class="btn nav-toggler">
        <i class="material-icons" data-target="nav_menu">
            menu
        </i>
    </button>
    <div class="nav-menu" id="nav_menu" >
        <ul class="nav">
            <li class="nav-link">
                <a class="nav-item">
                    ...
                </a>
            </li>
            <li class="nav-link">
                <a class="nav-item">
                    ...
                </a>
            </li>
            <li class="nav-link">
                <a class="nav-item">
                    ...
                </a>
            </li>
        </ul>
    </div>
</nav>
```

this navbar will collpase on a screen bellow  the md breakpoint

<nav class="navbar b navbar-white navbar-collapse-md my-4">
    <a class="brand">
        Brand
    </a>
    <button class="btn nav-toggler">
        <i class="material-icons" data-target="nav_menu">
            menu
        </i>
    </button>
    <div class="nav-menu" id="nav_menu" >
        <ul class="nav">
            <li class="nav-item">
                <a class="nav-link">
                    Link 1
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link">
                    Link 2
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link">
                    Link 3
                </a>
            </li>
        </ul>
    </div>
</nav>

## Nav position

you can change the position of the navigation by using some of the flexbox utilities

```html
<nav class="navbar b navbar-white navbar-collapse-md">
    <a class="brand">
        Brand
    </a>
    <button class="btn nav-toggler">
        <i class="material-icons" data-target="nav_menu">
            menu
        </i>
    </button>
    <div class="nav-menu justify-end" id="nav_menu" >
        <ul class="nav ">
            ...
        </ul>
    </div>
</nav>
```

<nav class="navbar b navbar-white navbar-collapse-md my-4">
    <a class="brand">
        Brand
    </a>
    <button class="btn nav-toggler">
        <i class="material-icons" data-target="nav_menu">
            menu
        </i>
    </button>
    <div class="nav-menu justify-end " id="nav_menu" >
       <ul class="nav">
            <li class="nav-item">
                <a class="nav-link">
                    Link 1
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link">
                    Link 2
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link">
                    Link 3
                </a>
            </li>
        </ul>
    </div>
</nav>

## Navbar color

You can also change the color of a sidebar by using the class **.navbar-{ theme/color }**

```html
<nav class="navbar navbar-primary"> 
  ...
</nav>
<nav class="navbar navbar-dark"> 
  ...
</nav>
<nav class="navbar navbar-red-600"> 
  ...
</nav>
```
<div class="navbar navbar-primary navbar-collapse-md mb-4">
  <a href="" class="brand">Brand</a>
  <div class="nav-menu">
      <ul class="nav">
          <li class="nav-item">
              <a href="#" class="nav-link"> Link 1 </a>
          </li>
          <li class="nav-item">
              <a href="#" class="nav-link"> Link 2 </a>
          </li>
          <li class="nav-item">
              <a href="#" class="nav-link"> Link 3 </a>
          </li>
      </ul>
  </div>
</div>

<div class="navbar navbar-red-600 navbar-collapse-md mb-4">
  <a href="" class="brand">Brand</a>
  <div class="nav-menu">
      <ul class="nav">
          <li class="nav-item">
              <a href="#" class="nav-link"> Link 1 </a>
          </li>
          <li class="nav-item">
              <a href="#" class="nav-link"> Link 2 </a>
          </li>
          <li class="nav-item">
              <a href="#" class="nav-link"> Link 3 </a>
          </li>
      </ul>
  </div>
</div>


<div class="navbar navbar-dark navbar-collapse-md mb-4">
  <a href="" class="brand">Brand</a>
  <div class="nav-menu">
      <ul class="nav">
          <li class="nav-item">
              <a href="#" class="nav-link"> Link 1 </a>
          </li>
          <li class="nav-item">
              <a href="#" class="nav-link"> Link 2 </a>
          </li>
          <li class="nav-item">
              <a href="#" class="nav-link"> Link 3 </a>
          </li>
      </ul>
  </div>
</div>

Lastly you can set the position of a navbar to the top always by adding the class **.fixed** or **.sticky**, remember to add padding to the elements bellow otherwise the navbar elements will overlap