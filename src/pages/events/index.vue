<template>
  <div>
    <div class="ml-3">
      <nuxt-link :to="'/clubs/'">
        <p>一覧 ></p>
      </nuxt-link>
    </div>
    <b-card class="mx-2" style="height: 1500px;">
      <h2 class="post-title font-weight-bold mb-2">イベントカレンダー</h2>
      <div class="d-flex justify-content-center">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=450&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=Asia%2FTokyo&amp;src=Y185cGFsMjZzYzRoZ3JkbjJnYm10YzNqOWdzZ0Bncm91cC5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23EF6C00&amp;showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showDate=0&amp;showTabs=0&amp;showCalendars=0&amp;showTz=0&amp;mode=AGENDA"
          style="border-width: 0;"
          width="600"
          height="400"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
    </b-card>
    <div class="ml-3">
      <nuxt-link :to="'/clubs/'">
        <p>一覧 ></p>
      </nuxt-link>
    </div>
  </div>
</template>
<script lang="ts"></script>
<style>
.post-title {
  color: #5f5f5f;
}
</style>
