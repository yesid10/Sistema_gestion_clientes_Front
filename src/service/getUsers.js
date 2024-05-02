import axios from "axios";

const URL = "http://localhost:8080/";


export const getUsersFuction = async(endpoint) => {
    try {
        const {data} = await axios.get(`${URL}${endpoint}`);
        console.log("Usuarios de api: ", data);

        return data;
    } catch (error) {
        console.log("Error al traer los ususarios de api", error);
        return error;
    }
}