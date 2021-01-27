<template>
  <div>
      <div class="row align-items-start wrap">
        <div style="width:calc(100% - 240px);">

         

    <h4>
                        Navbar
                    </h4>
                    <p>
                        You can create responsive navbar by adding a <b>.navbar-collapse-{breakpoint}</b>,
                         encapsulating the <b>.nav</b> element with a <b>.nav-menu</b> element, and a  adding a <b>.nav-toggler</b>  button
                        with a <b>data-target</b> perperty set to and id use by the <b>.nav-menu</b>, <b>.nav</b>  will be hidden until the collapse breakpoint is reach, your final sctructure should look like this <br>
                        <ul>
                            <li>
                                <b>.navbar</b> element with a <b>.navbar-collpse-{breakpoint}</b> class, this should contain the following elements:
                                <ul>
                                    <li>
                                        <b>.brand</b> your brand or any element 
                                    </li>
                                    <li>
                                        <b>.nav-toggler</b> button with a <b>data-target</b> property set to the id of a  <b>.nav-menu</b> element class
                                    </li>
                                    <li>
                                        <b>.nav-menu</b> element with an id set to the .nav-toggler <b>data-target</b> value. this element yould contains
                                            <ul>
                                                <li>
                                                    <b>.nav</b> element with your links or any other kind of element
                                                </li>
                                            </ul>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </p>
<pre><code class="html"><span class="tag">&lt;nav </span><span class="prop">class=</span><span class="val">"navbar b navbar-white navbar-collapse-md"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;a </span><span class="prop">class=</span><span class="val">"brand"</span><span class="tag">&gt;</span>
        Brand
    <span class="tag">&lt;/a&gt;</span>
    <span class="tag">&lt;button </span><span class="prop">class=</span><span class="val">"btn nav-toggler"</span><span class="tag">&gt;</span>
        <span class="tag">&lt;i </span><span class="prop">class=</span><span class="val">"material-icons"</span> <span class="prop">data-target=</span><span class="val">"nav_menu"</span><span class="tag">&gt;</span>
            menu
        <span class="tag">&lt;/i&gt;</span>
    <span class="tag">&lt;/button&gt;</span>
    <span class="tag">&lt;div </span><span class="prop">class=</span><span class="val">"nav-menu"</span> <span class="prop">id=</span><span class="val">"nav_menu"</span> <span class="tag">&gt;</span>
        <span class="tag">&lt;ul </span><span class="prop">class=</span><span class="val">"nav"</span><span class="tag">&gt;</span>
            <span class="tag">&lt;li </span><span class="prop">class=</span><span class="val">"nav-link"</span><span class="tag">&gt;</span>
                <span class="tag">&lt;a </span><span class="prop">class=</span><span class="val">"nav-item"</span><span class="tag">&gt;</span>
                    ...
                <span class="tag">&lt;/a&gt;</span>
            <span class="tag">&lt;/li&gt;</span>
            <span class="tag">&lt;li </span><span class="prop">class=</span><span class="va">"nav-link"</span><span class="tag">&gt;</span>
                <span class="tag">&lt;a </span><span class="prop">class=</span><span class="val">"nav-item"</span><span class="tag">&gt;</span>
                    ...
                <span class="tag">&lt;/a&gt;</span>
            <span class="tag">&lt;/li&gt;</span>
            <span class="tag">&lt;li </span><span class="prop">class=</span><span class="val">"nav-link"</span><span class="tag">&gt;</span>
                <span class="tag">&lt;a </span><span class="prop">class=</span><span class="val">"nav-item"</span><span class="tag">&gt;</span>
                    ...
                <span class="tag">&lt;/a&gt;</span>
            <span class="tag">&lt;/li&gt;</span>
        <span class="tag">&lt;/ul&gt;</span>
    <span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;/nav&gt;</span></code></pre>
                    <div class="navbar mb-4 b navbar-white navbar-collapse-md">
                        <a href="" class="brand">Brand</a>
                        <button class="btn nav-toggler" data-target="navbar_menu">
                            <i class="material-icons">
                                menu
                            </i>
                        </button>
                        <div class="nav-menu" id="navbar_menu">
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
                    <h5>
                        Position
                    </h5>
                    <p>
                        you can change the position of the navigation by using some of the flexbox utilities
                    </p>

