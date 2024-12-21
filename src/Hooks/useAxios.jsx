import axios from 'axios';
import React, { useContext, useEffect } from 'react';
import { AuthContext } from '../components/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';
const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,

})
const useAxios = () => {
    const {userSignOut} = useContext(AuthContext)
    const navigate = useNavigate()
    useEffect(()=>{
        axiosInstance.interceptors.response.use(response => {
            return response
        },error => {
            if(error.status === 401 || error.status === 403){
                userSignOut()
                .then(() => {
                    console.log('Successfully Logged out');
                    navigate("/login")
                })
                .catch((error) => {
                    console.log(error);
                } ) 
            }
            return Promise.reject(error)
        })
    },[])
   return axiosInstance;
};

export default useAxios;