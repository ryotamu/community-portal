<template lang="pug">
  div
    b-list-group.mx-2.mb-2
      nuxt-link(:to="'/parent-events/'")
        b-list-group-item.d-flex.post-title.font-weight-bold
          | 保護者向けイベントのカレンダーはこちら！
          div(
            style="margin-left: auto"
          )
            | ＞

    h2.ml-3.font-weight-bold
      | 記事一覧
    div(v-for="item in items")
      b-card.m-2
        nuxt-link(:to="'/parent-posts/' + item.id + '/'")
          h2.post-title.font-weight-bold
            | {{ item.title }}
        div.d-flex
          div(v-for="tag in item.tags")
            b-button.mr-1(variant="outline-secondary" disabled)
              | {{ tag.name }}
        h4.post-sub-color.m-0.text-right
          i.far.fa-clock
          |  {{ formatDate(item.updatedAt) }}
</template>

<script lang="ts">
import axios from 'axios'

export default {
  data() {
    return {
      items: [],
    }
  },
  methods: {
    formatDate(date: string): string {
      return date.substr(0, 10)
    },
  },
  async asyncData({ $config: { apiKey, postsEndpoint } }: { $config: any }) {
    const { data } = await axios.get(postsEndpoint + '?limit=50', {
      headers: { 'X-API-KEY': apiKey },
    })
    return {
      items: data.contents,
    }
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
