<template lang="pug">
  div
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
          |  {{ formatDate(item.publishedAt) }}
</template>

<script lang="ts">
import axios from 'axios';

export default {
  data() {
    return {
      items: [],
    }
  },
  methods: {
    formatDate(date: string): string {
      return date.substr(0, 10);
    },
  },
  async asyncData({ $config: { apiKey, postsEndpoint } }: { $config: any }) {
    const { data } = await axios.get(postsEndpoint, {
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
