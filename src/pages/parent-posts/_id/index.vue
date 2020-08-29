<template lang="pug">
  div
    div.ml-3
      nuxt-link(:to="'/parent-posts/'")
        p 記事一覧 >
    b-card.bg-white.mx-2.post-title
      h1.font-weight-bold {{ item.title }}
      p.post-sub-color
        i.far.fa-clock
        |{{ formatDate(item.publishedAt) }}
      p ーーーーーーーー
      br
      p(
        v-html="item.body"
      )
    div.ml-3
      nuxt-link(:to="'/parent-posts/'")
        p 記事一覧 >
</template>

<script lang="ts">
import axios from 'axios'

export default {
  async asyncData({
    $config: { apiKey, postsEndpoint },
    params,
  }: {
    $config: any
    params: any
  }) {
    const { data } = await axios.get(`${postsEndpoint}/${params.id}`, {
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
  methods: {
    formatDate(date: string): string {
      return date.substr(0, 10)
    },
  },
}
</script>

<style>
.post-title {
  color: #5f5f5f;
}

.post-sub-color {
  color: #9a7b5c;
}
</style>
