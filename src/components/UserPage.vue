<template>
  <div class="wrapper">
    <nav-bar></nav-bar>
    <div class="panel">
      <text class="text" lines="3">user page. </text>
      <User></User>
    </div>
  </div>
</template>

<script>
import NavBar from './NavBar'
import User from './user/User'

export default {
  name: 'user-page',
  components: { NavBar, User }
}
</script>

<style scoped>
  .wrapper {
    /* flex-direction: column; */
    justify-content: center;
  }
  .panel {
    margin-left: 0px;
    border-width: 2px;
    border-style: solid;
    border-color: #BBBBBB;
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 15px;
    padding-right: 15px;
    margin-bottom: 30px;
  }
  .text {
    color: #666666;
    font-size: 32px;
  }
</style>
