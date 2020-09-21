<template lang="pug">
  div
    div.ml-3
      nuxt-link(:to="'/clubs/'")
        p 一覧 >
    div
      b-card
        h2.post-title.font-weight-bold.mb-2
          | チャンネルの説明
        h3.post-title.font-weight-bold ・「branchからのお知らせ」
        p 部活のイベントのお知らせをしたりするよ！ぜひ確認してね！
        div.border-bottom
        br
        br

        h3.post-title.font-weight-bold ・「こどもたちの雑談」
        p すきなものの紹介や、みんなへ質問など、なにをしてもいいよ！すきなことを教えてくれるのを待ってます！
        div.border-bottom
        br
        br

        h3.post-title.font-weight-bold ・「おひろめ場」
        p つくったもの、やってること、なにかの写真を上げてね！楽しみにしてます！
    div.ml-3
      nuxt-link(:to="'/clubs/'")
        p 一覧 >

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
