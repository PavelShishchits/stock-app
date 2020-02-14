import {axiosSignUp, apiKey} from '../../axios/index';
import router from '../../router/index';

export default {
    namespaced: true,
    state: {
        tokenId: null,
        userId: null
    },
    getters: {
        isAuthenticated: (state) => state.tokenId !== null
    },
    mutations: {
        'AUTH_USER': (state, payload) => {
            state.tokenId = payload.tokenId;
            state.userId = payload.userId;
        },
        'LOGOUT_USER': (state) => {
            state.tokenId = null;
            state.userId = null;
        }
    },
    actions: {
        setAutoLogOut({commit}, expireTime) {
            setTimeout(() => {
                commit('LOGOUT_USER');
            }, expireTime * 1000);
        },
        signUp: ({commit, dispatch}, payload) => {
            axiosSignUp.post(`accounts:signUp?key=${apiKey}`, payload)
                .then((response) => {
                    const {data} = response;
                    commit('AUTH_USER', {
                        tokenId: data.idToken,
                        userId: data.localId
                    });
                    dispatch('cacheAuthData', data);
                    dispatch('setAutoLogOut', data.expiresIn)
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        signIn: ({commit, dispatch}, payload) => {
            axiosSignUp.post(`accounts:signInWithPassword?key=${apiKey}`, payload)
                .then((response) => {
                    const {data} = response;
                    commit('AUTH_USER', {
                        tokenId: data.idToken,
                        userId: data.localId
                    });
                    dispatch('cacheAuthData', data);
                    dispatch('setAutoLogOut', data.expiresIn)
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        cacheAuthData: (context, authData) => {
            const now = new Date();
            const expirationDate = new Date(now.getTime() + authData.expiresIn * 1000);
            localStorage.setItem('authData', JSON.stringify({
                'tokenId': authData.idToken,
                'userId': authData.localId,
                'expirationDate': expirationDate
            }));
        },
        autoLogIn: ({commit}) => {
            const authData = JSON.parse(localStorage.getItem('authData'));
            if (!authData) {
                return;
            }
            const now = new Date();
            if (!authData.tokenId || now >= authData.expirationDate) {
                return;
            }
            commit('AUTH_USER', {
                tokenId: authData.tokenId,
                userId: authData.userId
            });
        },
        logOut: ({commit}) => {
            commit('LOGOUT_USER');
            localStorage.setItem('authData', null);
            router.replace('/login');
        }
    }
}