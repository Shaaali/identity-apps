<template>
  <RouterLink class="idp-item" :to="idpPath">
    <a>
      <img
        class="idp-icon"
        :src="require(`../theme/assets/${ idpIconPath }`)"
        width="100"
        height="100"
      />
    </a>
    <p class="idp-name" v-text="idpName"></p>
  </RouterLink>
</template>

<script>
export default {
  name: "IDPItemCard",
  methods: {
    navigate(url) {
      void this.$router.push(url);
    },
  },
  props: {
    idpIconPath: String,
    idpName: String,
    idpPath: String
  },
};
</script>

<style src="../theme/styles/components/socialLoginOverview.styl" lang="stylus"/>

