<template>
    <div class="card portfolio">
        <div class="card-header">
            <span class="card-title">{{ data.name }}</span> (Price: {{ data.price }} | Quantity: {{ data.quantity }})
        </div>
        <div class="card-body">
            <div class="card-input">
                <input class="form-control" type="text" v-model="quantity" placeholder="Quantity">
            </div>
            <button class="btn btn-primary" @click="sellStocks">Sell</button>
        </div>
    </div>
</template>

<script>

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
            sellStocks() {
                console.log('sellStocks');
            }
        }
    }
</script>