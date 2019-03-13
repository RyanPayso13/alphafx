<template>
  <v-container>
    <v-card>
		<v-card-title 
			class="headline"
			primary-title>
			Players
		</v-card-title>
		<v-data-table 
			:headers="headers"
			:items="players"
			item-key="id">
			<template slot="items" slot-scope="props">
                <td class="pointer" @click.stop="openDialog(props.item)">{{ props.item.name }}</td>
                <td class="text-xs-center">{{ props.item.age }}</td>
                <td class="text-xs-center">{{ props.item.position }}</td>
                <td class="text-xs-center">{{ props.item.value | currency }}</td>
                <td class="text-xs-center">{{ props.item.nationality }}</td>
                <td class="text-xs-center">
                    <img class="flag" :src="props.item.flag_url" alt="" width="100">
                </td>
            </template>
		</v-data-table>
	</v-card> 
    <v-dialog 
        v-model="dialog"
        max-width="50%">
        <PlayerDetails 
            :player="selectedPlayer"
            v-if="dialog && selectedPlayer"
            @close-dialog="closeDialog">
        </PlayerDetails>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import PlayerDetails from './PlayerDetails';

export default {
  props: {
    id: String
  },
  components: {
	  PlayerDetails
  },
  computed: mapState({
    players: state => state.players  
    }),
    data: () => ({
        dialog: false,
        selectedPlayer: null,
        headers: [
            {
            text: "Name",
            value: "name",
            align: "left",
            sortable: true
            },
            {
            text: "Age",
            value: "age",
            align: "center",
            sortable: true
            },
            {
            text: "Position",
            value: "position",
            align: "center",
            sortable: true
            },
            {
            text: "Value",
            value: "value",
            align: "center",
            sortable: true
            },
            {
            text: "Nationality",
            value: "nationality",
            align: "center",
            sortable: true
            },
            {
            text: "Flag",
            value: "flag_url",
            align: "center",
            sortable: false
            }
        ]
    }),
  methods: {
    openDialog(player) {
	  this.dialog = true;
	  this.selectedPlayer = player;
	},
	closeDialog() {
		this.dialog = false;
	}
  },
  created() {
    this.$store.dispatch('fetchPlayers', this.id);
  }
};
</script>

<style lang="scss" scoped>
    .flag {
        vertical-align: middle;
        margin: 5px 0;
        border: 1px solid rgba(0, 0, 0, .54);
    }
</style>
