import axios from 'axios';
import { AlertOctagon } from 'lucide-react';

export const API_BASE_URL = "http://localhost:3000";

export const getClothes = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/clothes`);
        return response.data.collection;
    } catch (error) {
        console.log("Error fetching...");
        throw Error;
    }
}

export const bestSellers = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/clothes/bestSellers`);
        return response.data.bestSellers;
    } catch (error) {
        console.error("Error fetching bestSellers...")
        throw Error;
    }
}

export const itemById = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/api/clothes/item/${id}`);
        return response.data.item;
    } catch (error) {
        console.error("Error getting itemBy ID...");
        throw Error;
    }
}

export const purchaseItems = async (id) => {
    const token = localStorage.getItem("userToken");
    try {
        const response = await axios.post(`${API_BASE_URL}/api/user/clothes/${id}`, {},
            { headers: { Authorization: `Bearer ${token}` } }
        );
        return response.data;
    } catch (error) {
        console.log(error);
        return {
            success: false,
            message: "Course Purchase failed...\n Something wrong on server side..."
        };
    }
}

export const purchasedItems = async () => {
    const token = localStorage.getItem("userToken");
    try {
        const response = await axios.get(`${API_BASE_URL}/api/user/purchasedItems`, {
            headers: {Authorization: `Bearer ${token}`}
        });
        console.log(response.data.purchasedDress);
        return response.data.purchasedDress;
    } catch (error) {
        console.log(error);
    }
}

export const deleteUserClothes = async (id) => {
    const token = localStorage.getItem("userToken");
    try {
        const response = await axios.delete(`${API_BASE_URL}/api/user/deleteClothes/${id}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        console.log(response);
        return response.data.message;
    } catch (error) {
        console.log(error)
    }
}

// export const userSignUp = async (userData) => {
//     try {
//         const response = await axios.post(`${API_BASE_URL}/api/user/signUp`, userData);
//         toast.success(response.data.message)
//         return response.data.message;
//     } catch (error) {
//         console.log("Error in api SignUp(frontend)...");
//         const response1 = error;
//         toast.error(response1.response.data.message)
//         console.log(error)
//         return response1.response.data.message;
//     }
// }
