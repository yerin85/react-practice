import axios, {AxiosInstance} from 'axios';
import CONSTANTS from "@constants/constants";
import {checkToken} from "./axiosInterceptor";

export const apiMmsClient: AxiosInstance = axios.create({
    baseURL: CONSTANTS.API_MMS_BASE_URL, // 기본 서버 주소 입력
    headers: {
        Accept: "application/json"
    },
});

export const apiCmsClient: AxiosInstance = axios.create({
    baseURL: CONSTANTS.API_CMS_BASE_URL, // 기본 서버 주소 입력
    headers: {
        Accept: "application/json"
    },
});

export const apiInterfaceClient: AxiosInstance = axios.create({
    baseURL: CONSTANTS.API_INTERFACE_BASE_URL, // 기본 서버 주소 입력
    headers: {
        Accept: "application/json"
    },
});

axios.defaults.withCredentials = true;
apiMmsClient.interceptors.request.use(checkToken);
apiCmsClient.interceptors.request.use(checkToken);
apiInterfaceClient.interceptors.request.use(checkToken);