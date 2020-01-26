<template>
    <div class="portfolio">
        <h1>Portfolio page</h1>
        <transition-group name="fade" class="row" tag="div">
            <div
                class="col-md-6"
                v-for="stock in portfolio"
                :key="stock.name"
            >
                <card :stock="stock"></card>
            </div>
        </transition-group>
        <preloader :active="isLoading"></preloader>
    </div>
</template>

<script>
    // @ is an alias to /src
    import {mapState, mapGetters} from 'vuex';
    import PortfolioCard from '@/components/PortfolioCard';

    export default {
        name: 'portfolio',
        computed: {
            ...mapState('portfolio', [
                'error',
                'isLoading'
            ]),
            ...mapGetters('portfolio', [
                'portfolio'
            ])
        },
        components: {
            card: PortfolioCard
        }
    }
</script>
