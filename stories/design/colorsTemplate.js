export const colorsTemplate = (`<section class="storybook-container content">

    <h1 class="title">Colors</h1>
    <br>
    <p>Most elements and components have color variations thanks to <strong>modifiers</strong> with syntax <code>.is-$color</code>, like <code>is-primary</code> or <code>is-dark</code>.</p>
    <p>This is thanks to the <code>$colors</code> <strong>Sass map</strong>, through which Bulma cycles to grab all the colors and their inverts.</p>
    <br><hr><br>

    
    <h2 class="subtitle">Functions <a href="https://bulma.io/documentation/overview/functions/" class="is-pulled-right">📄</a></h2>
    <p></p>
    <div class="bd-content">
    <div class="content">
<p>Bulma uses 3 custom functions to help define the values and colors dynamically:</p>
<ul>
<li><code>powerNumber($number, $exp)</code>: calculates the value of a number exposed to another one. Returns a number.</li>
<li><code>colorLuminance($color)</code>: defines if a color is dark or light. Return a decimal number between 0 and 1 where &lt;= 0.5 is dark and &gt; 0.5 is light.</li>
<li><code>findColorInvert($color)</code>: returns either 70% transparent black or 100% opaque white depending on the luminance of the color.</li>
</ul>
</div>

<hr class="hr" style="margin-bottom: 0;">

<h3 id="the-code-findcolorinvert-code-function" class="title is-4 is-spaced bd-anchor-title">
<span class="bd-anchor-name">
The <code>findColorInvert()</code> function
</span>
<a class="bd-anchor-link" href="#the-code-findcolorinvert-code-function">
#
</a>
</h3>


<div class="content">
<p>The <code>findColorInvert($color)</code> function takes a <strong>color</strong> as an input, and outputs either transparent <strong>black</strong> <code>rgba(#000, 0.7)</code> or <strong>white</strong> <code>#fff</code>:</p>
<ul>
<li>if <code>colorLuminance($color) &gt; 0.55</code>, it outputs <code>rgba(#000, 0.7)</code></li>
<li>otherwise, it outputs <code>#fff</code></li>
</ul>
<p>Its purpose is to guarantee a <strong>readable</strong> shade for the <em>text</em> when the input color is used as the <em>background</em>.</p>
<div class="table-container">
<table class="table is-bordered">
<thead>
  <tr>
    <th>color</th>
    <th>color luminance</th>
    <th>findColorInvert()</th>
    <th>result</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td>
      <span class="bd-color" style="background: #00d1b2;"></span>
      <code>#00d1b2</code>
    </td>
    <td>
      <code>0.52831</code>
    </td>
    <td>
      <span class="bd-color" style="background: #fff;"></span>
      <code>#fff</code>
    </td>
    <td>
      <a class="button" style="background: #00d1b2; border-color: #00d1b2; color: #fff;">
        Button
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <span class="bd-color" style="background: #3273dc;"></span>
      <code>#3273dc</code>
    </td>
    <td>
      <code>0.23119</code>
    </td>
    <td>
      <span class="bd-color" style="background: #fff;"></span>
      <code>#fff</code>
    </td>
    <td>
      <a class="button" style="background: #3273dc; border-color: #3273dc; color: #fff;">
        Button
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <span class="bd-color" style="background: #23d160;"></span>
      <code>#23d160</code>
    </td>
    <td>
      <code>0.51067</code>
    </td>
    <td>
      <span class="bd-color" style="background: #fff;"></span>
      <code>#fff</code>
    </td>
    <td>
      <a class="button" style="background: #23d160; border-color: #23d160; color: #fff;">
        Button
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <span class="bd-color" style="background: #ffdd57;"></span>
      <code>#ffdd57</code>
    </td>
    <td>
      <code>0.76863</code>
    </td>
    <td>
      <span class="bd-color" style="background: rgba(0, 0, 0, 0.7);"></span>
      <code>rgba(0, 0, 0, 0.7)</code>
    </td>
    <td>
      <a class="button" style="background: #ffdd57; border-color: #ffdd57; color: rgba(0, 0, 0, 0.7);">
        Button
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <span class="bd-color" style="background: #ff3860;"></span>
      <code>#ff3860</code>
    </td>
    <td>
      <code>0.27313</code>
    </td>
    <td>
      <span class="bd-color" style="background: #fff;"></span>
      <code>#fff</code>
    </td>
    <td>
      <a class="button" style="background: #ff3860; border-color: #ff3860; color: #fff;">
        Button
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <span class="bd-color" style="background: #ffb3b3;"></span>
      <code>#ffb3b3</code>
    </td>
    <td>
      <code>0.61796</code>
    </td>
    <td>
      <span class="bd-color" style="background: rgba(0,0,0,0.7);"></span>
      <code>rgba(0,0,0,0.7)</code>
    </td>
    <td>
      <a class="button" style="background: #ffb3b3; border-color: #ffb3b3; color: rgba(0,0,0,0.7);">
        Button
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <span class="bd-color" style="background: #ffbc6b;"></span>
      <code>#ffbc6b</code>
    </td>
    <td>
      <code>0.63053</code>
    </td>
    <td>
      <span class="bd-color" style="background: rgba(0,0,0,0.7);"></span>
      <code>rgba(0,0,0,0.7)</code>
    </td>
    <td>
      <a class="button" style="background: #ffbc6b; border-color: #ffbc6b; color: rgba(0,0,0,0.7);">
        Button
      </a>
    </td>
  </tr>
  <tr>
    <td>
      <span class="bd-color" style="background: hsl(294, 71%, 79%);"></span>
      <code>hsl(294, 71%, 79%)</code>
    </td>
    <td>
      <code>0.5529</code>
    </td>
    <td>
      <span class="bd-color" style="background: rgba(0,0,0,0.7);"></span>
      <code>rgba(0,0,0,0.7)</code>
    </td>
    <td>
      <a class="button" style="background: hsl(294, 71%, 79%); border-color: hsl(294, 71%, 79%); color: rgba(0,0,0,0.7);">
        Button
      </a>
    </td>
  </tr>
</tbody>
</table>
</div>
<p>
For colors that have a luminance close to the <code>0.55</code> threshold, it can be useful to <strong>override</strong> the <code>findColorInvert()</code> function, and rather set the invert color <strong>manually.</strong>
<br>
For example, this shade of <span class="bd-color" style="background: hsl(294, 71%, 79%); float: none; height: 16px; width: 16px; margin-right: 0; vertical-align: middle;"></span> purple has a color luminance of <code>0.5529</code>. It can be preferable to set a color invert of white instead of transparent black:
</p>
<div class="table-container">
<table class="table is-bordered">
<tbody>
  <tr>
    <th>
      with <code>findColorInvert()</code>
    </th>
    <td>
      <code>$purple-invert: findColorInvert($purple)</code>
    </td>
    <td>
      <span class="bd-color" style="background: rgba(0,0,0,0.7);"></span>
      <code>rgba(0,0,0,0.7)</code>
    </td>
    <td>
      <a class="button" style="background: hsl(294, 71%, 79%); border-color: hsl(294, 71%, 79%); color: rgba(0,0,0,0.7);">
        Button
      </a>
    </td>
  </tr>
  <tr>
    <th>
      with manual setting
    </th>
    <td>
      <code>$purple-invert: #fff</code>
    </td>
    <td>
      <span class="bd-color" style="background: #fff;"></span>
      <code>#fff</code>
    </td>
    <td>
      <a class="button" style="background: hsl(294, 71%, 79%); border-color: hsl(294, 71%, 79%); color: #fff;">
        Button
      </a>
    </td>
  </tr>
</tbody>
</table>
</div>
</div>

  </div>



    <hr>
    <h2 class="subtitle">Mixins <a href="https://bulma.io/documentation/overview/mixins/" class="is-pulled-right">📄</a></h2>
    <p></p>
    <div class="bd-content">
    <div class="table-container">
<table class="table is-bordered">
<tbody><tr>
<td><code>=arrow($color)</code></td>
<td>Creates a CSS-only down arrow. Used for the dropdown select.</td>
</tr>
<tr>
<td><code>=block</code></td>
<td>Defines a margin-bottom of 1.5rem, except when the element is the last child. Used for almost all block elements.</td>
</tr>
<tr>
<td><code>=clearfix</code></td>
<td>Adds a clearfix at the end of the element. Used for the "is-clearfix" helper.</td>
</tr>
<tr>
<td><code>=center($size)</code></td>
<td>Positions an element in the exact center of its parent. Used for the spinner in a loading button.</td>
</tr>
<tr>
<td><code>=delete</code></td>
<td>Creates a CSS-only cross. Used for the delete element in modals, messages, tags...</td>
</tr>
<tr>
<td><code>=fa($size, $dimensions)</code></td>
<td>Sets the style of a Font Awesome icon container.</td>
</tr>
<tr>
<td><code>=hamburger($dimensions)</code></td>
<td>Creates a CSS-only hamburger menu with 3 bars. Used for the "nav-toggle".</td>
</tr>
<tr>
<td><code>=loader</code></td>
<td>Creates a CSS-only loading spinner. Used for the ".loader" element, and for input and button spinners.</td>
</tr>
<tr>
<td><code>=overflow-touch</code></td>
<td>Sets the style of a container so that it keeps momentum when scrolling on iOS devices.</td>
</tr>
<tr>
<td><code>=overlay($offset: 0)</code></td>
<td>Makes the element overlay its parent container, like the transparent modal background.</td>
</tr>
<tr>
<td><code>=placeholder</code></td>
<td>Sets the styles of an input placeholder.</td>
</tr>
<tr>
<td><code>=unselectable</code></td>
<td>Turns the element unselectable. Used for buttons to prevent selection when clicking.</td>
</tr>
</tbody></table>
</div>

<div class="content">
<p>These mixins are already used throughout Bulma, but you can use them as well to extend your own styles.</p>
</div>

  </div>

</section>`)
