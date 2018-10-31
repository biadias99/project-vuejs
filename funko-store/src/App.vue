<template>
  <div id="app">
    <navbar></navbar>
    <hello-world></hello-world>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import HelloWorld from '@/components/HelloWorld'

export default {
  name: 'app',
  components: {
    Navbar,
    HelloWorld,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* aqui tinha um margin-top, tira também*/
  text-align: center;
  color: #2c3e50;
}
</style>
