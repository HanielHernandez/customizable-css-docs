# Grid

## Rows

the **.row** class to set display to **flex** and **flex-direction** to **flex-row**

```html
<div class="row">
    <p class="w-12">
        I'm a div .row
    </p> 
    <div class="col">
        I'm a div .col
    </div> 
    <div class="col">
        I'm a div .col
    </div> 
    <div class="col">
        I'm a div .col
    </div>
</div>
```

<div class="row b bg-light-blue-600 mt-4 p-4 mb-4">
    <p class="mb-4  w-12">
        I'm a div .row
    </p> 
    <div class="col b  p-4 bg-grey-400  br-0  col-w-4">
        I'm a div .col
    </div> 
    <div class="col b p-4 bg-grey-400   br-0 col-w-4">
        I'm a div .col
    </div> 
    <div class="col b p-4 bg-grey-400  col-w-4">
        I'm a div .col
    </div>
</div>

## Columns

the **.col** class set display to **flex** and **flex-direction** to **flex-column**

``` html
<div class="row bg-light-blue-600 p-4 mb-4">
    <p class="mb-4  w-12">
        I'm a div .col
    </p> 
    <div class="row b p-4 bg-grey-400  bb-0  ">
        I'm a div .row
    </div>
    <div class="row b p-4 bg-grey-400  bb-0">
        I'm a div .row
    </div> 
    <div class="row b p-4 bg-grey-400 ">
        I'm a div .col
    </div>
</div>
```

<div class="row bg-light-blue-600 p-4 mb-4">
    <p class="mb-4  w-12">
        I'm a div .col
    </p> 
    <div class="row b p-4 bg-grey-400  bb-0  ">
        I'm a div .row
    </div>
    <div class="row b p-4 bg-grey-400  bb-0">
        I'm a div .row
    </div> 
    <div class="row b p-4 bg-grey-400 ">
        I'm a div .col
    </div>
</div>

### Column width

the class **.col-w-{ 1-12 }**  will change the width of a column

``` html
<div class="row bg-grey-200 p-4 mb-4">
    <div class="col b p-4 bg-grey-400  b  br  col-w-4">
        I'm a div .col-w-4
    </div> 
    <div class="col b p-4 bg-grey-400  col-w-8">
        I'm a div .col-w-8
    </div>
</div>
```

<div class="row bg-grey-200 my-4">
    <div class="col b p-4 bg-grey-400  b  br-0  col-w-4">
        I'm a div .col-w-4
    </div> 
    <div class="col b p-4 bg-grey-400  col-w-8">
        I'm a div .col-w-8
    </div>
</div>

### Fractions

you can also use fractions like **.w-1/2** , **w-3/4**, **w-2/6** **w-4/12** in oder to change width and **h-1/2** **h-3/4** etc.

``` html
<div class=" bg-grey-200 p-4 mb-4">
    <div class=" b p-4 bg-grey-400  b  br  w-3/4">
        I'm a div .w-3/4
    </div> 
    <div class=" b p-4 bg-grey-400  w-6/12">
        I'm a div .w-6/12
    </div>
</div>
```

<div class=" bg-grey-200 my-4">
    <div class=" b p-4 bg-grey-400  mb-3  w-3/4">
        I'm a div .w-3/4
    </div> 
    <div class=" b p-4 bg-grey-400  w-6/12">
        I'm a div .w-6/12
    </div>
</div>