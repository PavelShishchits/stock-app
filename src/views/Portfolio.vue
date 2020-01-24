<template>
    <div class="portfolio">
        <h1>Portfolio page</h1>
        <div class="row">
            <div
                class="col-md-6"
                v-for="stock in portfolio"
                :key="stock.name"
            >
                <card :data="stock"></card>
            </div>
        </div>
        <preloader :active="isLoading"></preloader>
    </div>
</template>

<script>
    // @ is an alias to /src
    import {mapState} from 'vuex';
    import PortfolioCard from '@/components/PortfolioCard';

    export default {
        name: 'portfolio',
        // methods: {
        //   ...mapMutations('portfolio', [
        //     'setStocks'
        //   ])
        // },
        computed: {
            ...mapState('portfolio', [
                'portfolio',
                'error',
                'isLoading'
            ])
        },
        components: {
            card: PortfolioCard
        }
    }
</script>
