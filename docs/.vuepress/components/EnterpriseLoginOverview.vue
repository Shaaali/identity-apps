<template>
  <!-- This component reads from docs/guides/identity-providers/enterprise-login/README.md and generates UI components dynamically. -->
  <main class="enterprise-login-page">
    <MyTransition :delay="0.01">
        <header class="title-container">
          <h1 v-text="$frontmatter.heading"></h1>
          <p class="description" v-text="$frontmatter.subHeading"></p>
        </header>
    </MyTransition>
    <MyTransition :delay="0.01">
      <transition-group class="idp-container" name="cardAnim" mode="out-in">
        <IDPItemCard
          v-for="idp in getEnterpriseIdps"
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
  name: "EnterpriseLoginOverview",
  components: { MyTransition, IDPItemCard },
  computed: {
    getEnterpriseIdps() {
      const { enterpriseIDPs } = this.$frontmatter;
      if (Array.isArray(enterpriseIDPs)) return enterpriseIDPs;
      return [enterpriseIDPs];
    },
  },
};
</script>

<style src="../theme/styles/components/enterpriseLoginOverview.styl" lang="stylus"/>

