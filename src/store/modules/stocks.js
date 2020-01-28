import Axios from 'axios';
import {normalizeArrayByProp} from '../../helpers/utils';

export default {
    namespaced: true,
    state: {
        stocks: {},
        error: null,
        isLoading: false
    },
    getters: {
      stocks: (state) => state.stocks
    },
    mutations: {
        'SET_STOCKS_LIST': (state, payload) => {
            state.stocks = Array.isArray(payload) ? normalizeArrayByProp(payload, 'id') : payload;
        },
        'SET_STOCKS_ERROR': (state, error) => {
            state.error = error;
        },
        'SET_STOCKS_LOADER': (state, isLoading) => {
            state.isLoading = isLoading;
        },
        'RECALCULATE_STOCKS': (state) => {
            const stocks = state.stocks;
            for (let key in stocks) {
                if (stocks.hasOwnProperty(key)) {
                    stocks[key].price = Math.round(stocks[key].price * (1 + Math.random() - 0.5));
                }
            }
        }
    },
    actions: {
        setStocks: ({commit}) => {
            commit('SET_STOCKS_LOADER', true);
            Axios.get('stocks.json')
                .then(response => {
                    commit('SET_STOCKS_LIST', response.data)
                })
                .catch((error) => {
                    commit('SET_STOCKS_ERROR', error);
                })
                .then(() => {
                    commit('SET_STOCKS_LOADER', false)
                });
        },
        reCalcStocks: ({commit}) => {
            commit('RECALCULATE_STOCKS');
        }
    }
}