import type { NextPage } from 'next'
import Head from 'next/head';
import TitleBar from 'components/titlebar';
import Cookies from 'cookies'
import useAuth from 'hooks/Auth';

const HomeUser: NextPage = (props: any) => {
    useAuth(props.login, props.sesion)
    return (
        <>
            <Head>
                <title>Propiedades</title>
            </Head>
            <TitleBar pageName="My propertys" />
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mt-3">
                <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
                    style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_960_720.jpg')" }}
                >
                    <div className="absolute inset-0 bg-blue-700 bg-opacity-50 transition duration-300 ease-in-out"></div>
                    <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center">
                        <div>
                            <div className="text-white text-lg flex space-x-2 items-center">
                                <div className="bg-white rounded-md p-2 flex items-center">
                                    <i className="fas fa-eye-slash fa-sm text-blue-800"></i>
                                </div>
                            </div>
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
                    style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2015/06/19/20/13/sunset-815270_960_720.jpg')" }}
                >
                    <div className="absolute inset-0 bg-blue-700 bg-opacity-50 transition duration-300 ease-in-out"></div>
                    <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center">
                        <div>
                            <div className="text-white text-lg flex space-x-2 items-center">
                                <div className="bg-white rounded-md p-2 flex items-center">
                                    <i className="fas fa-eye-slash fa-sm text-blue-800"></i>
                                </div>
                            </div>
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
                            <div className="text-white text-lg flex space-x-2 items-center">
                                <div className="bg-white rounded-md p-2 flex items-center">
                                    <i className="fas fa-eye fa-sm text-blue-800"></i>
                                </div>
                            </div>
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

export async function getServerSideProps(ctx: any) {
    const cookies = new Cookies(ctx?.req, ctx?.res);
    var isSesion = cookies.get('userlogin')
    const login = isSesion ? true : false
    var sesion = isSesion ? isSesion : null;

    if (!login) {
        return {
            redirect: {
                destination: '/',
                permanent: false,
            },
            props:{ login, sesion }
        }
    }
    
    return {
        props: { login, sesion }
    }
}
