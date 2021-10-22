import type { NextPage } from 'next'
import Head from 'next/head';
import TitleBar from 'components/titlebar';
const HomeUser: NextPage = () => {
    return (
        <>
            <Head>
                <title>Dashboard</title>
            </Head>
            <TitleBar pageName="Home - Lo mas reciente" />
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mt-3">
                <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
                    style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2016/06/24/10/47/house-1477041_960_720.jpg')" }}
                >
                    <div className="absolute inset-0 bg-blue-700 bg-opacity-50 transition duration-300 ease-in-out"></div>
                    <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center">
                        <div>
                            <h3 className="text-white text-3xl mt-2 font-bold">
                                $ 72 ETH
                            </h3>
                            <h3 className="text-white text-lg mt-2 ">
                                <span>Nombre propiedad</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
                    style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2014/05/02/21/50/laptop-336378_960_720.jpg')" }}
                >
                    <div className="absolute inset-0 bg-blue-700 bg-opacity-50 transition duration-300 ease-in-out"></div>
                    <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center">
                        <div>
                            <h3 className="text-white text-3xl mt-2 font-bold">
                                $ 72 ETH
                            </h3>
                            <h3 className="text-white text-lg mt-2 ">
                                <span>Nombre propiedad</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
                    style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2017/11/25/01/21/mclaren-650s-2976031_960_720.jpg')" }}
                >
                    <div className="absolute inset-0 bg-blue-700 bg-opacity-50 transition duration-300 ease-in-out"></div>
                    <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center">
                        <div>
                            <h3 className="text-white text-3xl mt-2 font-bold">
                                $ 72 ETH
                            </h3>
                            <h3 className="text-white text-lg mt-2 ">
                                <span>Nombre propiedad</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mt-3">
                <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
                    style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2016/03/27/20/12/desk-1284085_960_720.jpg')" }}
                >
                    <div className="absolute inset-0 bg-blue-700 bg-opacity-50 transition duration-300 ease-in-out"></div>
                    <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center">
                        <div>
                            <h3 className="text-white text-3xl mt-2 font-bold">
                                $ 72 ETH
                            </h3>
                            <h3 className="text-white text-lg mt-2 ">
                                <span>Nombre propiedad</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
                    style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2015/02/06/21/27/pyrite-626549_960_720.jpg')" }}
                >
                    <div className="absolute inset-0 bg-blue-700 bg-opacity-50 transition duration-300 ease-in-out"></div>
                    <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center">
                        <div>
                            <h3 className="text-white text-3xl mt-2 font-bold">
                                $ 72 ETH
                            </h3>
                            <h3 className="text-white text-lg mt-2 ">
                                <span>Nombre propiedad</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
                    style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2015/11/20/20/54/picture-1053852_960_720.jpg')" }}
                >
                    <div className="absolute inset-0 bg-blue-700 bg-opacity-50 transition duration-300 ease-in-out"></div>
                    <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center">
                        <div>
                            <h3 className="text-white text-3xl mt-2 font-bold">
                                $ 72 ETH
                            </h3>
                            <h3 className="text-white text-lg mt-2 ">
                                <span>Nombre propiedad</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mt-3">
                <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
                    style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2015/03/16/07/10/fountain-675488_960_720.jpg')" }}
                >
                    <div className="absolute inset-0 bg-blue-700 bg-opacity-50 transition duration-300 ease-in-out"></div>
                    <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center">
                        <div>
                            <h3 className="text-white text-3xl mt-2 font-bold">
                                $ 72 ETH
                            </h3>
                            <h3 className="text-white text-lg mt-2 ">
                                <span>Nombre propiedad</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
                    style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2018/07/01/20/01/music-3510326_960_720.jpg')" }}
                >
                    <div className="absolute inset-0 bg-blue-700 bg-opacity-50 transition duration-300 ease-in-out"></div>
                    <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center">
                        <div>
                            <h3 className="text-white text-3xl mt-2 font-bold">
                                $ 72 ETH
                            </h3>
                            <h3 className="text-white text-lg mt-2 ">
                                <span>Nombre propiedad</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
                    style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2014/11/21/17/17/house-540796_960_720.jpg')" }}
                >
                    <div className="absolute inset-0 bg-blue-700 bg-opacity-50 transition duration-300 ease-in-out"></div>
                    <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center">
                        <div>
                            <h3 className="text-white text-3xl mt-2 font-bold">
                                $ 72 ETH
                            </h3>
                            <h3 className="text-white text-lg mt-2 ">
                                <span>Nombre propiedad</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomeUser;
