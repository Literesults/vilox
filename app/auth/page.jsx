'use client'
import AuthLayout from '@component/layouts/authLayout'
import AppInput from '@component/organisms/AppInput'
import Link from 'next/link'
import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from 'react-redux'
import Cookies from 'js-cookie'
import { Applogin } from '../services/authService'
import { SignInAuth } from '../hooks/Auth'

function Page() {
    const dispatch = useDispatch()
    const [proccessing, setProccessing] = useState(false)
    const [errMsg, setErrMsg] = useState(false)
    const router = useRouter()
    const user = useSelector(state => state.User)

    const login = async (e) => {
        setProccessing(true)
        const { status, data } = await Applogin(e).catch(err => console.log(err))
        setProccessing(false)
        if (status) {
            setErrMsg('')
            console.log(data);
            SignInAuth(data, dispatch)
            router.push("/admin")
        } else {
            setErrMsg(data.message)
        }
    }


    return (
        <AuthLayout errMsg={errMsg} onSubmit={(e) => login(e)} title={"Welcome Back"} subText={"Please fill in your details"}>
            <AppInput name="email" required label="Username" />
            <AppInput name="password" required label="Enter your password" type="password" />
            <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <div className="flex-grow">
                    <AppInput type="checkbox" label="Confirm your details" />
                </div>
                <Link href="forgotten-password" className="text-sm text-black hidden sm:block">Forgot Password ?</Link>
            </div>
            <div className="flex gap-3">
                <button disabled={proccessing} className="flex-grow disabled:bg-opacity-35 shadow-md bg-black text-white rounded-lg py-3"> {proccessing ? "Proccessing..." : "Log In"}</button>
            </div>
            <div className=""><Link href="forgotten-password" className="text-sm text-black sm:hidden">Forgot Password ?</Link></div>
        </AuthLayout>
    )
}

export default Page