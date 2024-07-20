// import { createApp, App } from 'vue'
// import LeftToolbar from './left-toolbar.view.vue'
// import { Plugin } from '@textbus/core'
// import { VIEW_CONTAINER } from '@textbus/platform-browser'

// export class LeftToolbarPlugin implements Plugin {
//   private app: App|null = null
//   setup (injector) {
//     console.log('ghj')
//     this.app = createApp(LeftToolbar)
//     const viewDocument = injector.get(VIEW_CONTAINER)
//     const host = document.createElement('div')
//     viewDocument.appendChild(host)
//     console.log(host)
//     this.app.mount(host)
//   }

//   onDestroy () {
//     if (this.app) {
//       this.app?.unmount()
//       this.app = null
//     }
//   }
// }
