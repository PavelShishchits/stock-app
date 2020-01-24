import Axios from 'axios';

export default {
    namespaced: true,
    state: {
        stocks: [],
        error: null,
        isLoading: false
    },
    mutations: {
        'SET_STOCKS_LIST': (state, stocks) => {
            state.stocks = stocks;
        },
        'SET_STOCKS_ERROR': (state, error) => {
            state.error = error;
        },
        'SET_STOCKS_LOADER': (state, isLoading) => {
            state.isLoading = isLoading;
        }
    },
    actions: {
        setStocks: ({commit}) => {
            commit('SET_STOCKS_LOADER', true);
            Axios.get('/static/stocks.json')
                .then(response => {
                    commit('SET_STOCKS_LIST', response.data.stocks)
                })
                .catch((error) => {
                    commit('SET_STOCKS_ERROR', error);
                })
                .then(() => {
                    commit('SET_STOCKS_LOADER', false)
                });
        }
    }
}