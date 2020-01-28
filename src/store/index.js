import Vue from 'vue'
import Vuex from 'vuex'
import stocks from './modules/stocks';
import portfolio from './modules/portfolio';

Vue.use(Vuex);
import Axios from 'axios';
Axios.defaults.baseURL = 'https://stock-app-28541.firebaseio.com/';

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
        },
        'LOAD_DATA': (state, payload) => { // toDo as actions in modules
            state.amount = payload.amount;
            state.stocks.stocks = payload.stocks;
            state.portfolio.portfolio = payload.portfolio;
        }
    },
    actions: {
        loadData({commit}) {
            Axios.get('data.json')
                .then((response) => {
                    commit('LOAD_DATA', response.data)
                });
        }
    },
    modules: {
        stocks,
        portfolio
    }
});
