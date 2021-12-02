import { useState, useEffect } from 'react';
import type { NextPage } from 'next'
import Head from 'next/head';
import TitleBar from 'components/titlebar';
import Cookies from 'cookies'
import useAuth from 'hooks/Auth';
import useProperty from 'hooks/useProperty';
import CardProperty from '@components/CardProperty';


const HomeUser: NextPage = (props: any) => {
    useAuth(props.login, props.sesion);
    const [propertyOne, setproperty] = useState([]);

    const { methods, address } = useProperty();

    useEffect(() => {
        async function init() {
            const ids = await methods?.getProperty().call({ from: address });
            setproperty(ids);
        }
        init()
    }, [methods?.getProperty])

    return (
        <>
            <Head>
                <title>Propiedades</title>
            </Head>
            <TitleBar pageName="My propertys" />

            <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mt-3">
                {propertyOne?.map((item: any, index: number) => (
                    <CardProperty
                        key={index}
                        item={item}
                        address={address}
                        methods={methods}
                    />
                ))}
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
            props: { login, sesion }
        }
    }

    return {
        props: { login, sesion }
    }
}


/**
 * <div key={index} className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
                            style={{ backgroundImage: "url('https://cdn.pixabay.com/photo/2016/11/29/03/53/house-1867187_960_720.jpg')" }}
                        >
                            <div className="absolute inset-0 bg-blue-700 bg-opacity-50 transition duration-300 ease-in-out"></div>
                            <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center">
                                <div>
                                    <div className="text-white text-lg flex space-x-2 items-center">
                                        <div className="bg-white rounded-md p-2 flex items-center">
                                            {item?.visible ? (
                                                <i className="far fa-eye text-blue-800"></i>
                                            ) : (
                                                <i className="fas fa-eye-slash fa-sm text-blue-800"></i>
                                            )}

                                        </div>
                                    </div>
                                    <h3 className="text-white text-3xl mt-2 font-bold">
                                        $ {item?.price} ETH
                                    </h3>
                                    <h3 className="text-white text-lg mt-2 ">
                                        <span>{item?.name}</span>
                                    </h3>
                                </div>
                            </div>
                        </div>
 */