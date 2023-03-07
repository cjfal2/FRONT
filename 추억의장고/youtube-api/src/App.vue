<template>
  <div id="app">
    <img alt="you logo" src="./assets/you.png" style="width:15rem; height: 3rem;" class="my-3"/><br>
    <TheSearchBar
      @get-video="getVideo"
    />
    <div class="container">
      <div class="row">
        <VideoDetail
          :detail="detail"
          class="col"
        />
        <VideoList
          :videos="videos"
          @go-to-detail="goToDetail"
          class="col"
          style="width:10rem;"
        />
      </div>
    </div>
    <!-- <iframe :src="" frameborder="0"></iframe> -->
  </div>
</template>

<script>
import axios from "axios"
import VideoList from "@/components/VideoList"
import VideoDetail from "@/components/VideoDetail"
import TheSearchBar from "@/components/TheSearchBar"

export default {
  name: 'App',
  components: {
    VideoList,
    VideoDetail,
    TheSearchBar,
  },
  data() {
    return {
      videos: [],
      detail: {},
    }
  },
  methods: {
    getVideo(videoQuery) {
      const baseURL = "https://www.googleapis.com/youtube/v3/search";
      const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY;
      console.log(API_KEY)
      axios
        .get(baseURL, {
          params: {
            key: API_KEY,
            part: 'snippet',
            q: videoQuery,
            maxResult: 5,
            type: 'video',
            videoDuration: 'long'
          }
        })
        .then(response => {
          console.log(response)
          this.videos = response.data.items
        });
    },
    goToDetail(needDetail) {
      console.log("asdfasdfasdfasdf")
      console.log(needDetail)
      this.detail = needDetail
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
