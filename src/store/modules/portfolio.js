export default {
    namespaced: true,
    state: {
        portfolio: {},
        isLoading: false,
        error: null
    },
    getters: {
        portfolio: (state, getters, rootState, rootGetters) => {
            for (let key in state.portfolio) {
                if (state.portfolio.hasOwnProperty(key)) {
                    state.portfolio[key].price = rootGetters['stocks/stocks'][key].price;
                    state.portfolio[key].name = rootGetters['stocks/stocks'][key].name;
                }
            }
            return state.portfolio;
        }
    },
    mutations: {
        'BUY_STOCKS': (state, payload) => {
            if (state.portfolio.hasOwnProperty(payload.id)) {
                state.portfolio[payload.id].quantity += payload.quantity;
            } else {
                state.portfolio[payload.id] = payload;
            }
            state.portfolio = {...state.portfolio};
        },
        'SELL_STOCKS': (state, payload) => {
            const stock = state.portfolio[payload.id];
            stock.quantity -= payload.quantity;
            if (!stock.quantity) {
                delete state.portfolio[payload.id];
            }
            state.portfolio = {...state.portfolio};
        }
    },
    actions: {
        buyStocks: ({ commit }, payload) => {
            commit('BUY_STOCKS', payload);
            commit('DECREASE_AMOUNT', (payload.price * payload.quantity), { root: true });
        },
        sellStocks: ({ commit }, payload) => {
            commit('SELL_STOCKS', payload);
            commit('INCREASE_AMOUNT', (payload.price * payload.quantity), { root: true });
        }
    }
};