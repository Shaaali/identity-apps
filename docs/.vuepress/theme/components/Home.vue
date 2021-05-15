<template>
  <main
    :aria-labelledby="$frontmatter.heroText !== null ? 'main-title' : null"
    class="home"
  >
    <header class="hero">
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
          <Button buttonType='primary' buttonText='Get Started' buttonPath='/quickstarts/qsg-spa-sample'/>
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
              @click="feature.link ? navigate(feature.link) : ''"
          >
            <img v-if="feature.icon === 'padlockIcon'" src="../assets/icons/padlockIcon.svg" width="18" height="18" />
            <img v-else-if="feature.icon === 'federatedLoginIcon'" src="../assets/icons/federatedLoginIcon.svg" width="22" height="22" />
            <img v-else-if="feature.icon === 'addAuthnIcon'" src="../assets/icons/addAuthnIcon.svg" width="20" height="20" />
            <img v-else-if="feature.icon === 'usersIcon'" src="../assets/icons/usersIcon.svg" width="20" height="20" />
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
            <p class="learn-more" @click="feature.link ? navigate(feature.link) : ''">Learn more</p>
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
              @click="service.link ? navigate(service.link) : ''"
          >
            <div style="{ display: flex !important; align-items: center; flex-direction: row; }">
              <img v-if="service.icon === 'supportedPluginsIcon'" src="../assets/icons/supportedPluginsIcon.svg" width="20" height="20" />
              <img v-if="service.icon === 'securityComplianceIcon'" src="../assets/icons/securityComplianceIcon.svg" width="20" height="20" />
              <img v-if="service.icon === 'solutionsIcon'" src="../assets/icons/solutionsIcon.svg" width="22" height="22" />
              <h4><a>{{ service.title }}</a></h4>
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

