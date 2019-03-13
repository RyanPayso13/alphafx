<template>
  <v-container>
	<v-card>
		<v-card-title 
			class="headline"
			primary-title>
			Games
			<v-btn 
				@click.stop="openDialog()"
				fab 
				small 
				color="primary">
				<v-icon dark>add</v-icon>
			</v-btn>
		</v-card-title>
		<v-data-table 
			:headers="gameHeaders"
			:items="games"
			item-key="id">
			<template slot="items" slot-scope="props">
				<td>{{ props.item.date | date }}</td>
				<td class="text-xs-center">{{ mapTeamNameById(props.item.team_one_id) }}</td>
				<td class="text-xs-center">{{ props.item.team_one_goals }}</td>
				<td class="text-xs-center">{{ mapTeamNameById(props.item.team_two_id) }}</td>
				<td class="text-xs-center">{{ props.item.team_two_goals }}</td>
			</template>
		</v-data-table>
	</v-card>
      <v-dialog 
        v-model="dialog"
        max-width="80%">
        <AddGame
            :id="id"
            :name="name"
            v-if="dialog"
            @close-dialog="closeDialog">
        </AddGame>
    </v-dialog>
  </v-container>
</template>

<script>
import { mapState } from 'vuex'
import AddGame from './AddGame';
import TeamService from "@/services/TeamService";

export default {
  props: {
    id: String,
    name: String
  },
  components: {
	  AddGame
  },
  computed: mapState({
    games: state => state.games
  }),
  data: () => ({
    dialog: false,
    gameHeaders: [
        {
          text: "Date",
          value: "date",
          align: "left",
          sortable: true
        },
        {
          text: "",
          value: "team_one_id",
          align: "center",
          sortable: false
        },
        {
          text: "",
          value: "team_one_goals",
          align: "center",
          sortable: false
        },
        {
          text: "",
          value: "team_two_id",
          align: "center",
          sortable: false
        },
        {
          text: "",
          value: "team_two_goals",
          align: "center",
          sortable: false
        }
      ]

  }),
  methods: {
    mapTeamNameById(id) {
        return TeamService.mapTeamNameById(id, this.$store.state.teamList);
    },
	openDialog() {
	    this.dialog = true;
	},
	closeDialog() {
	    this.dialog = false;
	}
  },
  created() {
    this.$store.dispatch('fetchGames', this.id);
  }
};
</script>

<style lang="scss">
  .pointer {
    cursor: pointer;
  }
</style>
