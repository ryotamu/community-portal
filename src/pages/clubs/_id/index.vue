<template lang="pug">
  div
    div.ml-3
      nuxt-link(:to="'/clubs/'")
        p 一覧 >
    b-card.bg-white.mx-2.post-title
      h2.font-weight-bold {{ item.name }}
      div.border-bottom
      br
      h3.font-weight-bold 部活紹介！！
      p(
        v-html="item.introduction"
      )
    div.ml-3
      nuxt-link(:to="'/clubs/'")
        p 一覧 >
</template>

<script lang="ts">
import axios from 'axios'

export default {
  async asyncData({
    $config: { apiKey, clubsEndpoint },
    params,
  }: {
    $config: any
    params: any
  }) {
    const { data } = await axios.get(`${clubsEndpoint}/${params.id}`, {
      headers: { 'X-API-KEY': apiKey },
    })
    return {
      item: data,
    }
  },
  data() {
    return {
      item: {},
    }
  },
}
</script>

<style>
.post-title {
  color: #5f5f5f;
}
</style>
