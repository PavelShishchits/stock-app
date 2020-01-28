<template>
    <header class="header">
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <router-link to="/" class="navbar-brand">Stock Trader</router-link>
            <button class="navbar-toggler" type="button" @click="showMobileMenu = !showMobileMenu" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" :class="{show: showMobileMenu}">
                <ul class="navbar-nav">
                    <router-link class="nav-item" tag="li" :to="{path: 'portfolio'}" active-class="active"><a class="nav-link">Portfolio</a></router-link>
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
            </div>
        </nav>
    </header>
</template>

<script>
    import Axios from 'axios';
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
                loadData: 'loadData'
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
                Axios({
                    method: 'put',
                    url: `data.json`,
                    data: data
                });
            },
            load() {
                this.loadData();
            }
        },
        computed: {
            ...mapGetters([
                'amount'
            ])
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

    .navbar-nav {
        width: 100%;
        align-items: center;
    }

</style>