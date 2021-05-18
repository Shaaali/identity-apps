<template>
  <footer v-if="enable" class="footer-wrapper">
    <MediaLinks v-if="!($frontmatter.home && $frontmatter.blog)" />
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-if="footerContent" class="footer" v-html="footerContent" />
    <!-- eslint-disable-next-line vue/no-v-html -->
    <div v-if="copyright" class="copyright" v-html="copyright" />
  </footer>
</template>

<script src="./PageFooter" />

<style lang="stylus">
.footer-wrapper
  padding 12px 30px
  border-top 1px solid var(--border-color)
  background var(--bgcolor)
  color var(--dark-color, #666)

  @media (min-width $MQMobile)
    .has-sidebar &
      padding-left $sidebarWidth
      border-left 30px solid transparent

  & > div
    @media (max-width $MQMobileNarrow)
      width 100%

  .media-links-wrapper
    margin 0

  .footer
    margin 8px 16px
    font-size 14px
    text-align left
    float left

  .copyright
    margin 6px 0
    text-align right
    font-size 13px

.page:not(.not-found) + .footer-wrapper
  margin-top -2rem
</style>
