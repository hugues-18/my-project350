import axios from "axios";

const apiClient = axios.create({
    baseURL: "https://e-learning-i67o.onrender.com",
    headers: {
        Accept: "application/json"
    }
});

export default apiClient;