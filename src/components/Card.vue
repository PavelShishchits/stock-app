<template>
    <div class="card">
        <div class="card-header">
            <span class="card-title">{{ data.name }}</span> (Price: {{ data.price }})
        </div>
        <div class="card-body">
            <div class="card-input">
                <input class="form-control" type="text" v-model="quantity" placeholder="Quantity">
            </div>
            <button class="btn btn-success" @click="buyStocks">Buy</button>
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