<pre><code class="html"><span class="tag">&lt;nav </span><span class="prop">class=</span><span class="val">"navbar b navbar-white navbar-collapse-md"</span><span class="tag">&gt;</span>
    <span class="tag">&lt;a </span><span class="prop">class=</span><span class="val">"brand"</span><span class="tag">&gt;</span>
        Brand
    <span class="tag">&lt;/a&gt;</span>
    <span class="tag">&lt;button </span><span class="prop">class=</span><span class="val">"btn nav-toggler"</span><span class="tag">&gt;</span>
        <span class="tag">&lt;i </span><span class="prop">class=</span><span class="val">"material-icons"</span> <span class="prop">data-target=</span><span class="val">"nav_menu"</span><span class="tag">&gt;</span>
            menu
        <span class="tag">&lt;/i&gt;</span>
    <span class="tag">&lt;/button&gt;</span>
    <span class="tag">&lt;div </span><span class="prop">class=</span><span class="val">"nav-menu justify-end"</span> <span class="prop">id=</span><span class="val">"nav_menu"</span> <span class="tag">&gt;</span>
        <span class="tag">&lt;ul </span><span class="prop">class=</span><span class="val">"nav "</span><span class="tag">&gt;</span>
            ...
        <span class="tag">&lt;/ul&gt;</span>
    <span class="tag">&lt;/div&gt;</span>
<span class="tag">&lt;/nav&gt;</span></code></pre>
                    <div class="navbar mb-4 b navbar-white navbar-collapse-md">
                        <a href="" class="brand">Brand</a>
                        <button class="btn nav-toggler" data-target="navbar_menu">
                            <i class="material-icons">
                                menu
                            </i>
                        </button>
                        <div class="nav-menu justify-end" id="navbar_menu">
                            <ul class="nav justify-end">
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
                    <h5>
                        Color
                    </h5>
                    <p class="">
                        You can also change the color of a sidebar by using the class <b>.navbar-{ theme/color }</b>
                    </p>

                    
<pre><code class="html"><span class="tag">&lt;nav </span><span class="prop">class=</span><span class="val">"navbar navbar-primary"</span><span class="tag">&gt;</span> 
<span class="tag">&lt;/nav&gt;</span>
<span class="tag">&lt;nav </span><span class="prop">class=</span><span class="val">"navbar navbar-dark"</span><span class="tag">&gt;</span> 
<span class="tag">&lt;/nav&gt;</span>
<span class="tag">&lt;nav </span><span class="prop">class=</span><span class="val">"navbar navbar-red-600"</span><span class="tag">&gt;</span> 
<span class="tag">&lt;/nav&gt;</span></code></pre>

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
                    <div class="navbar navbar-dark navbar-collapse-md mb-4">
                        <a href="" class="brand">Brand</a>
                        <div cclass="nav-menu">
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
                <p>
                    Lastly you can set the position of a navbar to the top always by adding the class <b>.fixed</b> or <b>.sticky</b>, remember to add padding to the elements bellow otherwise the navbar elements will overlap
                </p>
        </div>
        <div class="sticky b bt-0 bb-0 br-0 bl" style="top:3.5rem; height:auto; width:240px; maxheight:" >
              <right-bar :links="[{text:'#navbar',text:'Navbar'}]" />
        </div>
      </div>
  </div>
</template>
<script>
import RightBar from '../../../components/RightBar';
export default {
  layout: "doc",
  name:'navbar',
  components:{
      RightBar
  },
  head() {
    return {
      title: "Customizable Css - Navbar",
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Learn how to use Customizable css Navbar component",
        },
      ],
    };
  },
};
</script>