<style lang="stylus">
.home
  display block
  max-width 100%
  min-height 100vh - $navbarHeight
  padding $navbarHeight 2rem 0
  margin 80px auto 0

  @media (max-width $MQNarrow)
    min-height 100vh - $navbarMobileHeight
    padding-top $navbarMobileHeight

  @media (max-width $MQMobileNarrow)
    padding-left 1.5rem
    padding-right 1.5rem

  .hero
    text-align center

    @media (min-width $MQNarrow)
      display flex
      justify-content space-evenly
      align-items center
      text-align left

    img
      display block
      max-width 100%
      max-height 320px
      margin 0

      @media (max-width $MQNarrow)
        max-height 280px
        margin 3rem auto 1.5rem

      @media (max-width $MQMobile)
        max-height 240px
        margin 2rem auto 1.2rem

      @media (max-width $MQMobileNarrow)
        max-height 210px
        margin 1.5rem auto 1rem

      .theme-light &
        &.light
          display block

        &.dark
          display none

      .theme-dark &
        &.light
          display none

        &.dark
          display block

    button
      padding 13px 45px !important
      margin: auto !important
      display: flex
      justify-content: center

    h1
      font-size 2rem
      text-align center

      @media (max-width $MQMobile)
        font-size 2.5rem

      @media (max-width $MQMobileNarrow)
        font-size 2rem

    h1, .description, .action
      margin 1.8rem auto

      @media (max-width $MQMobile)
        margin 1.5rem auto

      @media (max-width $MQMobileNarrow)
        margin 1.2rem auto

    .description
      max-width 50rem
      color #656565
      font-size 1rem
      line-height 1.5
      text-align center
      font-weight 500

      @media (max-width $MQMobile)
        font-size 1.4rem

      @media (max-width $MQMobileNarrow)
        font-size 1.2rem

    .action-button
      display inline-block
      margin 0.6rem 0.8rem
      padding 1rem 1.5rem
      border 2px solid var(--accent-color)
      border-radius 2rem
      color var(--accent-color)
      font-size 1.2rem
      transition background 0.1s ease
      overflow hidden

      @media (max-width $MQMobile)
        padding 0.8rem 1.2rem
        font-size 1.1rem

      @media (max-width $MQMobileNarrow)
        padding 0.6rem 1rem
        font-size 1rem

      &:hover
        color var(--white)
        background-color var(--accent-color)

      &.primary
        color var(--white)
        background-color var(--accent-color)

        &:hover
          border-color var(--accent-color-l10)
          background-color var(--accent-color-l10)

        .theme-dark &
          &:hover
            border-color var(--accent-color-d10)
            background-color var(--accent-color-d10)

  .features-section
    margin 2em -2rem
    padding 1.5rem 2.5rem
    background-color #eeeeee

    h2
      font-size 1.5rem
      margin-bottom 0.4rem
      margin-top 0

    p
      color #656565
      margin-top 0.1rem
      margin-bottom 1.5rem
      font-weight 500

    h2, p
      padding 0 0.45rem

  .features
    display flex
    flex-wrap wrap
    justify-content center
    align-items stretch
    align-content stretch

    @media (max-width $MQMobileNarrow)
      margin 0 -1.5rem

    .feature
      display flex
      flex-direction column
      justify-content center
      flex-basis calc(25% - 4rem)
      margin 0.5rem
      padding  1.5rem 1.5rem
      border-radius 0.1rem
      transition transform 0.3s, box-shadow 0.3s
      overflow hidden
      background #ffffff

      h4
        margin 0.4rem 0
        font-weight 700

      a
        font-size 14px
        line-height 1.5rem

        &.sub-link

          &:hover
            color #ff9100

      p
        padding 0
        color #666666
        font-size 14px
        font-weight 460

        &.learn-more
          margin-top 2rem
          margin-bottom 0

          &:hover
            color #ff7300

          &::after
            margin-left 10px !important
            margin-top 10px !important
            vertical-align middle !important
            content url("../assets/icons/rightArrow.svg")

      @media (max-width $MQNarrow)
        flex-basis calc(50% - 4rem)

      @media (max-width $MQMobile)
        font-size 0.95rem

      @media (max-width $MQMobileNarrow)
        flex-basis calc(100%)
        font-size 0.9rem
        margin 0.5rem 0
        border-radius 0

      &.link
        cursor pointer

      &:hover
        transform scale(1.05)
        box-shadow 0 2px 12px 0 #828282
        background-color white

      h2
        margin-bottom 0.25rem
        border-bottom none
        color var(--text-color-l10)
        font-size 1.25rem
        font-weight 500

        @media (max-width $MQMobileNarrow)
          font-size 1.2rem

  .explore-section
    margin 2em -2rem
    padding 0 2.5rem

    h1
      font-size 1.5rem
      margin-bottom 0.4rem

    p
      color #656565
      margin-top 0.1rem
      margin-bottom 1.5rem

    h1, p
      padding 0 0.45rem

  .services
    display flex
    flex-wrap wrap
    justify-content center
    align-items stretch
    align-content stretch

    @media (max-width $MQMobileNarrow)
      margin 0 -1.5rem

    .service
      display flex
      flex-direction column
      justify-content center
      flex-basis calc(33% - 4rem)
      margin 0.5rem
      padding  1.5rem 1.5rem
      border-radius 0.1rem
      overflow hidden
      background #eee
      border-style solid
      border-width: 0.124em
      border-color #eee
      transition transform 0.3s, box-shadow 0.3s

      &:hover
        box-shadow 0 2px 12px 0 #aaaaaa

      h4
        margin 0.4rem 0
        font-weight 700

      a
        font-size 16px
        line-height 1.5rem
        font-weight 700

        &:hover
          color #ff9100

      p
        padding 0
        color #666666
        font-size 14px
        font-weight 460
        line-height 1.7

      @media (max-width $MQNarrow)
        flex-basis calc(50% - 4rem)

      @media (max-width $MQMobile)
        font-size 0.95rem

      @media (max-width $MQMobileNarrow)
        flex-basis calc(100%)
        font-size 0.9rem
        margin 0.5rem 0
        border-radius 0

      &.link
        cursor pointer

      &.img-header-container
        display: flex !important
        align-items: center !important
        flex-direction: row !important

      h2
        margin-bottom 0.25rem
        border-bottom none
        color var(--text-color-l10)
        font-size 1.25rem
        font-weight 500

        @media (max-width $MQMobileNarrow)
          font-size 1.2rem

  {$contentClass}
    padding-bottom 1.5rem

</style>
