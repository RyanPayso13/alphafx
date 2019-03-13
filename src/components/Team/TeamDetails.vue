<template>
  <v-container>
	<v-subheader>
		<h1>{{ name }}</h1>
	</v-subheader>
	<v-divider class="mb-3"></v-divider>  
  <PlayerGrid :id="id"></PlayerGrid>
  <GameGrid :id="id" :name="name"></GameGrid>
  </v-container>
</template>

<script>
import PlayerGrid from '../Player/PlayerGrid';
import GameGrid from '../Game/GameGrid';

export default {
  props: {
    id: String,
    name: String
  },
  components: {
	  PlayerGrid,
	  GameGrid
  }
};
</script>

<style lang="scss">
  .pointer {
    cursor: pointer;
  }
</style>
