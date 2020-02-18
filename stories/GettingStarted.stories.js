
export default {
  title: 'Getting Started',
  parameters: { notes: 'setup getting started installation contribution workflow' }
}

const aboutTemplate = `<section class="storybook-container content">
    <h1 class="title">shield-engage styleguide</h1><br>
    
    <p>Our digital design system is used to unify the design language across all team members, from designers to backend developers. Using <a target="_blank" href="https://bulma.io/">Bulma</a> and <a target="_blank" href="https://buefy.org/">Buefy</a> as a foundation, our design system consists of working code in the following structure:</p>
    <ul>
        <li>Design guidelines</li>
        <li>Core component library</li>
        <li>Custom componenents</li>
    </ul>
    <br>

    <hr>

    <h2>Storybook setup</h2><br>
    <p>Storybook config in <code>.storybook</code> folder</p>
    <p>Storybook pages in <code>stories</code> folder</p>

    <h3>Installation steps</h3>
    <code>npm run storybook</code>

    <hr>


    <h2>Contribution guidelines</h2><br>
    <p>Each component must have:</p>
    <ul>
      <li><code>knobs</code> control for all props</li>
      <li><code>actions</code> logger for all events</li>
      <li><code>tests</code> 80& test coverage</li>
      <li><code>notes</code> with usage instructions and commons gotchas</li>
    </ul>

</section>`

export const About = () => ({
  template: aboutTemplate,
  options: { showPanel: false }
})

const developerWorkflowTemplate = `<section class="storybook-container content">
    <h1 class="title">👨‍💻 Developer Workflow</h1>
    <h2 class="subtitle">Build pixel-perfect components in minutes!</h2>
    <p>You get a design for a new component. It's pretty complex and you need to implement it by tommorow. What can you do to build it faster and in a more maintainable way?</p>
    <ol>
        <li>Check if anybody already implemented the same component. Use the search 🔍</li>
        <li>After you are sure there is nothing similar already implemented, create your component in the <code>components</code> folder. As you build it, remember other people will use it so make it as developer friendly as possible.</li>
        <li>Create a story for your component in the <code>stories</code> folder. Remember to document all points from the contribution guide (knobs, actions, tests, docs) or your PR won't get accepted.</li>
    </ol>
</section>`

export const DeveloperWorkflow = () => ({
  template: developerWorkflowTemplate,
  options: { showPanel: false }
})

const designerWorkflowTemplate = `<section class="storybook-container content">
    <h1 class="title">👨‍🎨 Designer Workflow</h1>
    <h2 class="subtitle">Design pixel-perfect components in minutes!</h2>
    <p>You need to create the a design for a new component. It's pretty complex and you need to deliver it by tommorow. What can you do to build it faster and in a more consistent way?</p>
    <ol>
        <li>....</li>    
    </ol>
</section>`

export const DesignerWorkflow = () => ({
  template: designerWorkflowTemplate,
  options: { showPanel: false }
})
