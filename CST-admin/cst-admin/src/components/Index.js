import React from "react";
import Header  from "./Header";
import {useState, useEffect} from "react";
export default function Index(){

    const [isLoggedIn, setIsLoggedIn] = useState(true)

    useEffect(() => {
        let mounted = true
        if (mounted) {
        //   axiosInstance.get('authorization/', {})
        //                .then((res) => {
        //                 setIsLoggedIn(res.data.is_logged_in)
        //                 setIsStaff(res.data.is_staff)
        //                 setIsProfesor(res.data.is_profesor)
        //                })
        //                .catch(function () {
        //                 setIsLoggedIn(false)
        //                 setIsStaff(false)
        //                 setIsProfesor(false)
        //                })  
          if (!isLoggedIn) {
            window.location.href='/login'
          }
          else{
            window.location.href='/admin'
          }
        }
      }, [setIsLoggedIn])

    return (
        <>
        <Header/>
        <h1>Index page</h1>
        </>
    )
}