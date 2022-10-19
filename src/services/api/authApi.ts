import {AxiosPromise} from "axios";
import {LoginData} from "@services/models/dataModel";
import {apiMmsClient} from "@services/lib/blwsAxios";
import URL_INFO from "@constants/urlInfo";

export const logIn = (data: LoginData): AxiosPromise => {
    return apiMmsClient.post(URL_INFO.API_V2.LOGIN_URL, { data });
};

export const logOut = (data: LoginData): AxiosPromise => {
    return apiMmsClient.post(URL_INFO.API_V2.LOGOUT_URL, { data });
};

export const getMainData = (search): AxiosPromise => {
    // react query 일정 시간마다 데이터를 바꿔줌
    return apiMmsClient.get(URL_INFO.LOGIN_MAIN.NAME, {params:search});
};