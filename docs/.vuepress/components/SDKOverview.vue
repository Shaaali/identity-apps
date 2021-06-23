<template>
  <main class="sdks-page">
    <MyTransition :delay="0.3">
      <div class="sub-title-container">
        <h2>Single Page Applications</h2>
        <!-- <p class="description">Tryout our SDKs to integrate your single page applications with Asgardeo</p> -->
      </div>
    </MyTransition>
    <MyTransition :delay="0.3">
      <div class="tech-container">
        <div class="tech-item">
          <a class="icon-container">
            <img class="tech-icon" src="../theme/assets/images/technologies/angular-logo.svg" width="100" height="100"/>
          </a>
          <p class="tech-name">Angular</p>
          <div class="tech-links">
            <a class="tech-link" @click="navigate('/sdks/angular/')">
              <i class="fas fa-file-alt"></i>
              SDK
            </a>
            <a class="tech-link" :href="angularGitUrl" target="_blank">
              <i class="fab fa-github"></i>
              Github
            </a>
            <a class="tech-link" :href="angularAppUrl" target="_blank">
              <i class="fas fa-download"></i>
              Sample App
            </a>
          </div>
        </div>
        <div class="tech-item">
          <a class="icon-container">
            <img class="tech-icon" src="../theme/assets/images/technologies/javascript-logo.svg" width="100" height="100"/>
          </a>
          <p class="tech-name">Javascript</p>
          <div class="tech-links">
            <a class="tech-link" @click="navigate('/sdks/javascript/')">
              <i class="fas fa-file-alt"></i>
              SDK
            </a>
            <a class="tech-link" :href="javascriptGitUrl" target="_blank">
              <i class="fab fa-github"></i>
              Github
            </a>
            <a class="tech-link" :href="javascriptAppUrl" target="_blank">
              <i class="fas fa-download"></i>
              Sample App
            </a>
          </div>
        </div>
        <div class="tech-item">
          <a class="icon-container">
            <img class="tech-icon" src="../theme/assets/images/technologies/react-logo.svg" width="100" height="100"/>
          </a>
          <p class="tech-name">React</p>
          <div class="tech-links">
            <a class="tech-link" @click="navigate('/sdks/react/')">
              <i class="fas fa-file-alt"></i>
              SDK
            </a>
            <a class="tech-link" :href="reactGitUrl" target="_blank">
              <i class="fab fa-github"></i>
              Github
            </a>
            <a class="tech-link" :href="reactAppUrl" target="_blank">
              <i class="fas fa-download"></i>
              Sample App
            </a>
          </div>
        </div>
      </div>
    </MyTransition>
    <MyTransition :delay="0.3">
      <div class="sub-title-container">
        <h2>Web Applications</h2>
        <!-- <p class="description">Tryout our SDKs to integrate your web applications with Asgardeo</p> -->
      </div>
    </MyTransition>
    <MyTransition :delay="0.3">
      <div class="tech-container">
        <div class="tech-item">
          <a class="icon-container">
            <img class="tech-icon" src="../theme/assets/images/technologies/java-logo.svg" width="100" height="100"/>
          </a>
          <p class="tech-name">Java EE</p>
          <div class="tech-links">
            <a class="tech-link"  @click="navigate('/sdks/java-ee/')">
              <i class="fas fa-file-alt"></i>
              SDK
            </a>
            <a class="tech-link" :href="javaGitUrl" target="_blank">
              <i class="fab fa-github"></i>
              Github
            </a>
            <a class="tech-link" :href="javaAppUrl" target="_blank">
              <i class="fas fa-download"></i>
              Sample App
            </a>
          </div>
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
  },
  data() {
    return {
      angularAppUrl: "https://github.com/asgardeo/asgardeo-auth-angular-sdk/releases/download/v0.1.3/asgardeo-angular-app.zip",
      angularGitUrl: "https://github.com/asgardeo/asgardeo-auth-angular-sdk",
      javascriptAppUrl: "https://github.com/asgardeo/asgardeo-auth-spa-sdk/releases/download/v0.1.2/asgardeo-html-js-app.zip",
      javascriptGitUrl: "https://github.com/asgardeo/asgardeo-auth-spa-sdk",
      reactAppUrl: "https://github.com/asgardeo/asgardeo-auth-react-sdk/releases/download/v0.1.1/asgardeo-react-app.zip",
      reactGitUrl: "https://github.com/asgardeo/asgardeo-auth-react-sdk",
      javaAppUrl: "https://github.com/asgardeo/asgardeo-tomcat-oidc-agent/releases/latest/download/oidc-sample-app.war",
      javaGitUrl: "https://github.com/asgardeo/asgardeo-tomcat-oidc-agent"
    }

  }
}
</script>
<style src="../theme/styles/components/sdkOverview.styl" lang="stylus"/>
