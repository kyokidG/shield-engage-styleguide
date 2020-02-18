export const helpersTemplate = (`<section class="storybook-container content">

<h1 class="title">Helpers</h1>
<br>
<h2 class="subtitle">General helpers <a target="_blank" href="https://bulma.io/documentation/modifiers/helpers/" class="is-pulled-right">📄</a> </h2>

<div class="bd-content">
  <table class="table is-bordered">
  <tbody>
  <tr>
  <th rowspan="3">Float</th>
  <td><code>is-clearfix</code></td>
  <td>Fixes an element's floating children</td>
  </tr>
  <tr>
  <td><code>is-pulled-left</code></td>
  <td>Moves an element to the left</td>
  </tr>
  <tr>
  <td><code>is-pulled-right</code></td>
  <td>Moves an element to the right</td>
  </tr>
  <tr>
  <th rowspan="2">Spacing</th>
  <td><code>is-marginless</code></td>
  <td>Removes any <strong>margin</strong></td>
  </tr>
  <tr>
  <td><code>is-paddingless</code></td>
  <td>Removes any <strong>padding</strong></td>
  </tr>
  <tr>
  <th rowspan="9">Other</th>
  <td><code>is-overlay</code></td>
  <td>Completely covers the first positioned parent</td>
  </tr>
  <tr>
  <td><code>is-clipped</code></td>
  <td>Adds overflow <strong>hidden</strong></td>
  </tr>
  <tr>
  <td><code>is-radiusless</code></td>
  <td>Removes any <strong>radius</strong></td>
  </tr>
  <tr>
  <td><code>is-shadowless</code></td>
  <td>Removes any <strong>shadow</strong></td>
  </tr>
  <tr>
  <td><code>is-unselectable</code></td>
  <td>Prevents the text from being <strong>selectable</strong></td>
  </tr>
  <tr>
  <td><code>is-invisible</code></td>
  <td>Adds visibility <strong>hidden</strong></td>
  </tr>
  <tr>
  <td><code>is-hidden</code></td>
  <td>Hides element</td>
  </tr>
  <tr>
  <td><code>is-sr-only</code></td>
  <td>Hide elements <strong>visually</strong> but keep the element available to be announced by a <strong>screen reader</strong></td>
  </tr>
  <tr>
  <td><code>is-relative</code></td>
  <td>Applies <code>position: relative</code> to the element.</td>
  </tr>
  </tbody>
  </table>

  </div>

  <br><hr><br>
  <br>
  <h2 class="subtitle">Responsive helpers <a target="_blank" href="https://bulma.io/documentation/modifiers/responsive-helpers/" class="is-pulled-right">📄</a> </h2>

  <div class="bd-content">    

  <div class="content">
  <p>
  You can use one of the following <code>display</code> classes:
  </p>
  <ul>
  <li><code>is-block</code></li>
  <li><code>is-flex</code></li>
  <li><code>is-inline</code></li>
  <li><code>is-inline-block</code></li>
  <li><code>is-inline-flex</code></li>
  </ul>
  <p>For example, here's how the <code>is-flex</code> helper works:</p>
  </div>
  <div class="container">
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
          <td class="is-narrow">
            <code>is-flex-mobile</code>
          </td>
          
<td class="is-narrow">
  <p class="notification is-primary">flex</p>
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
          <td class="is-narrow">
            <code>is-flex-tablet-only</code>
          </td>
          
<td class="is-narrow">
  <p class="notification">unchanged</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">flex</p>
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
          <td class="is-narrow">
            <code>is-flex-desktop-only</code>
          </td>
          
<td class="is-narrow">
  <p class="notification">unchanged</p>
</td>

          
<td class="is-narrow">
  <p class="notification">unchanged</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">flex</p>
</td>

          
<td class="is-narrow">
  <p class="notification">unchanged</p>
</td>

          
<td class="is-narrow">
  <p class="notification">unchanged</p>
</td>

        </tr>
        <tr>
          <td class="is-narrow">
            <code>is-flex-widescreen-only</code>
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
  <p class="notification is-primary">flex</p>
</td>

          
<td class="is-narrow">
  <p class="notification">unchanged</p>
</td>

        </tr>
        <tr>
          <th colspan="5">
            <p>Classes to display <strong>up to</strong> or <strong>from</strong> a specific breakpoint</p>
          </th>
        </tr>
        <tr>
          <td class="is-narrow">
            <code>is-flex-touch</code>
          </td>
          
<td class="is-narrow">
  <p class="notification is-primary">flex</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">flex</p>
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
          <td class="is-narrow">
            <code>is-flex-tablet</code>
          </td>
          
<td class="is-narrow">
  <p class="notification">unchanged</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">flex</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">flex</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">flex</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">flex</p>
</td>

        </tr>
        <tr>
          <td class="is-narrow">
            <code>is-flex-desktop</code>
          </td>
          
<td class="is-narrow">
  <p class="notification">unchanged</p>
</td>

          
<td class="is-narrow">
  <p class="notification">unchanged</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">flex</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">flex</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">flex</p>
</td>

        </tr>
        <tr>
          <td class="is-narrow">
            <code>is-flex-widescreen</code>
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
  <p class="notification is-primary">flex</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">flex</p>
</td>

        </tr>
        <tr>
          <td class="is-narrow">
            <code>is-flex-fullhd</code>
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

          
<td class="is-narrow">
  <p class="notification is-primary">flex</p>
</td>

        </tr>
      </tbody>
    </table>
  </div>
  <div class="content">
  <p>
    For the other display options, just replace <code>is-flex</code> with <code>is-block</code> <code>is-inline</code> <code>is-inline-block</code> or <code>is-inline-flex</code>
  </p>
</div>
</div>


<br><hr><br>
<br>
<h2 class="subtitle">Hide <a target="_blank" href="https://bulma.io/documentation/modifiers/responsive-helpers/#hide" class="is-pulled-right">📄</a> </h2>

<div class="container">
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
          <td class="is-narrow">
            <code>is-hidden-mobile</code>
          </td>
          
<td class="is-narrow">
  <p class="notification">hidden</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">visible</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">visible</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">visible</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">visible</p>
</td>

        </tr>
        <tr>
          <td class="is-narrow">
            <code>is-hidden-tablet-only</code>
          </td>
          
<td class="is-narrow">
  <p class="notification is-primary">visible</p>
</td>

          
<td class="is-narrow">
  <p class="notification">hidden</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">visible</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">visible</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">visible</p>
</td>

        </tr>
        <tr>
          <td class="is-narrow">
            <code>is-hidden-desktop-only</code>
          </td>
          
<td class="is-narrow">
  <p class="notification is-primary">visible</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">visible</p>
</td>

          
<td class="is-narrow">
  <p class="notification">hidden</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">visible</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">visible</p>
</td>

        </tr>
        <tr>
          <td class="is-narrow">
            <code>is-hidden-widescreen-only</code>
          </td>
          
<td class="is-narrow">
  <p class="notification is-primary">visible</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">visible</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">visible</p>
</td>

          
<td class="is-narrow">
  <p class="notification">hidden</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">visible</p>
</td>

        </tr>
        <tr>
          <th colspan="5">
            <p>Classes to hide <strong>up to</strong> or <strong>from</strong> a specific breakpoint</p>
          </th>
        </tr>
        <tr>
          <td class="is-narrow">
            <code>is-hidden-touch</code>
          </td>
          
<td class="is-narrow">
  <p class="notification">hidden</p>
</td>

          
<td class="is-narrow">
  <p class="notification">hidden</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">visible</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">visible</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">visible</p>
</td>

        </tr>
        <tr>
          <td class="is-narrow">
            <code>is-hidden-tablet</code>
          </td>
          
<td class="is-narrow">
  <p class="notification is-primary">visible</p>
</td>

          
<td class="is-narrow">
  <p class="notification">hidden</p>
</td>

          
<td class="is-narrow">
  <p class="notification">hidden</p>
</td>

          
<td class="is-narrow">
  <p class="notification">hidden</p>
</td>

          
<td class="is-narrow">
  <p class="notification">hidden</p>
</td>

        </tr>
        <tr>
          <td class="is-narrow">
            <code>is-hidden-desktop</code>
          </td>
          
<td class="is-narrow">
  <p class="notification is-primary">visible</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">visible</p>
</td>

          
<td class="is-narrow">
  <p class="notification">hidden</p>
</td>

          
<td class="is-narrow">
  <p class="notification">hidden</p>
</td>

          
<td class="is-narrow">
  <p class="notification">hidden</p>
</td>

        </tr>
        <tr>
          <td class="is-narrow">
            <code>is-hidden-widescreen</code>
          </td>
          
<td class="is-narrow">
  <p class="notification is-primary">visible</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">visible</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">visible</p>
</td>

          
<td class="is-narrow">
  <p class="notification">hidden</p>
</td>

          
<td class="is-narrow">
  <p class="notification">hidden</p>
</td>

        </tr>
        <tr>
          <td class="is-narrow">
            <code>is-hidden-fullhd</code>
          </td>
          
<td class="is-narrow">
  <p class="notification is-primary">visible</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">visible</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">visible</p>
</td>

          
<td class="is-narrow">
  <p class="notification is-primary">visible</p>
</td>

          
<td class="is-narrow">
  <p class="notification">hidden</p>
</td>

        </tr>
      </tbody>
    </table>
  </div>
</div>

  </div>
</section>`)
