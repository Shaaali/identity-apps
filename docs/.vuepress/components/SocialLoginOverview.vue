<template>
  <!-- This component reads from docs/guides/identity-providers/social-login/README.md and generates UI components dynamically. -->
  <main class="social-login-page">
    <MyTransition :delay="0.3">
        <header class="title-container">
          <h1 v-text="$frontmatter.heading"></h1>
          <p class="description" v-text="$frontmatter.subHeading"></p>
        </header>
    </MyTransition>
    <MyTransition :delay="0.3">
      <transition-group class="idp-container" name="cardAnim" mode="out-in">
        <IDPItemCard
          v-for="idp in getSocialIdps"
          :key="idp.name"
          :idpIconPath="idp.icon"
          :idpName="idp.name"
          :idpPath="idp.path"
          :class="idp.customClass"
        ></IDPItemCard>
      </transition-group>
    </MyTransition>
  </main>
</template>

<script>
import MyTransition from "@theme/components/MyTransition.vue";
import IDPItemCard from "./IDPItemCard.vue";
export default {
  name: "SocialLoginOverview",
  components: { MyTransition, IDPItemCard },
  computed: {
    getSocialIdps() {
      const { scIdps } = this.$frontmatter;
      if (Array.isArray(scIdps)) return scIdps;
      return [scIdps];
    },
  },
};
</script>

<style src="../theme/styles/components/socialLoginOverview.styl" lang="stylus"/>

