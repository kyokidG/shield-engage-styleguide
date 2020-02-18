import Vue from 'vue'
import wysiwyg from 'vue-wysiwyg'

const wysiwygConfig = {
  hideModules: { image: true },
  maxHeight: '500px',
  forcePlainTextOnPaste: true
}

Vue.use(wysiwyg, wysiwygConfig)

// for sanitizing user data on frontend, we use https://www.npmjs.com/package/sanitize-html
export const SANITIZE_DEFAULTS = {
  allowedTags: [
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'blockquote',
    'p',
    'a',
    'ul',
    'ol',
    'nl',
    'li',
    'b',
    'i',
    'u',
    'strong',
    'em',
    'strike',
    'code',
    'hr',
    'br',
    'div',
    'table',
    'thead',
    'caption',
    'tbody',
    'tr',
    'th',
    'td',
    'pre'
  ],
  disallowedTagsMode: 'discard',
  allowedAttributes: {
    a: ['href', 'name', 'target'],
    img: ['src'],
    '*': ['style']
  },
  // Lots of these won't come up by default because we don't allow them
  selfClosing: [
    'img',
    'br',
    'hr',
    'area',
    'base',
    'basefont',
    'input',
    'link',
    'meta'
  ],
  // URL schemes we permit
  allowedSchemesByTag: {},
  allowedSchemesAppliedToAttributes: ['href', 'src', 'cite'],
  allowProtocolRelative: true
}

export default {}
