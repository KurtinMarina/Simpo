<template>
  <div id="app">
    <nav class="navbar navbar-dark bg-dark">
      <CreateProfile></CreateProfile>
    </nav>
    <ListProfiles></ListProfiles>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import ListProfiles from './components/ListProfiles.vue';
import CreateProfile from './components/CreateProfile.vue';

@Component({
  components: {
    CreateProfile,
    ListProfiles
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
