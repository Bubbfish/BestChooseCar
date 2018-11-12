<template>
  <div id="app">
    <img src=".././assets/logo.png">
    <button style="width:200px" @click="got">bb</button>
    <router-view></router-view>
  </div>
</template>
<script>
import { Toast } from 'mint-ui'
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    got () {
      console.log(2)
      Toast({
        message: '提示',
        position: 'bottom',
        duration: 5000
      })
      this.$router.push('/mall/test1c')
    }
  }
}
</script>
<style>
</style>
