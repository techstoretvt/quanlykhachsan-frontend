'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

function Login(props) {
    const { searchParams } = props
    const router = useRouter()
    useEffect(() => {
        const urlString = window.location.search;
        const urlParams = new URLSearchParams(urlString);
        console.log("Vao login", urlParams);
        let accessToken = urlParams.get('accesstoken');
        let refreshToken = urlParams.get('refreshToken');;

        if (accessToken && refreshToken) {
            localStorage.setItem("accessToken", accessToken)
            localStorage.setItem("refreshToken", refreshToken)
            console.log("login success");
            router.push('/', { scroll: false })
        }
        else {
            console.log("login fail");
        }


    }, [])

    return (
        <div>Login</div>
    )
}

export default Login