---
title: Colors
description: Learn how to use Customizable CSS Border and border radius classes.
category: utilities
---

# Borders And Border Radius

## Borders 

You can use  the class **.b** to asing borders to an element

```html
<div class="b ">
   div with .b class
</div>
```

<div class="b p-4 my-4">
  <span class="text-grey-600"> div with .b class</span>
</div>

### Border Color

You can also change border-color to a theme color by using the class **.b-{theme-color}**

```html
<div class="b b-blue-600 ">
   div with .b and .b-blue-600  class
</div>
```
<div class="b p-4 my-4 b-blue-600 ">
  <span class="text-grey-600">div with .b and .b-blue-600  class</span>
</div>

### Border direction

you can change the borders direction by using the classes **bt** (border-top) ,**bb** (border-boittom) ,**br**  (border-right), **bl**  (border-lef) and **by** and **bx**

```html
<div class="bt  ..."></div>
<div class="br ..."></div>
<div class="bb ..."></div>
<div class="bl ..."></div>
<div class="by ..."></div>
<div class="bx ..."></div>
```
<div class="p-4 b row my-4 justify-center" >
<div class="bt mr-4 p-4" style="background-color:#f0f0f0;"></div>
<div class="br mr-4 p-4" style="background-color:#f0f0f0;"></div>
<div class="bb mr-4 p-4" style="background-color:#f0f0f0;"></div>
<div class="bl mr-4 p-4" style="background-color:#f0f0f0;"></div>
<div class="by mr-4 p-4" style="background-color:#f0f0f0;"></div>
<div class="bx mr-4 p-4" style="background-color:#f0f0f0;"></div>
</div>
 
## Border Radius

The border radius can also be change by using the classes **.r** or **r-{number from 2 - 12}** to change it intensity, the class **.r-full**
will made an element **border-radius:50%;**;

```html
<div class="r"></div>
<div class="r-2"></div>
<div class="r-3"></div>
<div class="r-4"></div>
<div class="r-full"></div>

```

<div class="p-4 b row my-4 justify-center" >
<div class="b r mr-4 p-4" style="width:50px; height:50px"></div>
<div class="b r-2 mr-4 p-4" style="width:50px; height:50px"></div>
<div class="b r-3 mr-4 p-4" style="width:50px; height:50px"></div>
<div class="b r-4 mr-4 p-4" style="width:50px; height:50px"></div>
<div class="b r-full mr-4 p-4" style="width:50px; height:50px"></div>

</div>
 
 ### Border Radius Positions

 You can change the border radius of and expecific conner  by using 
 **r{t for top, b for bottom }-{ l for left , r for right}-{ number from 2 - 12}** class

```html
<div class="rt-l"></div>
<div class="rt"></div>
<div class="rb"></div>
<div class="rb-r"></div>
<div class="r rb-r-4"></div>

```


<div class="p-4 b row my-4 justify-center" >
<div class="b mr-4 rt-l" style="width:50px; height:50px"></div>
<div class="b mr-4 rt" style="width:50px; height:50px"></div>
<div class="b mr-4 rb" style="width:50px; height:50px"></div>
<div class="b mr-4 r rb-r-4" style="width:50px; height:50px"></div>
</div>