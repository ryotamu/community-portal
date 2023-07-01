<template>
  <div>
    <div class="ml-3">
      <nuxt-link :to="'/parent-posts/'">
        <p>一覧 ></p>
      </nuxt-link>
    </div>
    <b-card class="mx-2">
      <h2 class="post-title font-weight-bold mb-2">Discordでイベントを確認しよう！</h2>
      <p>
      
        （１）Discordのメニューのいちばん上にあるイベントのところをタップ！
      </p>
      <img class="mx-auto" src="~/static/event1.png" style="height:300px">
      <div class="border-bottom">
      <p>

        （２）スクロールして、気になるイベントは「興味あり」をおしてね！
      </p>
      <img class="mx-auto" src="~/static/event2.png" style="height:300px">
      <div class="border-bottom">
      <p>

        （３）イベントがはじまる時に通知がきます！
      </p>
      <img class="mx-auto" src="~/static/event3.png" style="height:300px">
      <p>
        （４）時間になったら、集合場所(⁠イベント部屋1 など)のボイスチャンネルに入ってね！
      </p>
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
