<template>
  <div id="app">
    <header>
      <navbar/>
    </header>
    <main>
      <div class="container">
        <router-view></router-view>
      </div>
    </main>
    <footer class="footer">
    <div class="container">
      Galleries 2018.
    </div>
  </footer>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'

export default {
  name: 'app',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 60px;
    line-height: 60px;
    background-color: #f5f5f5;
}
main {
  margin-top: 100px;
}
</style>
