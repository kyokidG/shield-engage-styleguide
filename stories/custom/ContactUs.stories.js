import ContactUs from '../../components/ContactUs'
import { Template } from '../TemplateClass'

const TEMPLATE = new Template({
  originalUrl: '',
  header: 'Contact Us',
  progress: 100,
  template: '<contact-us extraClass="action" />',
  size: 'large'
}).getTemplate()

export default {
  title: 'Custom'
}

export const ContactUsComponent = () => ({
  template: TEMPLATE,
  components: { ContactUs }
})
