import UserContext from './UserContext'
import { useReducer } from 'react'
import userReducer from './UserReducer'
import axiosClient from '../../config/axiosClient'

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

    const msg ="provider"

    return (
        <UserContext.Provider value={{msg, loginUser, registerUser}}>{children}</UserContext.Provider>
    )
}

export default UserProvider