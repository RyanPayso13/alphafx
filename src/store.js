import Vue from 'vue'
import Vuex from 'vuex'
import TeamService from './services/TeamService';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    teamList: [],
    games: [],
    players: [],
  },
  mutations: {
    updateTeamList(state, payload) {
      state.teamList = payload;
    },
    updateGames(state, payload) {
      state.games = payload;
    },
    updatePlayers(state, payload) {
      state.players = payload;
    },
    pushNewGame(state, payload) {
      const games = [...state.games];
      games.push(payload);
      state.games = games;
    }
  },
  actions: {
    async fetchTeamList({commit}) {
      const resp = await TeamService.fetchTeamList();
      commit('updateTeamList', resp.data);
    },
    async fetchPlayers({commit}, id) {
      const resp = await TeamService.fetchPlayers(id);
      commit('updatePlayers', resp.data);
    },
    async fetchGames({commit}, id) {
      const resp = await TeamService.fetchGames(id);
      commit('updateGames', resp.data);
    },
    async postNewGame({commit}, payload) {
      const resp = await TeamService.addGame(payload);
      commit('pushNewGame', resp.result[0]);
    }
  }
});
