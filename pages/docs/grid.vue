<template lang="html">
     <!--###  GRID SYSTEM ### -->
            <div id="grid">
                <h4 class="">
                    Grid
                </h4>
                <p class="mb-4 w-12"> the <b>.row</b> set display to <b>flex</b> and <b> flex-direction</b> to
                    <b>flex-row</b>
                </p>
                <pre>
<code data-lang="html"><span class="tag">&lt;div</span> <span class="prop">class=</span><span class="val">"row bg-grey-200 p-4 mb-4"</span> <span class="tag">></span>
    <span class="tag">&lt;p </span><span class="prop">class=</span><span class="val">"mb-4 w-12"</span><span class="tag">></span> 
        I'm a div .row
    <span class="tag">&lt;/p></span>  
    <span class="tag">&lt;div </span> <span class="prop">class=</span><span class="val">"col b p-4 bg-grey-400 col-w-4"</span><span class="tag">></span>
        I'm a div .col
    <span class="tag">&lt;/div> </span>
    <span class="tag">&lt;div </span> <span class="prop">class=</span><span class="val">"col b p-4 bg-grey-400 col-w-4"</span><span class="tag">></span>
        I'm a div .col
    <span class="tag">&lt;/div> </span>
    <span class="tag">&lt;div </span> <span class="prop">class=</span><span class="val">"col b p-4 bg-grey-400 col-w-4"</span><span class="tag">></span>
        I'm a div .col
    <span class="tag">&lt;/div> </span>
<span class="tag">&lt;/div> </span>
</code></pre>
                <div class="row bg-grey-200 p-4 mb-4">
                    <p class="mb-4  w-12">
                        I'm a div .row
                    </p>
                    <div class="col b p-4 bg-grey-400  b  br  col-w-4">
                        I'm a div .col

                    </div>
                    <div class="col b p-4 bg-grey-400  col-w-4">
                        I'm a div .col
                    </div>
                    <div class="col b p-4 bg-grey-400  col-w-4">
                        I'm a div .col
                    </div>
                </div>

                <p class="mb-4"> the <b> .col </b> class set <b> display </b>to <b> flex</b> and <b>flex-direction</b>to
                    <b> flex-column</b> </span>
                </p>
                <div class="row bg-grey-200 p-4 mb-4">
                    <p class="mb-4  w-12">
                        I'm a div .col
                    </p>
                    <div class="row b p-4 bg-grey-400  b  br  ">
                        I'm a div .row

                    </div>
                    <div class="row b p-4 bg-grey-400  ">
                        I'm a div .row
                    </div>
                    <div class="row b p-4 bg-grey-400  ">
                        I'm a div .col
                    </div>
                </div>
                <p class="mb-4 w-12"> the class <b> .col-w-</b> follow by a number between <b> 1 and 12 </b>will change the width of a column </p>
                <div class="row bg-grey-200 p-4 mb-4">

                    <div class="col b p-4 bg-grey-400  b  br  col-w-4">
                        I'm a div .col-w-4

                    </div>
                    <div class="col b p-4 bg-grey-400  col-w-8">
                        I'm a div .col-w-8
                    </div>

                </div>

                <h5 class="text-grey-900">
                    Fractions
                </h5>
                <p class="mb-4 w-12"> you can also use fractions like <b> .w-1/2 , w-3/4, w-2/6 w-4/12</b> in oder to
                    separate width and <b>h-1/2 h-3/4 etc</b> in </p>
                <div class=" bg-grey-200 p-4 mb-4">

                    <div class=" b p-4 bg-grey-400  b  br  w-3/4">
                        I'm a div .w-3/4

                    </div>
                    <div class=" b p-4 bg-grey-400  w-6/12">
                        I'm a div .w-6/12
                    </div>

                </div>
                

            </div>
            <!--### FORMS SECTIONS ### -->
</template>
<script>
export default {
  layout: "doc",
  components: {},
  head() {
    return {
      title: 'Customizable Css - Grid',
      meta:[
        {
          hid: 'description',
          name: 'description',
          content: 'Lear how to use Customizable css grid'
        }
      
      ]
    }
  }
};
</script>
