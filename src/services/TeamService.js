import Api from '@/services/Api'

export default {
    fetchTeamList () {
        return Api().post('/api/teams').then(response => {
            return response.data;
        });
    },
    fetchPlayers (id = null) {
        return Api().post('/api/teams/players', {
            team_id: id
        }).then(response => {
            return response.data;
        });
    },
    fetchGames (id = null) {
        return Api().post('/api/teams/games', {
            team_one_id: id
        }).then(response => {
            return response.data;
        });
    },
    addGame (payload = {}) {
        return Api()
            .post('/api/teams/games/new', { ...payload })
            .then(response => {
                return response.data;
            });
    },
    mapTeamNameById(id, teamListFromState) {
        const teamList = [...teamListFromState];
        let team = teamList.find(el => el.id === id);
        return team.name;
    }
}