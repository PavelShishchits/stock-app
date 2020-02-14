<template>
    <form @submit="submitForm">
        <h2>Sign up</h2>
        <div class="form-row">
            <div class="col">
                <input type="text" class="form-control" v-model="email" placeholder="Email">
            </div>
            <div class="col">
                <input type="text" class="form-control" v-model="password" placeholder="Password">
            </div>
            <div class="col">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>
</template>

<script>
    import {mapActions} from 'vuex';

    export default {
        data() {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            ...mapActions('auth', [
                'signUp'
            ]),
            submitForm(e) {
                e.preventDefault();
                this.signUp({
                    email: this.email,
                    password: this.password,
                    returnSecureToken: true
                });
            }
        }
    }
</script>