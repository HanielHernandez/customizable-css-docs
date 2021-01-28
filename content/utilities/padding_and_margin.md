---
title: Padding and Margin
description: Learn how to use Customizable CSS Padding and Margin classes.
---

# Padding and Margin

You can set padding and margin by using the class **.p-{number from 1 to 24}** or **m-{number from 1 to 24}** , youn can also use modifers like **b** for botom or, **t** for top, **r** for right and **l** for left in order to spiciy the side of the div to add padding

<table class="table table-with-border  mb-4">
                        <thead>
                            <tr>
                                <th> Class </th>
                                <th> Property </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>
                                    m-*{0-12} / p-*{0-12}
                                </td>
                                <td>
                                    padding / margin: number * 0.25rem;
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    mt-*{0-12} / pt-*{0-12}
                                </td>
                                <td>
                                    padding-top / margin-top: number * 0.25rem;
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    mb-*{0-12} / pb-*{0-12}
                                </td>
                                <td>
                                    padding-bottom / margin-bottom: number * 0.25rem;
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    ml-*{0-12} / pl-*{0-12}
                                </td>
                                <td>
                                    padding-left / / margin-left: number * 0.25rem;
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    mr-*{0-12} / pr-*{0-12}
                                </td>
                                <td>
                                    padding-right / margin-right: number * 0.25rem;
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    
``` html
<div class="b p-2 mb-4">
  im a div with <b>.p-2 </b> class
</div>
<div class="b p-4 mb-4">
  im a div with <b>.p-4 </b> class
</div>
<div class="b p-8 mb-4">
  im a div with <b>.p-8 </b> class
</div>
<div class="b p-4 mb-4">
  <div class="b bg-white p-4 mb-2">
      im a div with <b>.mb-2 </b> class
  </div>
  <div class="b bg-white p-4 mb-4">
  im a div with .mb-4 class
  </div>
    <div class="b bg-white p-4 mb-6">
  im a div with .mb-6 class
  </div>
</div>
```


<div class="b p-2 mb-4">
  im a div with <b>.p-2 </b> class
</div>
<div class="b p-4 mb-4">
  im a div with <b>.p-4 </b> class
</div>
<div class="b p-8 mb-4">
  im a div with <b>.p-8 </b> class
</div>
<div class="b p-4 mb-4">
  <div class="b bg-white p-4 mb-2">
      im a div with <b>.mb-2 </b> class
  </div>
  <div class="b bg-white p-4 mb-4">
  im a div with .mb-4 class
  </div>
    <div class="b bg-white p-4 mb-6">
  im a div with .mb-6 class
  </div>
</div>
