<template>
  <div :class="`${ displayType }`">
  <button :class="`button ${ buttonType }`" @click="handleClick">
    <div v-if="startIconPath"  class="start-icon-container">
      <img :src="require(`../theme/assets/${ startIconPath }`)"/>
    </div>
    {{ buttonText }}
    <div v-if="endIconPath"  class="end-icon-container">
      <img :src="require(`../theme/assets/${ endIconPath }`)"/>
    </div>
  </button>
  </div>
</template>

<script>

export default {
  name: "Button",
  props:  {
    buttonType: String,
    buttonText: String,
    buttonPath: String,
    externalLink: String,
    displayType: String,
    openInNewTab: Boolean,
    startIconPath: String,
    endIconPath: String
  },
  methods: {
  	handleClick: function(){

  	  if (this.buttonPath) {
        this.$router.push(this.buttonPath);
      }

      if (this.externalLink) {
        // Allow button to open links in a new tab if preferred.
        if(this.openInNewTab) {
          window.open(this.externalLink, "_blank")
        } else {
          window.location.href = this.externalLink;
        }
      }
    }
  }
};
</script>

<style lang="stylus">
.button
  border: none
  padding: 15px 30px
  text-align: center
  text-decoration: none
  display: inline-block
  font-size: 16px
  margin: 4px 2px
  cursor: pointer
  border-radius: 4px
  font-weight: 600
  font-family inherit

  &.default
    background-color: #e0e1e2
    color: #5a5a5a

  &.primary
    background-color: #ff7300
    color: #fff

  &.danger
     background-color: #db2828
     color: #fff

  &.success
     background-color: #37ba45
     color: #fff

  &.info
     background-color: #2b85d0
     color: #fff

  &.default-outlined
    background-color: transparent
    color: #ff7300
    border-style: solid
    border-width: 0.124em
    border-color: #ff7300

  &.grey-outlined
    background-color: transparent
    color: #5a5a5a
    border-style: solid
    border-width: 0.145em
    border-color: #e0e1e2
  
  &.grey-outlined-icon
    display inline-block
    vertical-align baseline
    min-height 1em
    line-height 2.75em
    background-color: transparent
    color #5a5a5a
    border-style solid
    border-width 2px
    border-color #e0e1e2
    padding 5px 25px
    margin 0 2px 5px 0
    font-weight 500
    font-size 15px

    .start-icon-container
      display flex
      float left

      img
        border none !important
        padding 2px 5px !important
        margin 0 5px 0 0 !important
        width auto
        height 35px

    .end-icon-container
      display flex
      float right

      img
        border none !important
        padding 12px 5px 8px 5px !important
        margin 0 !important
        width 18px
        height auto

.inline-button
  display inline
</style>

