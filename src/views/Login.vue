<template>
    <form @submit.prevent="submitForm">
        <h2>Sign in</h2>
        <div class="form-row">
            <div class="col" :class="{'has-error': $v.email.$error}">
                <input type="text" class="form-control" v-model="$v.email.$model" placeholder="Email">
                <div class="error" v-if="!$v.email.email">Invalid Email</div>
                <div class="error" v-if="!$v.email.required">Field is required</div>
            </div>
            <div class="col" :class="{'has-error': $v.password.$error}">
                <input type="password" class="form-control" v-model="$v.password.$model"
                       placeholder="Password">
            </div>
            <div class="col" :class="{'has-error': $v.confirmPassword.$error}">
                <input type="password" class="form-control" v-model="$v.confirmPassword.$model"
                       placeholder="Password">
            </div>
            <div class="col">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>
    </form>
</template>

<script>
    import {mapActions} from 'vuex';
    import {email, required, minLength, sameAs} from 'vuelidate/lib/validators';

    export default {
        data() {
            return {
                email: '',
                password: '',
                confirmPassword: ''
            }
        },
        validations: {
            email: {
                email: email,
                required: required
            },
            password: {
                required: required,
                minLength: minLength(6)
            },
            confirmPassword: {
                required: required,
                sameAs: sameAs('password')
            }
        },
        methods: {
            ...mapActions('auth', [
                'signIn'
            ]),
            submitForm() {
                console.log(this.$v);
                this.$v.$touch();
                if (this.$v.$invalid) {
                    return
                }
                this.signIn({
                    email: this.email,
                    password: this.password,
                    returnSecureToken: true
                });
            }
        }
    }
</script>

<style lang="scss">

    .has-error {

        .form-control {
            border-color: red;
        }

        .error {
            display: block;
            color: red;
        }
    }

    .error {
        display: none;
    }

</style>