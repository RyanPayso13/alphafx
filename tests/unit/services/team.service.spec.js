import TeamService from '@/services/TeamService';

describe('Team service', () => {

    const teamList = [{
        name: 'Ryan FC',
        id: 1
    },{
        name: 'Foo United',
        id: 2
    }, {
        name: 'Athletico Mince',
        id: 3
    }];

    it('should be defined', () => {
        expect(TeamService).toBeDefined();
    });

    it('should have the mapTeamNameById method', () => {
        expect(TeamService.mapTeamNameById).toBeDefined();
    });

    it('should map the team name by the id', () => {
        const teamName = TeamService.mapTeamNameById(3, teamList);
        expect(teamName).toEqual('Athletico Mince');
    });

});