import {useState} from 'react';
import type { NextPage } from 'next'
import Head from 'next/head';
import Link from 'next/link';

type initialState = {
    username: string,
    password: string,
    name: string,
    address: string,
}
const Register: NextPage = () => {

    const [formData, setFormData] = useState<initialState>(initState());

    function onChange(e: any) {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    }

    function onSubmit() {
        console.log(formData);
    }
    return (
        <>
            <Head>
                <title>Register user</title>
            </Head>
            <div
                className="bg-no-repeat bg-cover"
                style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1951&amp;q=80)' }}>
                <div className="absolute bg-gradient-to-b from-green-500 to-green-400 opacity-75 inset-0 z-0"></div>
                <div className="min-h-screen sm:flex sm:flex-row mx-0 justify-center">
                    <div className="flex-col flex  self-center p-10 sm:max-w-5xl xl:max-w-2xl  z-10">
                        <div className="self-start hidden lg:flex flex-col  text-white">
                            <img src="" className="mb-3" />
                            <h1 className="mb-3 font-bold text-5xl">Hi 👋 Welcome Back Aji </h1>
                            <p className="pr-3">Lorem ipsum is placeholder text commonly used in the graphic, print,
                                and publishing industries for previewing layouts and visual mockups</p>
                        </div>
                    </div>
                    <div className="flex justify-center self-center  z-10">
                        <div className="p-12 bg-white mx-auto rounded-2xl w-100 ">
                            <div className="mb-4">
                                <h3 className="font-semibold text-2xl text-gray-800">Sign Up </h3>
                                <p className="text-gray-500">If you have an account you can
                                    <Link href="/">
                                        <a> sign in</a>
                                    </Link>
                                </p>
                            </div>
                            <div className="space-y-5">
                                <div className="space-y-2">
                                    <label
                                        className="text-sm font-medium text-gray-700 tracking-wide"
                                    >
                                        Address
                                    </label>
                                    <input
                                        onChange={onChange}
                                        className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                        type="text"
                                        name="address"
                                        placeholder="0x00000000000000000000000"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label
                                        className="text-sm font-medium text-gray-700 tracking-wide"
                                    >
                                        Name
                                    </label>
                                    <input
                                        className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                        type="text"
                                        onChange={onChange}
                                        name="name"
                                        placeholder="Full name"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        className="text-sm font-medium text-gray-700 tracking-wide"
                                    >
                                        Username
                                    </label>
                                    <input
                                        className=" w-full text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                        type="text"
                                        name="username"
                                        placeholder="Username"
                                        onChange={onChange}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label
                                        className="mb-5 text-sm font-medium text-gray-700 tracking-wide"
                                    >
                                        Password
                                    </label>
                                    <input
                                        className="w-full content-center text-base px-4 py-2 border  border-gray-300 rounded-lg focus:outline-none focus:border-green-400"
                                        type="password"
                                        name="password"
                                        placeholder="Enter your password"
                                        onChange={onChange}
                                    />
                                </div>
                                <div>
                                    <button
                                        type="submit"
                                        onClick={onSubmit}
                                        className="w-full flex justify-center bg-green-400  hover:bg-green-500 text-gray-100 p-3  rounded-full tracking-wide font-semibold  shadow-lg cursor-pointer transition ease-in duration-500"
                                    >
                                        Sign in
                                    </button>
                                </div>
                            </div>
                            <div className="pt-5 text-center text-gray-400 text-xs">
                                <span>
                                    Copyright © 2021-2022
                                    <a href="https://codepen.io/uidesignhub"
                                        rel="" target="_blank"
                                        title="Ajimon"
                                        className="text-green hover:text-green-500 "
                                    >AJI</a></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


function initState() :initialState{
    return {
        address: '',
        name: '',
        username: '',
        password: '',
    }
}
export default Register;