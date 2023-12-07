'use client'
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation'

function Login(props) {
    const { searchParams } = props
    const router = useRouter()
    useEffect(() => {
        console.log("Login success", searchParams);
        let accessToken = searchParams.accesstoken
        let refreshToken = searchParams.refreshToken;

        if (accessToken && refreshToken) {
            localStorage.setItem("accessToken", accessToken)
            localStorage.setItem("refreshToken", refreshToken)
            router.push('/', { scroll: false })
        }

    }, [])

    return (
        <div>Login</div>
    )
}

export default Login