<template>
    <v-card>
        <v-card-title
            class="headline grey lighten-2"
            primary-title
            >
            Add Game
        </v-card-title>

        <v-divider></v-divider>

        <v-form>
            <v-container>
                <v-layout>
                    
                    <v-flex xs12 md4>
                        <v-text-field 
                            :value="name" 
                            readonly>
                        </v-text-field>
                    </v-flex>

                    <v-flex xs12 md4>
                        <v-text-field 
                            v-model.number="goals.teamOne" type="number">
                        </v-text-field>
                    </v-flex>

                    <v-flex xs12 md4>
                        <v-select
                            :items="filteredTeamList"
                            v-model="teamTwo"
                            label="Select"
                            item-text="name"
                            item-value="id"
                        >
                        </v-select>
                    </v-flex>

                    <v-flex xs12 md4>
                        <v-text-field 
                            v-model.number="goals.teamTwo" type="number">
                        </v-text-field>
                    </v-flex>

                    <v-flex xs12 md4>
                        <v-menu
                            v-model="menu"
                            :close-on-content-click="false"
                            :nudge-right="40"
                            lazy
                            transition="scale-transition"
                            offset-y
                            full-width
                            max-width="290px"
                            min-width="290px"
                        >
                            <template v-slot:activator="{ on }">
                                <v-text-field
                                    :value="date | date"
                                    label=""
                                    hint="DD/MM/YYYY"
                                    persistent-hint
                                    prepend-icon="event"
                                    readonly
                                    v-on="on"
                                ></v-text-field>
                            </template>
                            <v-date-picker 
                                v-model="date"
                                locale="en-GB" 
                                no-title 
                                @input="menu = false"
                                :max="maxDate">
                            </v-date-picker>
                        </v-menu>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-form>

        <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
                color="secondary"
                flat
                @click="closeDialog()">
                Cancel
            </v-btn>
            <v-btn
                color="primary"
                flat
                @click="postNewGame()">
                Submit
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
    export default {
        props: {
            id: String,
            name: String
        },
        data: () => ({
            menu: false,
            date: new Date().toISOString(),
            teamTwo: null,
            goals: {
                teamOne: 0,
                teamTwo: 0
            },
            selectedDate: new Date().toISOString(),
        }),
        computed: {
            maxDate() {
                return new Date().toISOString();
            },
            filteredTeamList() {
                return [...this.$store.state.teamList].filter(el => el.id !== this.id);
            }
        },
        watch: {
            date(val) {
                this.selectedDate = new Date(val).toISOString();           
            }
        },
        methods: {
            postNewGame() {
                this.$store.dispatch('postNewGame', {
                    date: this.selectedDate,
                    team_one_id: this.id,
                    team_two_id: this.teamTwo,
                    team_one_goals: this.goals.teamOne,
                    team_two_goals: this.goals.teamTwo
                }).then(() => {
                    this.closeDialog();
                });
            },
            closeDialog() {
                this.$emit('close-dialog');
            }
        }
    };
</script>

<style lang="scss">
</style>
