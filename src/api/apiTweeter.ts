import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = 'https://app-tweet-backend-production.up.railway.app/api';

const tweeterApi = axios.create({ baseURL });

tweeterApi.interceptors.request.use(
    async(config) => {
        const token = await AsyncStorage.getItem('token');
        if ( token ) {
            config.headers['x-token'] = token;
        }
        return config;
    }
);



export default tweeterApi;