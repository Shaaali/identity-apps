<template>
  <!-- This component reads from docs/quickstarts/README.md and generates UI components dynamically. -->
  <main class="quickstarts-page" ref="qsPage">
    <MyTransition :delay="0.01">
        <header class="title-container">
          <h2 v-text="$frontmatter.heading"></h2>
          <p class="description" v-text="$frontmatter.subHeading"></p>
        </header>
    </MyTransition>
    <MyTransition :delay="0.01">
      <div class="qs-search-container">
        <input class="qs-search" v-model="query" type="text" placeholder="Search for technologies...">
      </div>
    </MyTransition>
    <MyTransition :delay="0.01">
      <transition-group v-if="getQuickstarts.length > 0" class="tech-container" name="cardAnim" mode="out-in">
        <QuickstartItemCard
          v-for="technology in getQuickstarts"
          :key="technology.name"
          :techIconPath="technology.icon"
          :techName="technology.name"
          :qsPath="technology.path"
        ></QuickstartItemCard>
      </transition-group>
      <h4 v-else class="tech-container" v-text="$frontmatter.searchEmptyText" name="cardAnim" mode="out-in"></h4>
    </MyTransition>
  </main>
</template>

<script>
import MyTransition from "@theme/components/MyTransition.vue";
import QuickstartItemCard from './QuickstartItemCard.vue';
export default {
  name: 'QuickstartOverview',
  components: { MyTransition, QuickstartItemCard },
  data: () => ({
    query: "",
  }),
  computed: {
    getQuickstarts() {
      const { technologies } = this.$frontmatter;
      if (!this.query) {
        if (Array.isArray(technologies))
            return technologies;
        return [technologies];
      }
      else {
        const search = this.query.toUpperCase();
        return technologies.filter(function (tech) {
          return tech.name.toUpperCase().includes(search);
        });
      }
    }
  }
}
</script>

<style src="../theme/styles/components/quickstartOverview.styl" lang="stylus"/>
