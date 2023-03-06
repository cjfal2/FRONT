<template>
  <div>
    <hr>
    <div v-for="(video, index) in videos" :key="index">
      <VideoListItem
        :video="video"
        @go-to-detail="goToDetail"
      />
    </div>
  </div>
</template>

<script>
import VideoListItem from "@/components/VideoListItem"
export default {
  name:"VideoList",
  components: {
    VideoListItem,
  },
  props: {
    videos: Array,
  },
  methods: {
    goToDetail(needDetail) {
      console.log(needDetail)
      this.$emit("go-to-detail", needDetail)
    }
  }
}
</script>

<style>

</style>