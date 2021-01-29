---
title: Flexbox
description: Learn how to use Customizable CSS flexbox utilities.
category: utilities
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

You can change flex-wrap property with the following classes:

<table class="table-with-border my-4">
  <thead>
      <th>
          Class
      </th>
      <th>
          Porperty Value
      </th>
  </thead>
  <tbody>
      <tr>
          <td class="bold">
              .flex-no-wrap
          </td>
          <td>
              <b>flex-wrap</b>:none;
          </td>  
      </tr>
      <tr>
          <td class="bold">
              .flex-wrap
          </td>
          <td>
              <b>flex-wrap</b>:wrap;
          </td>  
      </tr>
      <tr>
          <td class="bold">
              .flex-wrap-reverse
          </td>
          <td>
              <b>flex-wrap</b>:wrap-reverse;
          </td>  
      </tr>
  </tbody>
</table>

###  No wrap

```html
<div class="row flex-no-wrap ..." >
  ...
</div>
```
<div class="row my-4 b p-4 flex-no-wrap overflow-hidden" >
  <div class="col col-w-4 b p-2"> col of 4 </div>
  <div class="col col-w-4 b p-2"> col of 4 </div>
  <div class="col col-w-6 w-2/3 b p-2"> col of 6  </div>
</div>

###  Wrap

```html
<div class="row flex-wrap ..." >
  ...
</div>
```
<div class="row b my-4 p-4 flex-wrap overflow-hidden" >
   <div class="col col-w-4 b p-2"> col of 4 </div>
  <div class="col col-w-4 b p-2"> col of 4 </div>
  <div class="col col-w-6 w-2/3 b p-2"> col of 6  </div>
</div>

###  Wrap Reverse

```html
<div class="row flex-wrap ..." >
  ...
</div>
```
<div class="row b my-4 p-4 flex-wrap-reverse overflow-hidden" >
   <div class="col col-w-4 b p-2"> col of 4 </div>
  <div class="col col-w-4 b p-2"> col of 4 </div>
  <div class="col col-w-6 w-2/3 b p-2"> col of 6  </div>
</div>

## Shrink and Grow

<table class="table-with-border my-4">
  <thead>
      <th>
          Class
      </th>
      <th>
          Porperty Value
      </th>
  </thead>
  <tbody>
      <tr>
          <td class="bold">
              .flex-s
          </td>
          <td>
              <b>flex-shrink</b>:1;
          </td>  
      </tr>
      <tr>
          <td class="bold">
              .flex-s-0
          </td>
          <td>
              <b>flex-shrink</b>:none;
          </td>  
      </tr>
      <tr>
          <td class="bold">
              .flex-g
          </td>
          <td>
              <b>flex-grow</b>:1;
          </td>  
      </tr>
      <tr>
          <td class="bold">
            .flex-g-0
          </td>
          <td>
              <b>flex-grow</b>:0;
          </td>  
      </tr>
  </tbody>
</table>

## Flex 

### Flex 1

Adding class flex 1  to a children of a flex element will make then growth same sime;
```html
<div class="row " >
    <div class="flex-1 ..."> 1 </div>
    <div class="flex-1 ..."> 2 </div>
    <div class="flex-1 ..."> 3 </div>

</div>
```
<div class="row b my-4 p-4 flex-wrap-reverse overflow-hidden" >
   <div class=" flex-1 b p-2"> 1 </div>
  <div class=" flex-1 b p-2"> 1 </div>
  <div class=" flex-1 w-2/3 b p-2"> 1  </div>
</div>

### Flex auto

Adding class flex auto  to a children of a flex element will make then growth if its content is bigger ;
```html
<div class="row">
    <div class="flex-1 ..."> 1 </div>
    <div class="flex-1 ..."> 2 </div>
    <div class="flex-1 ..."> 3 </div>
</div>
```
<div class="row b my-4 p-4 flex-wrap-reverse overflow-hidden" >
   <div class="flex-auto b p-2"> Long text blabablabablabablabablabablaba  </div>
  <div class="flex-auto b p-2"> Nomal text </div>
  <div class="flex-auto b p-2"> Normal text  </div>
</div>

### Flex None

Adding class flex none  to a children of a flex element will make then not to grow or shrink in order to fill its parent
```html
<div class="row">
    <div class="flex-1 ..."> 1 </div>
    <div class="flex-1 ..."> 2 </div>
    <div class="flex-1 ..."> 3 </div>
</div>
```
<div class="row b my-4 p-4 flex-wrap-reverse overflow-hidden" >
  <div class="flex-none b p-2"> Long text blabablabablabablabablabablaba  </div>
  <div class="flex-none b p-2"> Nomal text </div>
  <div class="flex-none b p-2"> Normal text  </div>
</div>

