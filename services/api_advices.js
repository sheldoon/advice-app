import axios from "axios"

const api_advices = axios.create({
    baseURL: "https://api.adviceslip.com/advice/"
});
export default api_advices
