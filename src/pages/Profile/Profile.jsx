import React from 'react'
import Profilecard from '../../components/Profilecard'
import UserContext from "../../context/User/UserContext";
import { useContext, useState, useEffect } from "react";

const Profile = () => {
  const {infoUser, userEdit} = useContext(UserContext)

  const {firstname, lastname, email} = infoUser
  // const {firstname, lastname, email, phone, dir, city, country, reg} = infoUser

  // const [open, setOpen] = useState(false);

  const [userForm, setUserForm] = useState({
    firstname:"",
    lastname:"",
    email:"",
    // phone:"",
    // dir:"",
    // city:"",
    // country:"",
    // reg:""
  })

  // const handleChange = async(e) => {
  //   setUserForm({
  //     ...userForm,
  //     [e.target.name]: e.target.value
  //   })
  // }

  // const sendData = () => {
  //   userEdit(userForm)
  // }

  useEffect(() => {
    const updateData = () => {
      return setUserForm({
        ...userForm,
        firstname,
        lastname,
        email,
        // phone,
        // dir,
        // city,
        // country,
        // reg
      })
    }

    updateData()
  }, [])
  console.log(infoUser)

  // const handleOpen = () => {
  //   setOpen(!open)
  // }

  return (
    <div className='d-flex'>
      <Profilecard userProfile={infoUser}/>
    </div>
    
  )
}

export default Profile