<template lang="pug">
  #wrapper
    div.sticky-top.header.d-flex.align-items-center.mb-3
      img.ml-2(
        src="~/static/logo.png"
        style="height:42px;"
      )
      h1.font-weight-bold.pl-2.pt-2
        | コミュニティ
    nuxt.mx-auto.pb-4(style="max-width:800px")
</template>

<style lang="scss">
#wrapper {
  background-color: #e0dede;
  margin: 0 auto;
  min-height: 100vh;
  position: relative;
  font-family: 'Noto Sans JP', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
}
.header {
  background-color: #f5ad57;
  color: #fafafa;
}
</style>
