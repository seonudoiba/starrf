import React from 'react'
import { Link } from "react-router-dom";

const SigninSignup = () => {
    return (
        <div className=" flex justify-between bg-white p-4 shadow sm:rounded-lg sm:px-10">
            <Link to="/login" className="text-yellow-400 w-1/2 text-center pl-2 font-bold text-2xl">
                Sign In
            </Link>
            <Link to="/sign-up" className="text-yellow-400  w-1/2 text-center pl-2 border-l font-bold text-2xl">
                Sign Up
            </Link>
        </div>
    )
}
export default SigninSignup
