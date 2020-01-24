export default {
    namespaced: true,
    state: {
        portfolio: [],
        isLoading: false,
        error: null
    },
    mutations: {
        'CHANGE_STOCK_QUANTITY': (state, stock) => {
            state.portfolio = [...state.portfolio, stock];
        }
    },
    actions: {
        changeStockQuantity: ({commit}, stock) => {
            commit('CHANGE_STOCK_QUANTITY', stock);
        }
    }
};