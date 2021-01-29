---
title: Flexbox
description: Learn how to use Customizable CSS flexbox utilities.
---
# Flexbox utilities

By default you can use the class **.row** and **.col** to set flex direction

## Justiy 

You can change flexbox **justify-content** and **aling-items** with the following classes


```html
<div class="row justify-start" >
  ...           
</div>
<div class="row justify-center" >
  ...               
</div>
<div class="row justify-end" >
  ...                 
</div>
```

<div class="row b justify-start mb-4 p-4">
  <div class="col col-w-1 b p-2" style="height:40px">col</div>
  <div class="col col-w-1 b p-2"style="height:40px">col</div>
  <div class="col col-w-1 b p-2"style="height:40px">col</div>
</div>
<div class="row b justify-center mb-4 p-4">
  <div class="col col-w-1 b p-2" style="height:40px"> col </div>
  <div class="col col-w-1 b p-2"style="height:40px"> col </div>
  <div class="col col-w-1 b p-2"style="height:40px"> col </div>
</div>
<div class="row b justify-end mb-4 p-4">
  <div class="col col-w-1 b p-2" style="height:40px"> col </div>
  <div class="col col-w-1 b p-2"style="height:40px"> col </div>
  <div class="col col-w-1 b p-2"style="height:40px"> col </div>
</div>

## Align

```html
<div class="row align-start" >
  ...           
</div>
<div class="row align-center" >
  ...               
</div>
<div class="row align-end" >
  ...                 
</div>
```
<div class="row b align-start mt-4 p-4" style="height: 100px;">
  <div class="col col-w-1 b p-2" style="height:40px"> col </div>
  <div class="col col-w-1 b p-2"style="height:40px"> col </div>
  <div class="col col-w-1 b p-2"style="height:40px"> col </div>
</div>
<div class="row b align-center mt-4 p-4" style="height: 100px;">
  <div class="col col-w-1 b p-2" style="height:40px"> col </div>
  <div class="col col-w-1 b p-2"style="height:40px"> col </div>
  <div class="col col-w-1 b p-2"style="height:40px"> col </div>
</div>
<div class="row b align-end my-4 p-4" style="height: 100px;">
  <div class="col col-w-1 b p-2" style="height:40px"> col </div>
  <div class="col col-w-1 b p-2"style="height:40px"> col </div>
  <div class="col col-w-1 b p-2"style="height:40px"> col </div>
</div>

## Flex Wrap