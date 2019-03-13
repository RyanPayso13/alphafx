<template>
    <v-card>
        <v-card-title
            class="headline grey lighten-2"
            primary-title
            >
            {{ player.name }}
        </v-card-title>

		<v-data-table 
			:headers="headers"
			:items="player.history"
			item-key="id">
			<template slot="items" slot-scope="props">
				<td>{{ mapTeamNameById(props.item.team_id) }}</td>
				<td class="text-xs-center">{{ props.item.apps }}</td>
				<td class="text-xs-center">{{ props.item.goals }}</td>
			</template>
		</v-data-table>

        <v-divider></v-divider>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="primary"
                flat
                @click="closeDialog()"
            >
                Close
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    import TeamService from "@/services/TeamService";

    export default {
        props: {
            player: Object,
        },
        data: () => ({
            headers: [
                {
                    text: "Team",
                    value: "team_id",
                    align: "left",
                    sortable: false
                },
                {
                    text: "Appearances",
                    value: "app",
                    align: "center",
                    sortable: false
                },
                {
                    text: "Goals",
                    value: "goals",
                    align: "center",
                    sortable: false
                },
            ]
        }),
        methods: {
            mapTeamNameById(id) {
                return TeamService.mapTeamNameById(id, this.$store.state.teamList);
            },
            closeDialog() {
                this.$emit('close-dialog');
            }
        }
    };
</script>
