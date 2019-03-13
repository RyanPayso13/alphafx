<template>
	<v-container>

		<v-subheader>
			<h1>Teams</h1>
		</v-subheader>
		<v-divider class="mb-3"></v-divider>  
		<v-card class="mb-3">
			<v-list three-line>
				<template v-for="(team, index) in teamList">
					<v-list-tile
						:key="team.logo_url"
						:to="{
							name: 'team', 
							params: {
								id: team.id,
								name: team.name
								}
							}"
						avatar>
						<v-list-tile-avatar size="45">
							<img :src="team.logo_url">
						</v-list-tile-avatar>
						<v-list-tile-content>
							<v-list-tile-title>{{ team.name }}</v-list-tile-title>
							<v-list-tile-sub-title>{{ team.city }}</v-list-tile-sub-title>
							<v-list-tile-sub-title>{{ team.founded }}</v-list-tile-sub-title>
							<v-list-tile-sub-title>{{ team.budget | currency }}</v-list-tile-sub-title>
						</v-list-tile-content>
					</v-list-tile>
					<v-divider
						:key="index"
						:inset="false"
						>
					</v-divider>
				</template>
			</v-list>
		</v-card>

  </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
	computed: mapState(['teamList']),
	created() {
		this.$store.dispatch('fetchTeamList');
	},
};
</script>
