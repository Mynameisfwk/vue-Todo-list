<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import rem from './style/rem.js'
export default {
  name: 'App'
}
</script>

<style>
 @import './iconfont/iconfont.css';
@import 'style/style.css';
body{
  background: #f1f2f3
}
</style>
