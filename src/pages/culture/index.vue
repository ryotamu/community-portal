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
