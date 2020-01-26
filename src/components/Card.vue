<template>
    <div class="card">
        <div class="card-header">
            <span class="card-title">{{ stock.name }}</span> (Price: {{ stock.price }})
        </div>
        <div class="card-body">
            <div class="card-input">
                <input class="form-control" type="text" v-model.number="quantity" placeholder="Quantity">
            </div>
            <button class="btn btn-success" :class="{disabled: impossibleOperation || quantity <= 0 || isNaN(quantity)}" @click="handleBuyClick">Buy</button>
        </div>
    </div>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        props: {
            stock: {
                type: Object,
                required: true
            }
        },
        data() {
            return {
                quantity: null
            }
        },
        methods: {
            ...mapActions('portfolio', [
                'buyStocks'
            ]),
            handleBuyClick() {
                const { stock } = this;
                this.buyStocks({
                    price: stock.price,
                    id: stock.id,
                    quantity: this.quantity
                });
                this.quantity = null;
            }
        },
        computed: {
            amount() {
                return this.$store.state.amount;
            },
            impossibleOperation() {
                return this.quantity * this.stock.price > this.amount;
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

        .btn.disabled {
            pointer-events: none;
        }
    }
</style>