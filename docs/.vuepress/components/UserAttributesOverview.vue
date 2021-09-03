<template>
  <!-- This component reads from docs/guides/applications/user-attributes/README.md and generates UI components dynamically. -->
  <main class="user-attributes-page">
    <MyTransition :delay="0.01">
        <header class="title-container">
          <h1 v-text="$frontmatter.heading"></h1>
          <p class="description" v-text="$frontmatter.subHeading"></p>
        </header>
    </MyTransition>
    <MyTransition :delay="0.01">
      <transition-group class="idp-container" name="cardAnim" mode="out-in">
        <IDPItemCard
          v-for="idp in getUserAttributes"
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
  name: "UserAttributesOverview",
  components: { MyTransition, IDPItemCard },
  computed: {
    getUserAttributes() {
      const { userAttributes } = this.$frontmatter;
      if (Array.isArray(userAttributes)) return userAttributes;
      return [userAttributes];
    },
  },
};
</script>

<style src="../theme/styles/components/userAttributes.styl" lang="stylus"/>

