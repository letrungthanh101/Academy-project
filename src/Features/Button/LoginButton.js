import React from 'react'
import Login from "../../Components/User form/LoginForm/Login"
import {Link, NavLink} from "react-router-dom"
import swal from 'sweetalert';

export default function LoginButton() {
    const showAlert  =() =>{
        swal({
            text: 'Login success !',
            buttons:{
                cancel: 'Thanks you'
            }
        })
    }
    return (
        <div>
             <button className="btn btn-light border border-dark rounded-0 text-secondary"><NavLink to="/sign-in" className="text-dark">Login</NavLink></button>
                
        </div>
    )
}

   