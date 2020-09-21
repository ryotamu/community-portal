<template lang="pug">
  div
    div.ml-3
      nuxt-link(:to="'/clubs/'")
        p 一覧 >
    div
      b-card
        h2.post-title.font-weight-bold
          | コミュニティはどんな場所？
        p.post-title ①
        img.mx-auto(
          src="~/static/culture1.png"
          style="height:200px"
        )
        div.border-bottom

        p.post-title ②
        img.mx-auto(
          src="~/static/culture2.png"
          style="height:200px"
        )
        div.border-bottom

        p.post-title ③
        img.mx-auto(
          src="~/static/culture3.png"
          style="height:200px"
        )
    div.ml-3
      nuxt-link(:to="'/clubs/'")
        p 一覧 >

</template>

<script lang="ts">
</script>

<style>
.post-title {
  color: #5f5f5f;
}
</style>
