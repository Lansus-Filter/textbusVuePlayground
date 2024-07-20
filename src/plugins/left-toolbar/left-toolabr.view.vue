<!-- <template>
  <div>dfsgvfd</div>
</template>

<script lang="ts">
export class LeftToolbar implements Plugin {
  private app: App|null = null
  setup (injector) {
    console.log('ghj')
    this.app = createApp(LeftToolbar)
    const viewDocument = injector.get(VIEW_CONTAINER)
    const host = document.createElement('div')
    viewDocument.appendChild(host)
    console.log(host)
    this.app.mount(host)
  }

  onDestroy () {
    if (this.app) {
      this.app?.unmount()
      this.app = null
    }
  }
}


</script> -->