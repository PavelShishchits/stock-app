import Vue from 'vue'
import Vuex from 'vuex'
import stocks from './modules/stocks';
import portfolio from './modules/portfolio';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        amount: 10000
    },
    getters: {
        amount: (state) => state.amount
    },
    mutations: {
        'INCREASE_AMOUNT': (state, payload) => {
            if (!isNaN(payload)) {
                state.amount += payload;
            } else {
                console.error('value must be a number');
            }
        },
        'DECREASE_AMOUNT': (state, payload) => {
            if (!isNaN(payload)) {
                state.amount -= payload;
            } else {
                console.error('value must be a number');
            }
        }
    },
    actions: {
    },
    modules: {
        stocks,
        portfolio
    }
});
