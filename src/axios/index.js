import Axios  from "axios";
import { baseUrl } from "../helpers/constants/api";

const customAxios = () => {
    return Axios.create({
        baseURL: baseUrl,
        // If the request takes longer than `timeout`, the request will be canceled
        // timeout: ... ,
        // headers: ... ,
    });
};

export function getData(url) {
    return customAxios().get(url);
}
