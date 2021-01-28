---
title: "Breakpoints"
description: "Lean how to use Customizable CSS Breakpoints"
tags:
  - breakpoints
---

# Break Points

## Breakpoints list

You can use breakpoints in order to change the width of a column on diferent devices

<table class="table table-full table-with-border"><thead><tr><th>Prefix</th> <th>Container width</th> <th>Example</th></tr></thead> <tbody><tr><td>
  xl
</td> <td><b> &gt; 1280px </b></td> <td>
  col-w-xl-3
</td></tr> <tr><td>
  lg
</td> <td><b> res &gt; 1024 </b></td> <td>
  col-w-lg-4
</td></tr> <tr><td>
  md
</td> <td><b> res &gt; 768px </b></td> <td>
  col-w-md-6
</td></tr> <tr><td>
  sm
</td> <td><b> res &gt; 576px </b></td> <td>
  col-w-xl-12
</td></tr> <tr><td>
  none
</td> <td><b> &gt; 576px default </b></td> <td>
  col-3
</td></tr></tbody></table>


``` html
<div class="row ">
  <div class="col col-w-sm-12  col-w-md-6 ">
      I'm a full width on small screen but half on medium up 
  </div> 
  <div class="col col-w-12  col-w-md-6 col-w-lg-4 ">
    Im full width on sm, half on md and 1/4 on large
  </div>
</div>
```

<div class="row bg-grey-200 my-4"><div class="col b p-4 bg-grey-400 col-w-sm-12 mb-4  col-w-md-6 ">
      <p>I'm a <span class="bold">full width</span> on small screen but <span class="bold">half</span> on medium up </p>
    </div> <div class="col b p-4 bg-grey-400 mb-4 col-w-12  col-w-md-6 col-w-lg-4 ">
    <p>
     I'm  <span class="bold">full width</span> on <span class="bold">sm</span>, <span class="bold">half</span> on <span class="bold">md</span>  and  <span class="bold">1/3</span> on <span class="bold">large</span>
    </p>
    </div></div>