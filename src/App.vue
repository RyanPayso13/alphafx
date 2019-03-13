<template>
  <v-app>
    <v-toolbar app>
      <v-toolbar-title class="headline text-uppercase">
        <h1>Alpha FX</h1>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn
        flat
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
      >
      </v-btn>
    </v-toolbar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import PlayerGrid from './components/Player/PlayerGrid';
import GameGrid from './components/Game/GameGrid';

export default {
  name: 'App',
  components: {
    GameGrid,
    PlayerGrid
  },
  data () {
    return {
      //
    }
  }
}
</script>
