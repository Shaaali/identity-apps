<template>
  <div>
  <button :class="`button ${ buttonType }`" @click="handleClick">{{ buttonText }}</button>
  </div>
</template>

<script>

export default {
  name: "ToggleButton",
  props:  {
    buttonType: String,
    buttonText: String,
    buttonPath: String
  },
  data() {
    return {
        buttonText: this.buttonText,
        buttonPath: this.buttonPath
      }
  },
  methods: {
  	handleClick: function(){
       this.$router.push(this.buttonPath)
    }
  }
};
</script>

<style lang="stylus">
.button
  border: none
  padding: 15px 32px
  text-align: center
  text-decoration: none
  display: inline-block
  font-size: 16px
  margin: 4px 2px
  cursor: pointer
  border-radius: 4px
  font-weight: 600

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
    color: #888888
    border-style solid
    border-width: thin
    border-color #cccccc

</style>
