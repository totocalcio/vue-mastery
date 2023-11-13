import { createApp } from 'vue'
import App from './App.vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const app = createApp(App)

const requireComponent = import.meta.glob('./components/Base[A-Z]*.{vue,js}')
for (const path in requireComponent) {
  requireComponent[path]().then((mod: any) => {
    const fileName = path.replace('./components/', '')
    const componentName = upperFirst(camelCase(fileName.replace(/^\.\/(.*)\.\w+$/, '$1')))
    app.component(componentName, mod.default)
  })
}

app.mount('#app')
