import UserContext from './UserContext'
import { useReducer } from 'react'
import userReducer from './UserReducer'
import axiosClient from '../../config/axiosClient'
import axios from 'axios'

const UserProvider = ({children}) => {
    const [userState, dispatch] = useReducer(userReducer,{
        infoUser:[],
        authStatus: false,
        token: localStorage.getItem("token"),
    })
    
    const loginUser= async(user)=>{
        try {
            const userLogin= await axiosClient.post("/user/login",user);
            console.log(userLogin.data)
            console.log(userLogin.data.token)
            if (userLogin.data.success) {
                dispatch({
                    type: "REGISTER/LOGIN",
                    payload: userLogin.data
                })
            }
            console.log(userLogin.data.message)
        } catch (error) {
            console.log(error);
        }
    }

    const registerUser= async(user)=>{
        try {
            const userRegister= await axiosClient.post("/user",user);
            if (userRegister.data.success) {
                dispatch({
                    type: "REGISTER/LOGIN",
                    payload: userRegister.data
                })
            }
        } catch (error) {
            console.log(error);
        }
    }

    const verifyToken= async()=>{
       
        const token= localStorage.getItem("token");
        // console.log(token)
        if (token) {
            axiosClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }
        else{
            delete axiosClient.defaults.headers.common["Authorization"];
        }

        try {
            const infoUserVerify = await axiosClient.get("/user/verifyUser");
            dispatch({
                type: "INFO_USER",
                payload: infoUserVerify.data.info
            })

        } catch (error) {
            // console.log(error);
        }}
    
    const logOut = async()=>{
        try{
        dispatch({
            type: "LOGOUT",
            navigate:"/login"
        })}catch(error){
            console.log(error)
        }

    }


    const msg ="provider"

    return (
        <UserContext.Provider value={{msg, loginUser, registerUser, verifyToken, infoUser:userState.infoUser, authStatus:userState.authStatus, logOut}}>{children}</UserContext.Provider>
    )
}

export default UserProvider