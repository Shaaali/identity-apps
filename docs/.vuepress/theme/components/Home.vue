<template>
  <main
    :aria-labelledby="$frontmatter.heroText !== null ? 'main-title' : null"
    class="home"
  >
    <header class="hero">
      <MyTransition :delay="0.04">
        <img class="hero-image" src="../assets/asgardeoTrifactor.svg" width="150" length="300"/>
      </MyTransition>
      <div class="hero-info">
        <MyTransition :delay="0.04">
          <h1
            v-if="$frontmatter.heroText !== false"
            id="main-title"
            v-text="$frontmatter.heroText || $title || 'Hello'"
          />
        </MyTransition>
        <MyTransition :delay="0.08">
          <p
            class="description"
            v-text="
              $frontmatter.tagline ||
              $description ||
              'Welcome to your VuePress site'
            "
          />
        </MyTransition>
        <MyTransition :delay="0.08">
          <Button buttonType='primary' buttonText='Get Started' buttonPath='/guides/get-started/asgardeo-overview'/>
        </MyTransition>
        <MyTransition :delay="0.12">
          <p v-if="$frontmatter.action" class="action">
            <NavLink
              v-for="action in actionLinks"
              :key="action.text"
              :item="action"
              class="action-button"
              :class="action.type || ''"
            />
          </p>
        </MyTransition>
      </div>
    </header>

    <!-- Feature Section -->
    <MyTransition :delay="0.1">
      <div class="features-section">
        <h2>Pick Your Use Case</h2>
        <p>Explore what you can do with Asgardeo to build your solution</p>
        <div
            v-if="$frontmatter.features && $frontmatter.features.length"
            class="features"
        >
          <div
              v-for="(feature, index) in $frontmatter.features"
              :key="index"
              :class="{ link: feature.link, [`feature${index % 9}`]: true }"
              class="feature"
          >
            <img v-if="feature.icon === 'padlockIcon'" src="../assets/icons/padlockIcon.svg" width="22" height="22" />
            <img v-else-if="feature.icon === 'federatedLoginIcon'" src="../assets/icons/federatedLoginIcon.svg" width="26" height="26" />
            <img v-else-if="feature.icon === 'addAuthnIcon'" src="../assets/icons/addAuthnIcon.svg" width="24" height="24" />
            <img v-else-if="feature.icon === 'usersIcon'" src="../assets/icons/usersIcon.svg" width="24" height="24" />
            <h4>{{ feature.title }}</h4>
            <p>{{ feature.details }}</p>
            <div
                v-if="feature.subLinks && feature.subLinks.length"
                v-for="(subLink, index) in feature.subLinks"
                :key="index"
                @click="subLink.link ? navigate(subLink.link) : ''"
            >
              <a class="sub-link">{{ subLink.name }}</a>
            </div>
            <p v-if="feature.icon === 'padlockIcon' || feature.icon === 'usersIcon'" class="learn-more-2" @click="feature.link ? navigate(feature.link) : ''">Learn more</p>
            <p v-if="feature.icon === 'addAuthnIcon' || feature.icon === 'federatedLoginIcon'" class="learn-more-4" @click="feature.link ? navigate(feature.link) : ''">Learn more</p>
          </div>
        </div>
      </div>
    </MyTransition>

    <!-- Explore Section -->
    <MyTransition :delay="0.14">
      <div class="explore-section">
        <h1>Explore Asgardeo</h1>
        <p>Checkout how Asgardeo fits your business plan for identity and access management</p>
        <div
            v-if="$frontmatter.services && $frontmatter.services.length"
            class="services"
        >
          <div
              v-for="(service, index) in $frontmatter.services"
              :key="index"
              class="service"
          >
            <div class="img-header-container">
              <img v-if="service.icon === 'supportedPluginsIcon'" src="../assets/icons/supportedPluginsIcon.svg" width="22" height="22" />
              <img v-if="service.icon === 'securityComplianceIcon'" src="../assets/icons/securityComplianceIcon.svg" width="22" height="22" />
              <img v-if="service.icon === 'solutionsIcon'" src="../assets/icons/solutionsIcon.svg" width="24" height="24" />
              <a @click="service.link ? navigate(service.link) : ''">{{ service.title }}</a>
            </div>
            <p>{{ service.details }}</p>
          </div>
        </div>
      </div>
    </MyTransition>

    <MyTransition :delay="0.24">
      <Content class="theme-default-content custom" />
    </MyTransition>
  </main>
</template>

<script src="./Home" />
<style src="../styles/components/home.styl" lang="stylus"/>
