import { App } from 'vue'
import { setupTailWindCss } from './tailwindcss'

export function setupPlugins(app: App) {
  setupTailWindCss()
}
