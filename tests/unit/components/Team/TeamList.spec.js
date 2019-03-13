import Vue from 'vue';
import Vuex from 'vuex';
import Vuetify from 'vuetify';
import { shallowMount, createLocalVue } from '@vue/test-utils'
import TeamList from '@/components/Team/TeamList';
import { currencyFilter } from '@/filters/CurrencyFilter';

describe('TeamList component', () => {

    const teamList = [
        {
            id: "a8986737-030e-4c2d-90c9-8313c18e483b",
            name: "Manchester United",
            city: "Manchester",
            logo_url: "https://upload.wikimedia.org/wikipedia/en/thumb/7/7a/Manchester_United_FC_crest.svg/220px-Manchester_United_FC_crest.svg.png",
            founded: "1878",
            colour: "red",
            budget: "75000000"
        },
        {
            id: "666bdf4b-1ee6-4ba3-98a7-d992fe6d7ad1",
            name: "Real Madrid",
            city: "Madrid",
            logo_url: "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Real_Madrid_CF.svg/150px-Real_Madrid_CF.svg.png",
            founded: "1902",
            colour: "white",
            budget: "97500000"
        }
    ];
    let localVue = null;
    let wrapper = null;

    beforeEach(() => {
        localVue = createLocalVue();
        localVue.filter('currency', () => currencyFilter);
        localVue.use(Vuex);
        localVue.use(Vuetify);
        const store = new Vuex.Store({
          state: {
            teamList: []
          },
          mutations: {
            updateTeamList(state, payload) {
              state.teamList = payload;
            }
          },
          actions: {
            fetchTeamList({commit}) {
              commit('updateTeamList', teamList);
            },
          }
        });
        wrapper = shallowMount(TeamList, { 
            store, 
            localVue 
        });
    });

    afterEach(() => {
        localVue = null;
        wrapper = null;
    });

    it('should be defined', () => {
        expect(TeamList).toBeDefined();
    });

    it('should be the Team List view', () => {
        expect(wrapper.find('h1').text()).toBe('Teams');
    });

    it('should list the teams', () => {
        const teamCount = wrapper.findAll('v-list-tile-stub').length;
        expect(teamCount).toEqual(2);
    });

    it('should display team name', () => {
        const teamNames = wrapper.findAll('v-list-tile-title-stub');
        expect(teamNames.at(0).text()).toEqual('Manchester United');
        expect(teamNames.at(1).text()).toEqual('Real Madrid');
    });

    it('should display team city', () => {
        const teamCities = wrapper.findAll('v-list-tile-sub-title-stub');
        expect(teamCities.at(0).text()).toEqual('Manchester');
        expect(teamCities.at(3).text()).toEqual('Madrid');
    });

    it('should display team founded year', () => {
        const teamYears = wrapper.findAll('v-list-tile-sub-title-stub');
        expect(teamYears.at(1).text()).toEqual('1878');
        expect(teamYears.at(4).text()).toEqual('1902');
    });

    it('should display team logo', () => {
        const logoLen = wrapper.findAll('img').length;
        expect(logoLen).toEqual(2);
    });

});