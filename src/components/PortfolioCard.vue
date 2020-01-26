<template>
    <div class="card portfolio">
        <div class="card-header">
            <span class="card-title">{{ stock.name }}</span> (Price: {{ stock.price }} | Quantity: {{ stock.quantity }})
        </div>
        <div class="card-body">
            <div class="card-input">
                <input class="form-control" type="text" v-model.number="quantity" placeholder="Quantity">
            </div>
            <button class="btn btn-primary" :class="{disabled: impossibleOperation || quantity <= 0 || isNaN(quantity)}" @click="handleSellClick">Sell</button>
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
                'sellStocks'
            ]),
            handleSellClick() {
                this.sellStocks({
                    ...this.stock,
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
                return this.stock.quantity < this.quantity;
            }
        }
    }
</script>