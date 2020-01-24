<template>
    <div class="card" :class="type">
        <div class="card-header">
            <span class="card-title">{{ data.name }}</span> ({{ cardDescription }})
        </div>
        <div class="card-body">
            <div class="card-input">
                <input class="form-control" type="text" v-model="quantity" placeholder="Quantity">
            </div>
            <button class="btn btn-success" @click="buyStocks">{{ btnText }}</button>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        props: {
            data: {
                type: Object,
                required: true
            },
            type: {
                type: String,
                default: 'stock'
            }
        },
        data() {
            return {
                quantity: ''
            }
        },
        methods: {
            ...mapActions('portfolio', [
                'changeStockQuantity'
            ]),
            buyStocks() {
                const {quantity} = this;
                if (!quantity) {
                    return false;
                }
                this.changeStockQuantity({
                    ...this.data,
                    quantity: +quantity
                });
            }
        },
        computed: {
            btnText() {
                return this.isPortfolioCard ? 'Sell' : 'Buy';
            },
            isPortfolioCard() {
                return this.type === 'portfolio';
            },
            cardDescription() {
                const {data} = this;
                return this.isPortfolioCard ? `Price: ${data.price} | Quantity: ${data.quantity}` : `Price: ${data.price}` ;
            }
        }
    }
</script>

<style lang="scss">

    .card {
        margin-bottom: 30px;

        .card-header {
            display: flex;
            align-items: center;
        }

        .card-title {
            font-size: 22px;
            margin: 0 20px 0 0;
        }

        .card-body {
            display: flex;
            justify-content: space-between;
        }
    }
</style>