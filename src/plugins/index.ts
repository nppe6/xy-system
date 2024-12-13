import { App } from 'vue'
import { setupTailWindCss } from './tailwindcss'
import _ from 'lodash'

export function setupPlugins(app: App) {
  autoRegisterComponent(app)
  setupTailWindCss()
}

export function autoRegisterComponent(app: App) {
  const components = import.meta.glob('@/components/form/*.vue', {
    eager: true,
    import: 'default'
  })

  Object.keys(components).forEach((key) => {
    const name = key.split('/').pop()?.split('.').shift()

    app.component(_.camelCase(name), components[key] || {})
  })
}
