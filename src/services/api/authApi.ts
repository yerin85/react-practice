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