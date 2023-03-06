<template>
  <div 
    class="container d-flex m-2"
  >
    <img :src="video.snippet.thumbnails.default.url" alt="x" @click="goToDetail">
    <p>{{ video.snippet.title }}</p>
  </div>
</template>

<script>
export default {
  name:"VideoListItem",
  props: {
    video: Object,
  },
  computed: {
    needingDetail: function() {
      const needDetail = {
      "title": this.video.snippet.title,
      "videoid": this.video.id.videoId,
      "description": this.video.snippet.description
      }
      return needDetail
    }
  },
  methods: {
    goToDetail() {
      console.log("asdfasdf")
      this.$emit("go-to-detail", this.needingDetail)
    }
  }
}
</script>

<style>

</style>