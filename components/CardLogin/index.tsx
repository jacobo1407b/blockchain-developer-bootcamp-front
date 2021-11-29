import { FunctionComponent } from 'react';
import Link from "next/link"
import Loading from 'components/Loading';


interface IProps {
    onChange: any,
    onSubmit: any,
    loading?:boolean
}
const MenuLogin: FunctionComponent<IProps> = ({ onChange, onSubmit,loading }) => {
    return (
        <div className="relative z-10 h-auto p-8 py-10 overflow-hidden bg-white border-b-2 border-gray-300 shadow-2xl px-7 rounded-3xl">
            <h3 className="mb-6 text-2xl font-medium text-center">Sign in to your Account</h3>
            <input
                onChange={onChange}
                type="text"
                name="address"
                className="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 focus:ring focus:ring-indigo-700 focus:outline-none rounded-full"
                placeholder="Address"
            />
            <input
                onChange={onChange}
                type="password"
                name="password"
                className="block w-full px-4 py-3 mb-4 border border-2 border-transparent border-gray-200 focus:ring focus:ring-indigo-700 focus:outline-none rounded-full"
                placeholder="Password"
            />
            <div className="block">
                <button
                    onClick={onSubmit}
                    className="w-full px-3 py-4 font-medium text-white bg-indigo-700 rounded-full"
                >
                    {loading ? (
                        <Loading load={loading}/>
                    ):(
                        <>Log Me In</>
                    )}
                    
                </button>
            </div>
            <p className="w-full mt-4 text-sm text-center text-gray-500">Don't have an account?
                <Link href="/register">
                    <a href="/register" className="text-blue-500 underline">Sign up here</a>
                </Link>
            </p>
        </div>
    )
}

export default MenuLogin
