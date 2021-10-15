<template>
  <RouterLink
    v-if="isInternal"
    class="nav-link"
    :class="{ active }"
    :to="link"
    @focusout="focusoutAction"
  >
    <i v-if="item.icon" :class="`iconfont ${iconPrefix}${item.icon}`" />
    {{ item.text }}
  </RouterLink>
  <a
    v-else
    class="nav-link external"
    :href="link"
    :target="target"
    :rel="rel"
    @focusout="focusoutAction"
  >
    <i v-if="item.icon" :class="`iconfont ${iconPrefix}${item.icon}`" />
    {{ item.text }}
    <OutboundLink v-if="isBlankTarget" />
  </a>
</template>

<script src="./NavLink" />

<style lang="stylus">
.nav-link
  line-height 1.4rem
  color #080808 !important
  margin-right 1rem
  margin-left 1rem
  font-size 15px
  font-weight 500

  @media (max-width $MQMobile)
    color var(--text-color) !important

    &:hover, &.active
      color var(--accent-color) !important
</style>
