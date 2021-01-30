---
title: Tranisitons and Hover
description: Learn how to use customizable css Transitions and hover classes.
category: utilities
---
# Transitions and Hover

## Hover
you can change some properties on hover by using the **.hover:{border, bacground, text color class}** class

<div class="p-4 bg-blue-600 hover:bg-red-600 hover:text-grey-600">
		Hover over me
</div>

```html
<div class="p-4 bg-blue-600 hover:bg-red-600 hover:text-grey-600">
	Hover over me
</div> 
```


## Trasitions

You can send transitions-property property by using one of the following classes

<table class="table table-with-border w-12/12 mb-4">
	<thead>
			<tr>
					<th>
							Class
					</th>
					<th>
							Properties
					</th>
			</tr>
	</thead>
	<tbody>
			<tr>
					<td> <b>.transition-all</b> </td>
					<td>
							all
					</td>
			</tr>
			<tr>
					<td> <b>.transition-colors</b> </td>
					<td>
							color, background-color, border-color, opacity
					</td>
			</tr>
			<tr>
					<td> <b>.transition-width</b> </td>
					<td>
							width
					</td>
			</tr>
			<tr>
					<td> <b>.transition-height</b> </td>
					<td>
							width
					</td>
			</tr>
			<tr>
					<td> <b>.transition-size</b> </td>
					<td>
							width, height
					</td>
			</tr>
	</tbody>
</table>

You can send transitions-duration property by using the class **.duration-{ multiple of 100 }** and transitions-timing property by using the class **.timing-{linear,ease-in ,ease-out,easin-out}**

```html
 <div class= "p-4 bg-blue-600 hover:bg-red-600 hover:text-grey-600 transtion-color duration-200 timing-linear">
Hover over me
</div>   
```
<div class= "p-4 bg-blue-600 hover:bg-red-600 hover:text-grey-600 transtion-color duration-200 timing-linear">
Hover over me
</div> 