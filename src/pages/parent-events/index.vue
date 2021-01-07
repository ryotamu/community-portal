<template>
  <div>
    <div class="ml-3">
      <nuxt-link :to="'/parent-posts/'">
        <p>一覧 ></p>
      </nuxt-link>
    </div>
    <b-card class="mx-2">
      <h2 class="post-title font-weight-bold mb-2">保護者イベント</h2>
      <div class="d-flex justify-content-center">
        <iframe
          src="https://calendar.google.com/calendar/embed?height=400&amp;wkst=1&amp;bgcolor=%2333B679&amp;ctz=Asia%2FTokyo&amp;src=aHNldW1wN283cWdra3NzbTEzbjVyZGhoaHNAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%23B39DDB&amp;showTitle=0&amp;showNav=0&amp;showDate=0&amp;showTz=0&amp;mode=AGENDA&amp;showCalendars=1&amp;showTabs=0&amp;showPrint=0"
          style="border-width: 0;"
          width="600"
          height="400"
          frameborder="0"
          scrolling="no"
        ></iframe>
      </div>
    </b-card>
    <div class="ml-3">
      <nuxt-link :to="'/parent-posts/'">
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
