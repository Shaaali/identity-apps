<template>
  <section
    :class="[
      {
        collapsable: item.collapsable,
        'is-sub-group': depth !== 0,
      },
      `depth-${depth}`,
    ]"
    class="sidebar-group"
  >
    <RouterLink
      v-if="item.path"
      :class="{
        open,
        active: isActive($route, item.path),
      }"
      class="sidebar-heading clickable"
      :to="item.path"
      @click="$emit('toggle')"
    >
      <i v-if="item.icon" :class="`iconfont ${getIcon(item.icon)}`" />
      <span>{{ item.title }}</span>
      <span
        v-if="item.collapsable"
        :class="open ? 'down' : 'right'"
        class="arrow"
      />
    </RouterLink>
    <p
      v-else
      :class="{ clickable: item.collapsable, open }"
      class="sidebar-heading"
      @click="$emit('toggle')"
    >
      <img v-if="item.icon === 'gettingStartedIcon'" src="../assets/icons/gettingStartedIcon.svg" width="15" height="15" />
      <img v-else-if="item.icon === 'applicationsIcon'" src="../assets/icons/applicationsIcon.svg" width="15" height="15" />
      <img v-else-if="item.icon === 'addLoginIcon'" src="../assets/icons/addLoginIcon.svg" width="15" height="15" />
      <img v-else-if="item.icon === 'addAuthnIcon'" src="../assets/icons/addAuthnIcon.svg" width="16" height="16" />
      <img v-else-if="item.icon === 'usersIcon'" src="../assets/icons/usersIcon.svg" width="17" height="17" />
      <span>{{ item.title }}</span>
      <span
        v-if="item.collapsable"
        :class="open ? 'down' : 'right'"
        class="arrow"
      />
    </p>

    <DropdownTransition>
      <SidebarLinks
        v-if="open || !item.collapsable"
        class="sidebar-group-items"
        :depth="depth + 1"
        :items="item.children"
      />
    </DropdownTransition>
  </section>
</template>

<script src="./SidebarGroup" />

<style lang="stylus">
.sidebar-group
  .sidebar-group
    padding-left 0.5em

  &:not(.collapsable)
    .sidebar-heading:not(.clickable)
      color inherit
      cursor auto

  // refine styles of nested sidebar groups
  &.is-sub-group
    padding-left 0

    & > .sidebar-heading
      padding-left 2rem
      font-size 0.95em
      font-weight normal
      line-height 1.4

      &:not(.clickable)
        opacity 0.8

    & > .sidebar-group-items
      padding-left 1rem

      & > li > .sidebar-link
        border-left none
        font-size 0.95em

  &.depth-2
    & > .sidebar-heading
      border-left none

.sidebar-heading
  box-sizing border-box
  width 100%
  margin 0
  padding 0.35rem 1.5rem 0 1.25rem
  border-left 0.25rem solid transparent
  color var(--text-color)
  font-size 1.0em
  cursor pointer
  transition color 0.15s ease
  user-select none

  img
    padding-right 0.3em !important

  &.open, &:hover
    color inherit

  .arrow
    position relative
    top -0.12em
    left 0.5em
    float: right
    margin-top: 1.0em
    margin-right: 0.9em

  &.clickable
    &.active
      border-left-color var(--accent-color)
      color var(--accent-color)

    &:hover
      color var(--accent-color)

.sidebar-group-items
  font-size 0.95em
  transition height 0.1s ease-out
  overflow hidden
  padding-left 1.1rem !important
</style>
