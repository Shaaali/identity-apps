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
        <div class="tech-item disabled">
          <img class="tech-icon" src="../theme/assets/images/technologies/android-logo.svg" width="100" height="100"/>
        </div>
        <div class="tech-item">
          <img class="tech-icon" src="../theme/assets/images/technologies/java-logo.svg" width="100" height="100"/>
        </div>
        <div class="tech-item">
          <img class="tech-icon" src="../theme/assets/images/technologies/dotnet-logo.svg" width="100" height="100"/>
        </div>
      </div>
      <div class="container">
        <h3 class="title">Text fadeIn top</h3>
        <div class="content">
          <a href="https://unsplash.com/photos/HkTMcmlMOUQ" target="_blank">
            <div class="content-overlay"></div>
            <img class="content-image" src="https://images.unsplash.com/photo-1433360405326-e50f909805b3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1055&q=80">
            <div class="content-details fadeIn-top">
              <h3>This is a title</h3>
              <p>This is a short description</p>
            </div>
          </a>
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
