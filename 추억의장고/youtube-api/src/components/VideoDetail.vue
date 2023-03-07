<template>
  <div>
    <iframe :src="urldetail" frameborder="0" style="width:40rem; height: 30rem;"></iframe>
  </div>  
</template>

<script>
export default {
  name: "VideoDetail",
  props: {
    detail: Object,
  },
  computed: {
    urldetail: function() {
      const urlD = `https://www.youtube.com/embed/${this.detail.videoid}`
      return urlD
    }
  }
}
</script>

<style>

</style>