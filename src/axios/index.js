import Axios  from "axios";
import { baseUrl } from "../helpers/constants/api";

const customAxios = () => {
    return Axios.create({
        baseURL: baseUrl,
    });
};

export function getData(url) {
    return customAxios().get(url);
}
