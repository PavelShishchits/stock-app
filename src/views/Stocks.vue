<template>
    <div class="stocks">
        <h1>Stocks page</h1>
        <div class="row">
            <div
                class="col-md-6"
                v-for="stock in stocks"
                :key="stock.name"
            >
                <card :data="stock" type="stock"></card>
            </div>
        </div>
        <preloader :active="isLoading"></preloader>
    </div>
</template>

<script>
    // @ is an alias to /src
    import {mapActions, mapState} from 'vuex';
    import Card from '@/components/Card';

    export default {
        name: 'stocks',
        created() {
            this.setStocks();
        },
        methods: {
            ...mapActions('stocks', [
              'setStocks'
            ])
        },
        computed: {
            ...mapState('stocks', [
                'stocks',
                'error',
                'isLoading'
            ])
        },
        components: {
            card: Card
        }
    }
</script>
