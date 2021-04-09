import React from 'react'
import SignUp from "../.././Components/User form/SignUpForm/SignUp"
import {Link, NavLink} from "react-router-dom"
export default function SignUpButton() {
    return (
        <div>
              <button className="btn btn-danger border border-dark rounded-0 mx-1"><NavLink to="/sign-up" className="text-white">Sign up</NavLink></button>
        </div>
    )
}
