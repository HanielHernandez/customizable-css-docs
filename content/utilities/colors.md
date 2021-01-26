# Colors

you change background color property of a div by using the classes **.bg-{theme name /color}**.

<div class="row mb-4">
                        <div class="inline-block p-12 bg-dark w-1/2 w-md-12/12">
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

you change text color property of a div by using the classes **.text-{theme name/color}**.


<div class="b p-4 mb-4">
                        <p class="text-primary ">
                            text with primary color
                        </p>
                        <p class="text-red-600 ">
                            text with text-red-600 color
                        </p>
                        <p class="text-green-800 ">
                            text with green 800
                        </p>
                    </div>
In order to make the main css file lighter default colors themes are not created, but there variables are, you can create a 
color theme by

```scss
$color-variants: map-get($colors,'red'); // gets and array of the variants of the color red
$variant: map-get($color-variants,500); //  gets variant 500 
@include  create-theme('red-500',$variant); //Creates an entire theme (background,text, borders etc) base on a color
```

this is the offical list of the colors suported:
