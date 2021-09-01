<template>
  <!-- This component reads from docs/guides/applications/spa/README.md and generates UI components dynamically. -->
  <main class="register-apps-page">
    <MyTransition :delay="0.01">
        <header class="title-container">
          <h1 v-text="$frontmatter.heading"></h1>
          <p class="description" v-text="$frontmatter.subHeading"></p>
        </header>
    </MyTransition>
    <MyTransition :delay="0.01">
      <transition-group class="idp-container" name="cardAnim" mode="out-in">
        <IDPItemCard
          v-for="idp in getRegisterApps"
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
  name: "RegisterAppsOverview",
  components: { MyTransition, IDPItemCard },
  computed: {
    getRegisterApps() {
      const { registerApps } = this.$frontmatter;
      if (Array.isArray(registerApps)) return registerApps;
      return [registerApps];
    },
  },
};
</script>

<style src="../theme/styles/components/registerAppsOverview.styl" lang="stylus"/>

