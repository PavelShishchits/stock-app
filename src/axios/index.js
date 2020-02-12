import axios from "axios";

axios.defaults.baseURL = 'https://stock-app-28541.firebaseio.com/';

export const apiKey = 'AIzaSyApE6QNDC9kRnuWQRoLbcb6BCd9Ih4uKfw';

export const axiosSignUp = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1'
});