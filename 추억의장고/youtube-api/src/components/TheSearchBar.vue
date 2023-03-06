<template>
  <div>
    <input @keyup.enter="getVideo" type="text" v-model="videoQuery" class="mx-1 my-3 border border-primary rounded-2" style="width:25rem"/>
    <button @click="getVideo" class="btn btn-primary btn-sm">검색</button>
  </div>
</template>

<script>
export default {
  name:"TheSearchBar",
  data() {
    return {
      videoQuery: ""
    }
  },
  methods: {
    getVideo() {
      if (this.videoQuery.trim()) {
        this.$emit("get-video", this.videoQuery)
        this.videoQuery = null
      } else {
        alert("검색어를 입력하세요!")
      }
    }
  }
}
</script>

<style>

</style>