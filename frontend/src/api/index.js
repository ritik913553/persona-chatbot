import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:3000/api',
});


export const sendMessage = async (data)=>{
    return await api.post("/chat", data);
}