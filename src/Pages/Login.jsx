import React from 'react';
import music from '../resources/music.png'

const Login = () => {
    return (
        <div className="flex h-screen ">

            < img src={music} alt='' className="hidden w-1/2 bg-center bg-cover md:block" />
            <div className="flex items-center justify-center w-full p-8 bg-white md:w-1/2">
                <div className="w-full max-w-sm">
                    <h2 className="mb-6 text-2xl font-bold text-center">Login</h2>

                    <form>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="block w-full p-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                                required
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-600"
                        >
                            
                            Login
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;


