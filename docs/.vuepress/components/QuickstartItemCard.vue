<template>
  <RouterLink class="tech-item" :to="qsPath">
    <a>
      <img
        class="tech-icon"
        :src="require(`../theme/assets/${ techIconPath }`)"
        width="100"
        height="100"
      />
    </a>
    <p class="tech-name" v-text="techName"></p>
  </RouterLink>
</template>

<script>
export default {
  name: "QuickstartItemCard",
  methods: {
    navigate(url) {
      void this.$router.push(url);
    },
  },
  props: {
    techIconPath: String,
    techName: String,
    qsPath: String
  },
};
</script>

<style src="../theme/styles/components/quickstartOverview.styl" lang="stylus"/>