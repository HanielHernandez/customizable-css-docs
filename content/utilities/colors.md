---
title: Colors
description: Learn how to use Customizable CSS Colorsclasses.
category: utilities
---

# Colors

## Background colors

you change background color property of a div by using the classes **.bg-{theme name /color}**.

```html
<div class="row mb-4">
  <div class=" p-12 bg-dark w-1/2 w-md-12/12">
    <p class="">div with <b>.bg-dark</b></p>
  </div>
  <div class="inline-block p-12 bg-primary w-1/2 w-md-12/12">
    <p class="">div with <b>.bg-primary</b></p>
  </div>
</div>
```

<div class="row my-4">
                        <div class=" p-12 bg-dark w-1/2 w-md-12/12">
                            <p class="">
                                div with <b>.bg-dark</b>
                            </p>
                        </div>
                        <div class="inline-block p-12 bg-primary w-1/2 w-md-12/12">
                            <p class="">
                                div with <b>.bg-primary</b>
                            </p>
                        </div>
                    </div>

## Text Color

you change text color property of a div by using the classes **.text-{theme name/color}**.

<div class="b p-4 mb-4">
                        <p class="text-primary ">
                            text with primary color
                        </p>
                        <p class="text-red-600 ">
                            text with text-red-600 color
                        </p>
                        <p class="text-green-600">
                            text with green 600
                        </p>
                    </div>

## Import suported colors

In order to make the main css file lighter we do not create themes for all the suported colors, only the 600 variation (**blue-600**), you can create theme for on of those colors like this:

```scss
// Get the color variant
$color: get-color("red", 600);
//create your entire theme base on a color
@include create-theme("red-500", $color); 
```

## Suported Colors

this is the offical list of the colors suported:
