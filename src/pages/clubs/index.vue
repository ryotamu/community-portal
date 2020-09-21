<template lang="pug">
  div
    b-list-group.mx-2.mb-2
      nuxt-link(:to="'/culture/'")
        b-list-group-item.d-flex.post-title.font-weight-bold
          | コミュニティはどんな場所？
          div(
            style="margin-left: auto"
          )
            | ＞
      nuxt-link(:to="'/channel/'")
        b-list-group-item.d-flex.post-title.font-weight-bold
          | チャンネルの説明
          div(
            style="margin-left: auto"
          )
            | ＞

    h2.ml-3.font-weight-bold
      | 部活一覧
    div(v-for="item in items")
      b-card
        nuxt-link(:to="'/clubs/' + item.id + '/'")
          div
            h3.d-flex.post-title.font-weight-bold
              div
                  | {{ item.name }}
              div(
                style="margin-left: auto"
              )
                | ＞
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
    // formatDate(date: string): string {
    //   return date.substr(0, 10);
    // },
  },
  async asyncData({ $config: { apiKey, clubsEndpoint } }: { $config: any }) {
    const { data } = await axios.get(clubsEndpoint, {
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
