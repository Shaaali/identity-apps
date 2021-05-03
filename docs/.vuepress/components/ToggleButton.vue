<template>
  <div>
  <button class="button" @click="handleClick">{{ buttonText }}</button>
  </div>
</template>

<script>

export default {
  name: "ToggleButton",
  props: [ 'buttonText', 'buttonPath' ],
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

<style>
.button {
  border: none;
  color: black;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  background-color: #e67410;
}
</style>
