<template>
    <header class="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link to="/" class="navbar-brand">Stock Trader</router-link>
            <button class="navbar-toggler" type="button" @click="showMobileMenu = !showMobileMenu" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" :class="{show: showMobileMenu}">
                <ul v-if="isAuthenticated"  class="navbar-nav">
                    <router-link tag="li" :to="{path: 'portfolio'}" active-class="active"><a class="nav-link">Portfolio</a></router-link>
                    <router-link class="nav-item" tag="li" :to="{path: 'stocks'}" active-class="active"><a class="nav-link">Stocks</a></router-link>
                    <li class="nav-item ml-auto"><a class="nav-link btn" @click.prevent="endDay">End day</a></li>
                    <li class="nav-item dropdown" :class="{show: showDropDown}">
                        <a class="nav-link dropdown-toggle" href="#" role="button" @click.prevent="showDropDown = !showDropDown">
                            Save & Load
                        </a>
                        <div class="dropdown-menu" :class="{show: showDropDown}">
                            <a class="dropdown-item" href="#" @click.prevent="save">Save</a>
                            <a class="dropdown-item" href="#" @click.prevent="load">Load</a>
                        </div>
                    </li>
                    <li class="nav-item">
                        <span class="nav-link">Refunds: {{ amount | formatPrice }}</span>
                    </li>
                </ul>
                <ul class="navbar-nav auth">
                    <template v-if="!isAuthenticated">
                        <router-link class="nav-item" tag="li" :to="{path: 'registration'}" active-class="active"><a class="nav-link">Sign Up</a></router-link>
                        <router-link class="nav-item" tag="li" :to="{path: 'login'}" active-class="active"><a class="nav-link">Sign In</a></router-link>
                    </template>
                    <li v-else class="nav-item"><a class="nav-link" @click.prevent="logOut">Log Out</a></li>
                </ul>
            </div>
        </nav>
    </header>
</template>

<script>
    import {mapGetters, mapActions} from 'vuex';

    export default {
        data() {
            return {
                showDropDown: false,
                showMobileMenu: false
            }
        },
        methods: {
            ...mapActions({
                reCalcStocks: 'stocks/reCalcStocks',
                loadData: 'loadData',
                saveData: 'saveData',
                logOutAction: 'auth/logOut'
            }),
            endDay() {
              this.reCalcStocks();
            },
            save() {
                const data = {
                    amount: this.$store.getters.amount,
                    portfolio: this.$store.getters['portfolio/portfolio'],
                    stocks: this.$store.getters['stocks/stocks'],
                };
                this.saveData(data);
            },
            load() {
                this.loadData();
            },
            logOut() {
                this.logOutAction();
            }
        },
        computed: {
            ...mapGetters({
                amount: 'amount',
                isAuthenticated: 'auth/isAuthenticated'
            })
        }
    }
</script>
<style lang="scss">

    .header {
        margin: 30px 0;
    }

    .navbar {

        .ml-auto {

            @media (max-width: 992px) {
                margin-left: 0 !important;
            }
        }
    }

    .navbar-collapse {
        align-items: center;

        @media (min-width: 992px) {
            justify-content: flex-end;
        }
    }

    .navbar-nav {
        align-items: center;
    }

</style>