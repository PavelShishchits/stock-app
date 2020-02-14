import Vue from 'vue'
import Vuex from 'vuex'
import stocks from './modules/stocks';
import portfolio from './modules/portfolio';
import auth from './modules/auth';

Vue.use(Vuex);

import Axios from 'axios';

const store =  new Vuex.Store({
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
        'SET_AMOUNT': (state, amount) => {
            state.amount = amount;
        }
    },
    actions: {
        loadData(context) {
            const token = context.state.auth.tokenId;
            if (!token) {
                return;
            }
            Axios.get(`data.json?auth=${token}`)
                .then((response) => {
                    context.commit('SET_AMOUNT', response.data.amount);
                    context.commit('stocks/SET_STOCKS_LIST', response.data.stocks);
                    context.commit('portfolio/SET_PORTFOLIO', response.data.portfolio);
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        saveData({state}, payload) {
            const token = state.auth.tokenId;
            if (!token) {
                return;
            }
            console.log(payload);
            Axios.put(`data.json?auth=${token}`, payload);
        }
    },
    modules: {
        auth,
        stocks,
        portfolio,
    }
});

export default store;