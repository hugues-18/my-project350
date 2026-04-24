import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://e-learning-pro.onrender.com",
    headers: {
        Accept: "application/json"
    }
});

export default apiClient;