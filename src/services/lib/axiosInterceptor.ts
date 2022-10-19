import { AxiosRequestConfig } from 'axios';
import {store} from "@store/store";

export const checkToken = async (config: AxiosRequestConfig) => {
    const access_token = store.getState().auth.accessToken;

    config.headers['access_token'] = access_token;
    return config;
}