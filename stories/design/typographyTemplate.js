
export const typographyTemplate = `<section class="storybook-container content">

<h1 class="title">Typography</h1>
<br>
<p>Primary font:</p>
<p>Secondary font:</p>
<br>
<p>TODO: Code examples with app text elements (headers, p, etc) </p>

<br><hr><br>

<h2 class="subtitle">Typography helpers <a href="https://bulma.io/documentation/modifiers/typography-helpers/" class="is-pulled-right">📄</a></h2>
<p></p>
<div class="bd-content">
      

<h3 id="size" class="title is-4 is-spaced bd-anchor-title">
<span class="bd-anchor-name">
Size
</span>
<a class="bd-anchor-link" href="#size">
#
</a>
</h3>


<div class="content">
<p>
There are <strong>7 sizes</strong> to choose from:
</p>
</div>

<table class="table is-bordered">
<thead>
<tr>
  <th>
    Class
  </th>
  <th>
    Font-size
  </th>
</tr>
</thead>
<tbody>
    
        <tr>
            

            <td><code>is-size-1</code></td>
            <td><code>3rem</code></td>
        </tr>

        <tr>
            

            <td><code>is-size-2</code></td>
            <td><code>2.5rem</code></td>
        </tr>

        <tr>
            

            <td><code>is-size-3</code></td>
            <td><code>2rem</code></td>
        </tr>

        <tr>
            

            <td><code>is-size-4</code></td>
            <td><code>1.5rem</code></td>
        </tr>

        <tr>
            

            <td><code>is-size-5</code></td>
            <td><code>1.25rem</code></td>
        </tr>

        <tr>
            

            <td><code>is-size-6</code></td>
            <td><code>1rem</code></td>
        </tr>

        <tr>
            

            <td><code>is-size-7</code></td>
            <td><code>0.75rem</code></td>
        </tr>

</tbody>
</table>

<hr class="hr" style="margin-bottom: 0;">

<h3 id="responsive-size" class="title is-4 is-spaced bd-anchor-title">
<span class="bd-anchor-name">
Responsive size
</span>
<a class="bd-anchor-link" href="#responsive-size">
#
</a>
</h3>


<div class="content">
<p>
You can choose a <strong>specific</strong> size for <em>each</em> viewport width. You simply need to append the <strong>viewport width</strong> to the size modifier.
</p>
<p>
For example, here are the modifiers for <code>$size-1</code>:
</p>
</div>


<div class="table-container">
<table class="table is-bordered">
  
<thead>
<tr>
<th>
  Class
</th>

  
  <th>
    Mobile<br>
    
      Up to <code>768px</code>
    
  </th>

  
  <th>
    Tablet<br>
    
      Between <code>769px</code> and <code>1023px</code>
    
  </th>

  
  <th>
    Desktop<br>
    
      Between <code>1024px</code> and <code>1215px</code>
    
  </th>

  
  <th>
    Widescreen<br>
    
      Between <code>1216px</code> and <code>1407px</code>
    
  </th>

  
  <th>
    FullHD<br>
    
      <code>1408px</code> and above
    
  </th>

</tr>
</thead>

  <tbody>
    <tr>
      <td><code>is-size-1-mobile</code></td>
      
<td class="is-narrow">
<p class="notification is-primary"><code>3rem</code></p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

    </tr>
    <tr>
      <td><code>is-size-1-tablet</code></td>
      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification is-primary"><code>3rem</code></p>
</td>

      
<td class="is-narrow">
<p class="notification is-primary"><code>3rem</code></p>
</td>

      
<td class="is-narrow">
<p class="notification is-primary"><code>3rem</code></p>
</td>

      
<td class="is-narrow">
<p class="notification is-primary"><code>3rem</code></p>
</td>

    </tr>
    <tr>
      <td><code>is-size-1-touch</code></td>
      
<td class="is-narrow">
<p class="notification is-primary"><code>3rem</code></p>
</td>

      
<td class="is-narrow">
<p class="notification is-primary"><code>3rem</code></p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

    </tr>
    <tr>
      <td><code>is-size-1-desktop</code></td>
      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification is-primary"><code>3rem</code></p>
</td>

      
<td class="is-narrow">
<p class="notification is-primary"><code>3rem</code></p>
</td>

      
<td class="is-narrow">
<p class="notification is-primary"><code>3rem</code></p>
</td>

    </tr>
    <tr>
      <td><code>is-size-1-widescreen</code></td>
      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification is-primary"><code>3rem</code></p>
</td>

      
<td class="is-narrow">
<p class="notification is-primary"><code>3rem</code></p>
</td>

    </tr>
    <tr>
      <td><code>is-size-1-fullhd</code></td>
      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification is-primary"><code>3rem</code></p>
</td>

    </tr>
  </tbody>
</table>
</div>


<div class="content">
<p>
You can use the same logic for each of the <strong>7 sizes</strong>.
</p>
</div>

<hr class="hr" style="margin-bottom: 0;">

<h3 id="colors" class="title is-4 is-spaced bd-anchor-title">
<span class="bd-anchor-name">
Colors
</span>
<a class="bd-anchor-link" href="#colors">
#
</a>
</h3>


<div class="content">
<p>
You can set any element to one of the <strong>9 colors</strong> or <strong>9 shades of grey</strong>:
</p>
</div>

<table class="table is-bordered">
<thead>
<tr>
  <th>
    Class
  </th>
  <th>
    Color
  </th>
</tr>
</thead>
<tbody>
<tr><td><code>has-text-white</code></td><td><span class="bd-color" style="background: hsl(0, 0%, 100%);"></span>
<code>hsl(0, 0%, 100%)</code>
</td></tr>
<tr><td><code>has-text-black</code></td><td><span class="bd-color" style="background: hsl(0, 0%, 4%);"></span>
<code>hsl(0, 0%, 4%)</code>
</td></tr>
<tr><td><code>has-text-light</code></td><td><span class="bd-color" style="background: hsl(0, 0%, 96%);"></span>
<code>hsl(0, 0%, 96%)</code>
</td></tr>
<tr><td><code>has-text-dark</code></td><td><span class="bd-color" style="background:  hsl(0, 0%, 21%);"></span>
<code>hsl(0, 0%, 21%)</code>
</td></tr>
<tr><td><code>has-text-primary</code></td><td><span class="bd-color" style="background: hsl(171, 100%, 41%);"></span>
<code>hsl(171, 100%, 41%)</code>
</td></tr>
<tr><td><code>has-text-info</code></td><td><span class="bd-color" style="background: hsl(204, 86%, 53%);"></span>
<code>hsl(204, 86%, 53%)</code>
</td></tr>
<tr><td><code>has-text-link</code></td><td><span class="bd-color" style="background: hsl(217, 71%,  53%);"></span>
<code>hsl(217, 71%,  53%)</code>
</td></tr>
<tr><td><code>has-text-success</code></td><td><span class="bd-color" style="background: hsl(141, 71%,  48%);"></span>
<code>hsl(141, 71%,  48%)</code>
</td></tr>
<tr><td><code>has-text-warning</code></td><td><span class="bd-color" style="background: hsl(48,  100%, 67%);"></span>
<code>hsl(48,  100%, 67%)</code>
</td></tr>
<tr><td><code>has-text-danger</code></td><td><span class="bd-color" style="background: hsl(348, 100%, 61%);"></span>
<code>hsl(348, 100%, 61%)</code>
</td></tr>
<tr><td><code>has-text-black-bis</code></td><td><span class="bd-color" style="background: hsl(0, 0%, 7%);"></span>
<code>hsl(0, 0%, 7%)</code>
</td></tr>
<tr><td><code>has-text-black-ter</code></td><td><span class="bd-color" style="background: hsl(0, 0%, 14%);"></span>
<code>hsl(0, 0%, 14%)</code>
</td></tr>
<tr><td><code>has-text-grey-darker</code></td><td><span class="bd-color" style="background:  hsl(0, 0%, 21%);"></span>
<code>hsl(0, 0%, 21%)</code>
</td></tr>
<tr><td><code>has-text-grey-dark</code></td><td><span class="bd-color" style="background: hsl(0, 0%, 29%);"></span>
<code>hsl(0, 0%, 29%)</code>
</td></tr>
<tr><td><code>has-text-grey</code></td><td><span class="bd-color" style="background: hsl(0, 0%, 48%);"></span>
<code>hsl(0, 0%, 48%)</code>
</td></tr>
<tr><td><code>has-text-grey-light</code></td><td><span class="bd-color" style="background: hsl(0, 0%, 71%);"></span>
<code>hsl(0, 0%, 71%)</code>
</td></tr>
<tr><td><code>has-text-grey-lighter</code></td><td><span class="bd-color" style="background: hsl(0, 0%, 86%);"></span>
<code>hsl(0, 0%, 86%)</code>
</td></tr>
<tr><td><code>has-text-white-ter</code></td><td><span class="bd-color" style="background: hsl(0, 0%, 96%);"></span>
<code>hsl(0, 0%, 96%)</code>
</td></tr>
<tr><td><code>has-text-white-bis</code></td><td><span class="bd-color" style="background: hsl(0, 0%, 98%);"></span>
<code>hsl(0, 0%, 98%)</code>
</td></tr>
</tbody>
</table>

<hr class="hr" style="margin-bottom: 0;">

<h3 id="alignment" class="title is-4 is-spaced bd-anchor-title">
<span class="bd-anchor-name">
Alignment
</span>
<a class="bd-anchor-link" href="#alignment">
#
</a>
</h3>


<div class="content">
<p>
You can align the text with the use of one of <strong>4 alignment helpers</strong>:
</p>
</div>

<table class="table is-bordered">
<thead>
<tr>
  <th>
    Class
  </th>
  <th>
    Alignment
  </th>
</tr>
</thead>
<tbody>
<tr>
<td><code>has-text-centered</code></td>
<td>Makes the text <strong>centered</strong></td>
</tr>
<tr>
<td><code>has-text-justified</code></td>
<td>Makes the text <strong>justified</strong></td>
</tr>
<tr>
<td><code>has-text-left</code></td>
<td>Makes the text aligned to the <strong>left</strong></td>
</tr>
<tr>
<td><code>has-text-right</code></td>
<td>Makes the text aligned to the <strong>right</strong></td>
</tr>
</tbody>
</table>

<hr class="hr" style="margin-bottom: 0;">

<h3 id="responsive-alignment" class="title is-4 is-spaced bd-anchor-title">
<span class="bd-anchor-name">
Responsive Alignment
</span>
<a class="bd-anchor-link" href="#responsive-alignment">
#
</a>
</h3>


<div class="content">
<p>
You can now <strong>align text</strong> for <em>each</em> viewport width. You simply need to append the <strong>viewport width</strong> to the alignment modifier.
</p>

<p>
For example, here are the modifiers for <code>has-text-left</code>:
</p>
</div>


<div class="table-container">
<table class="table is-bordered">
  
<thead>
<tr>
<th>
  Class
</th>

  
  <th>
    Mobile<br>
    
      Up to <code>768px</code>
    
  </th>

  
  <th>
    Tablet<br>
    
      Between <code>769px</code> and <code>1023px</code>
    
  </th>

  
  <th>
    Desktop<br>
    
      Between <code>1024px</code> and <code>1215px</code>
    
  </th>

  
  <th>
    Widescreen<br>
    
      Between <code>1216px</code> and <code>1407px</code>
    
  </th>

  
  <th>
    FullHD<br>
    
      <code>1408px</code> and above
    
  </th>

</tr>
</thead>

  <tbody>
    <tr>
      <td><code>has-text-left-mobile</code></td>
      
<td class="is-narrow">
<p class="notification is-primary">left-aligned</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

    </tr>
    <tr>
      <td><code>has-text-left-tablet</code></td>
      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification is-primary">left-aligned</p>
</td>

      
<td class="is-narrow">
<p class="notification is-primary">left-aligned</p>
</td>

      
<td class="is-narrow">
<p class="notification is-primary">left-aligned</p>
</td>

      
<td class="is-narrow">
<p class="notification is-primary">left-aligned</p>
</td>

    </tr>
    <tr>
      <td><code>has-text-left-tablet-only</code></td>
      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification is-primary">left-aligned</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

    </tr>
    <tr>
      <td><code>has-text-left-touch</code></td>
      
<td class="is-narrow">
<p class="notification is-primary">left-aligned</p>
</td>

      
<td class="is-narrow">
<p class="notification is-primary">left-aligned</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

    </tr>
    <tr>
      <td><code>has-text-left-desktop</code></td>
      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification is-primary">left-aligned</p>
</td>

      
<td class="is-narrow">
<p class="notification is-primary">left-aligned</p>
</td>

      
<td class="is-narrow">
<p class="notification is-primary">left-aligned</p>
</td>

    </tr>
    <tr>
      <td><code>has-text-left-desktop-only</code></td>
      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification is-primary">left-aligned</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

    </tr>
    <tr>
      <td><code>has-text-left-widescreen</code></td>
      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification is-primary">left-aligned</p>
</td>

      
<td class="is-narrow">
<p class="notification is-primary">left-aligned</p>
</td>

    </tr>
    <tr>
      <td><code>has-text-left-widescreen-only</code></td>
      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification is-primary">left-aligned</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

    </tr>
    <tr>
      <td><code>has-text-left-fullhd</code></td>
      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification">unchanged</p>
</td>

      
<td class="is-narrow">
<p class="notification is-primary">left-aligned</p>
</td>

    </tr>
  </tbody>
</table>
</div>


<hr class="hr" style="margin-bottom: 0;">

<h3 id="text-transformation" class="title is-4 is-spaced bd-anchor-title">
<span class="bd-anchor-name">
Text transformation
</span>
<a class="bd-anchor-link" href="#text-transformation">
#
</a>
</h3>


<div class="content">
<p>
You can transform the text with the use of one of <strong>4 text transformation helpers</strong>:
</p>
</div>

<table class="table is-bordered">
<thead>
<tr>
<th>
  Class
</th>
<th>
  Transformation
</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>is-capitalized</code></td>
<td>Transforms <strong>the first character</strong> of each word to <strong>uppercase</strong></td>
</tr>
<tr>
<td><code>is-lowercase</code></td>
<td>Transforms <strong>all characters</strong> to <strong>lowercase</strong></td>
</tr>
<tr>
<td><code>is-uppercase</code></td>
<td>Transforms <strong>all characters</strong> to <strong>uppercase</strong></td>
</tr>
<tr>
<td><code>is-italic</code></td>
<td>Transforms <strong>all characters</strong> to <strong>italic</strong></td>
</tr>
</tbody>
</table>

<hr class="hr" style="margin-bottom: 0;">

<h3 id="text-weight" class="title is-4 is-spaced bd-anchor-title">
<span class="bd-anchor-name">
Text weight
</span>
<a class="bd-anchor-link" href="#text-weight">
#
</a>
</h3>


<div class="content">
<p>
You can transform the text weight with the use of one of <strong>5 text weight helpers</strong>:
</p>
</div>

<table class="table is-bordered">
<thead>
<tr>
<th>
  Class
</th>
<th>
  Weight
</th>
</tr>
</thead>
<tbody>
<tr>
<td><code>has-text-weight-light</code></td>
<td>Transforms text weight to <strong>light</strong></td>
</tr>
<tr>
<td><code>has-text-weight-normal</code></td>
<td>Transforms text weight to <strong>normal</strong></td>
</tr>
<tr>
<td><code>has-text-weight-medium</code></td>
<td>Transforms text weight to <strong>medium</strong></td>
</tr>
<tr>
<td><code>has-text-weight-semibold</code></td>
<td>Transforms text weight to <strong>semi-bold</strong></td>
</tr>
<tr>
<td><code>has-text-weight-bold</code></td>
<td>Transforms text weight to <strong>bold</strong></td>
</tr>
</tbody>
</table>

<hr class="hr" style="margin-bottom: 0;">

<h3 id="font-family" class="title is-4 is-spaced bd-anchor-title">
<span class="bd-anchor-name">
Font family
</span>
<a class="bd-anchor-link" href="#font-family">
#
</a>
</h3>





<div class="tags has-addons">

<span class="tag">Since</span>
<span class="tag is-info">0.7.4</span>

</div>


<div class="content">
<p>
You can change the font family with the use of one of <strong>5 font family helpers</strong>:
</p>
</div>



<table class="table is-bordered">
<thead>
<tr>
  <th>
    Class
  </th>
  <th>
    Family
  </th>
</tr>
</thead>
<tbody>

  <tr>
    <td><code>is-family-sans-serif</code></td>
    <td>Sets font family to <code>$family-sans-serif</code></td>
  </tr>

  <tr>
    <td><code>is-family-monospace</code></td>
    <td>Sets font family to <code>$family-monospace</code></td>
  </tr>

  <tr>
    <td><code>is-family-primary</code></td>
    <td>Sets font family to <code>$family-primary</code></td>
  </tr>

  <tr>
    <td><code>is-family-secondary</code></td>
    <td>Sets font family to <code>$family-secondary</code></td>
  </tr>

  <tr>
    <td><code>is-family-code</code></td>
    <td>Sets font family to <code>$family-code</code></td>
  </tr>

</tbody>
</table>


    </div>

</section>`
