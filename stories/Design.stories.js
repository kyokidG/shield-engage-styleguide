import { cssSyntaxTemplate } from './design/cssSyntaxTemplate'
import { typographyTemplate } from './design/typographyTemplate'
import { colorsTemplate } from './design/colorsTemplate'
import { helpersTemplate } from './design/helpersTemplate'

export default {
  title: 'Design'
}

export const CSSSyntax = () => ({
  template: cssSyntaxTemplate,
  options: { showPanel: false }
})

export const Colors = () => ({
  template: colorsTemplate,
  options: { showPanel: false }
})

export const Typography = () => ({
  template: typographyTemplate,
  options: { showPanel: false }
})

export const Helpers = () => ({
  template: helpersTemplate,
  options: { showPanel: false }
})
