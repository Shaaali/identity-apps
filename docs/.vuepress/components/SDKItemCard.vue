<template>
    <div class="tech-item">
        <a class="icon-container">
        <img class="tech-icon" :src="require(`../theme/assets/${ techIconPath }`)" width="100" height="100"/>
        </a>
        <p class="tech-name" v-text="techName"></p>
        <div class="tech-links">
        <a class="tech-link" @click="navigate(sdkPath)">
            <i class="fas fa-file-alt"></i>
            SDK
        </a>
        <a class="tech-link" :href="gitUrl" target="_blank">
            <i class="fab fa-github"></i>
            Github
        </a>
        <a class="tech-link" :href="appUrl" target="_blank">
            <i class="fas fa-download"></i>
            Sample App
        </a>
        </div>
    </div>
</template>

<script>
import MyTransition from "@theme/components/MyTransition.vue";
export default {
  name: 'SDKItemCard',
  components: { MyTransition },
  methods: {
    navigate(url) {
      void this.$router.push(url);
    }
  },
  props: {
      techIconPath: String,
      techName: String,
      sdkPath: String,
      gitUrl: String,
      appUrl: String
  }
}
</script>

<style src="../theme/styles/components/sdkOverview.styl" lang="stylus"/>
