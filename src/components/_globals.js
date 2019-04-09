import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const requiredComponents = require.context(
  './base', true, /Base[\w-]+\.vue$/
)

requiredComponents.keys().forEach(fileName => {
  // Get component config
  const componentConfig = requiredComponents(fileName)

  // Get each file name remove beginning slash and ending extension and replace camel case with dashes
  const componentName = upperFirst(
    camelCase(
      fileName
        .replace('.vue', '')
        .replace(/^.*[\\/]/, '')
    )
  )
  // Register the component
  Vue.component(componentName, componentConfig.default || componentConfig)
})
