<template>
  <main class="quickstarts-page">
    <MyTransition :delay="0.1">
      <header class="title-container">
        <h1>Quickstarts</h1>
        <p class="description">Tryout our samples to learn how to enable login to your applications with Asgardeo</p>
      </header>
    </MyTransition>
    <MyTransition :delay="0.1">
      <div class="tech-container">
        <div class="tech-item">
          <a @click="navigate('/quickstarts/qsg-spa-angular/')">
            <img class="tech-icon" src="../theme/assets/images/technologies/angular-logo.svg" width="100" height="100"/>
          </a>
        </div>
        <div class="tech-item">
          <a @click="navigate('/quickstarts/qsg-spa-javascript/')">
            <img class="tech-icon" src="../theme/assets/images/technologies/javascript-logo.svg" width="100" height="100"/>
          </a>
        </div>
        <div class="tech-item">
          <a @click="navigate('/quickstarts/qsg-spa-react/')">
            <img class="tech-icon" src="../theme/assets/images/technologies/react-logo.svg" width="100" height="100"/>
          </a>
        </div>
        <div class="tech-item">
          <a @click="navigate('/quickstarts/qsg-oidc-webapp-java-ee/')">
            <img class="tech-icon" src="../theme/assets/images/technologies/java-logo.svg" width="100" height="100"/>
          </a>
        </div>
        <div class="tech-item">
          <img class="tech-icon disabled" src="../theme/assets/images/technologies/android-logo.svg" width="100" height="100"/>
        </div>
        <div class="tech-item">
          <img class="tech-icon disabled" src="../theme/assets/images/technologies/dotnet-logo.svg" width="100" height="100"/>
        </div>
      </div>
    </MyTransition>
  </main>
</template>

<script>
import MyTransition from "@theme/components/MyTransition.vue";

export default {
  name: 'QuickstartOverview',
  components: { MyTransition },
  methods: {
    navigate(url) {
      void this.$router.push(url);
    }
  }
}
</script>
<style src="../theme/styles/components/quickstartOverview.styl" lang="stylus"/>
