export class Template {
  constructor ({ headerType = 'h1', size, columns = null, rows = null, header, originalUrl = '', template, description = '', progress = null }) {
    this.header = header
    this.headerType = headerType
    this.columns = columns
    this.rows = rows
    this.originalURL = originalUrl
    this.template = template
    this.size = size
    this.progress = progress
    this.description = description
    this.isSourceCodeVisible = false
    this.id = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(2, 10)

    setInterval(() => {
      const container = document.getElementById(`copy-code-container-${this.id}`)
      const icon = document.getElementById('copy-code')

      if (container && icon) {
        if (container.classList.contains('code-on') && icon.classList.contains('clicked')) {
          container.classList.remove('code-on')
          icon.classList.remove('clicked')
        }
        setTimeout(() => {
          if (icon.classList.contains('clicked')) {
            if (document.getElementById(`copy-code-source-${this.id}`)) {
              document.getElementById(`copy-code-source-${this.id}`).value = this.template
            }
            this.toggleSourceCoude()
            icon.classList.remove('clicked')
          }
        }, 0)
      }
    }, 100)
  }

  toggleSourceCoude () {
    const container = document.getElementById(`copy-code-container-${this.id}`)
    if (container) {
      container.classList.add('code-on')
    }
  }

  getActions (index) {
    return this.getStatus() + this.getOriginalLink(index) + this.getSourceToggle(index)
  }

  getSourceToggle (index) {
    let originalURL = ''
    if (index) {
      originalURL = this.originalURL[index]
    } else {
      originalURL = this.originalURL
    }
    if (originalURL.length > 0) {
      return (`
        <b-tooltip label="See source code" type="is-light" position="is-bottom" class="is-pulled-right">
          <button type="button" class="button small is-primary is-inverted" id="copy-code" onclick="this.classList.toggle('clicked')">
          </button>
        </b-tooltip>
      `)
    } else {
      return ''
    }
  }

  getOriginalLink (index) {
    let originalURL = ''
    if (index) {
      originalURL = this.originalURL[index]
    } else {
      originalURL = this.originalURL
    }
    if (originalURL.length > 0) {
      return (`
        <b-tooltip label="See original docs" type="is-light" position="is-bottom" class="is-pulled-right">
          <a href="${originalURL}" target="_blank">
          <button type="button" class="button small is-primary is-inverted">
          📄
          </button>
          </a>
        </b-tooltip>
      `)
    } else {
      return ''
    }
  }

  getStatus (index) {
    let progress = 0
    if (index) {
      progress = this.progress[index]
    } else {
      progress = this.progress
    }
    if (progress) {
      if (progress < 50) {
        return (`<b-tooltip label="DO NOT USE! \n Current progress: ${progress}" type="is-danger" :multiline="true" class="ml5" position="is-right"><b-icon icon="delete" size="is-small" type="is-danger" class="mr1"></b-icon></b-tooltip>`)
      } else if (progress >= 50 && progress <= 95) {
        return (`<b-tooltip label="Component is under development ... \n Current progress: ${progress}" class="ml5" :multiline="true"type="is-light" position="is-right"><b-icon icon="hammer" size="is-small" type="is-dark" class="mr1"></b-icon></b-tooltip>`)
      } else if (progress > 95) {
        return ('<b-tooltip label="Component ready to be used!" class="ml5" type="is-primary" position="is-right"><b-icon icon="check" size="is-small" type="is-success" class="mr1"></b-icon></b-tooltip>')
      }
    } else { return '' }
  }

  getMultipleRowsTemplate () {
    let template = `<section class="storybook-container ${this.size}"><div class="rows">`
    for (let i = 0; i < this.rows; i++) {
      template = template + `<div class="row copy-code-container" id="copy-code-container-${this.id}">
                              <${this.headerType} class="title">${this.header[i] + this.getActions(i)}</${this.headerType}>
                              <h3>${this.description}</h3>
                              <div class="template">${this.template}</div>
                              <textarea readonly class="source-code" id='copy-code-source-${this.id}'></textarea>
                            </div>`
    }
    template = template + '</div></section>'
    return template
  }

  getMultipleColumnsTemplate () {
    let template = `<section class="storybook-container ${this.size}"><div class="columns">`
    for (let i = 0; i < this.columns; i++) {
      template = template + `<div class="column copy-code-container" id="copy-code-container-${this.id}">
                              <${this.headerType} class="title">${this.header[i] + this.getActions(i)}</${this.headerType}>
                              <h3>${this.description}</h3>
                              <div class="template">${this.template}</div>
                              <textarea class="source-code" id='copy-code-source-${this.id}'></textarea>
                            </div>`
    }
    template = template + '</div></section>'
    return template
  }

  getTemplate () {
    if (this.rows > 1) {
      return this.getMultipleRowsTemplate()
    } else if (this.columns > 1) {
      return this.getMultipleColumnsTemplate()
    } else {
      return (`<section class="storybook-container copy-code-container ${this.size}" id="copy-code-container-${this.id}">
                <${this.headerType} class="title">${this.header + this.getActions()}</${this.headerType}>
                <h3>${this.description}</h3>
                <div class="template">${this.template}</div>
                <textarea readonly class="source-code" id='copy-code-source-${this.id}'></textarea>
              </section>`)
    }
  }
}
