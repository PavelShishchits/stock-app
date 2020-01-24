<template>
    <div class="preloader" v-show="active" :class="{absolute: type === 2}">
        <div class="preloader__spinner"></div>
    </div>
</template>

<script>
    export default {
        props: {
            active: {
                type: Boolean,
            },
            type: { // type 2 - absolute positioned loader
                type: Number,
                default: 1
            }
        }
    }
</script>

<style lang="scss">

    .preloader {
        width: 100%;

        &__wrap {
            position: relative;
        }

        &.absolute {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            display: flex;
            align-items: center;
        }

        &__spinner {
            border-radius: 50%;
            width: 60px;
            height: 60px;
        }

        &__spinner {
            margin: 20px auto;
            font-size: 10px;
            position: relative;
            text-indent: -9999em;
            border-top: 10px solid rgba(#e5e5e5, 0.2);
            border-right: 10px solid rgba(#e5e5e5, 0.2);
            border-bottom: 10px solid rgba(#e5e5e5, 0.2);
            border-left: 10px solid #e5e5e5;
            transform: translateZ(0);
            animation: load8 1.1s infinite linear;
        }

        @keyframes load8 {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(360deg);
            }
        }
    }

</style>