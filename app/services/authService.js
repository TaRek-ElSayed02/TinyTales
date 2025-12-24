import axios from "axios";
import BASE_URL from "../api/baseApi";

export const register = async (data) => {
    const formData = new FormData();
    
    formData.append("name", data.fullName);
    formData.append("email", data.email);
    formData.append("mobile", data.mobile);
    formData.append("password", data.password);
    formData.append("password_confirmation", data.password_confirmation);
    formData.append("mobile_country_code", data.mobile_country_code);
    formData.append("type", "client");

    const response = await axios.post(
        `${BASE_URL}/auth/register`,
        formData,
        {
            headers: {
                Accept: "application/json",
            },
        }
    );

    return response.data;
};

export const verifyEmail = async (token, code) => {
    const formData = new FormData();
    formData.append("code", code);

    const response = await axios.post(
        `${BASE_URL}/auth/verify-email`,
        formData,
        {
            headers: {
                Accept: "application/json",
                Authorization: `Bearer ${token}`
            },
        }
    );

    return response.data;
};


export const login = async (email, password) => {
    const formData = new FormData();
    formData.append("email", email);
    formData.append("password", password);

    const response = await axios.post(
        `${BASE_URL}/auth/login`,
        formData,
        {
            headers: {
                Accept: "application/json",
            },
        }
    );

    return response.data;
};

