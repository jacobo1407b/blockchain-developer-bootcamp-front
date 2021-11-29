import type { NextPage } from 'next'
import Head from 'next/head';
import TitleBar from 'components/titlebar';
import Cookies from 'cookies'
import useAuth from 'hooks/Auth';

const Perfil: NextPage = (props: any) => {
    useAuth(props.login, props.sesion)
    return (
        <>
            <Head>
                <title>Perfil</title>
            </Head>
            <TitleBar pageName="Perfil" />
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 mt-3">
                <div
                    className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
                    style={{ backgroundImage: "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f868ecef-4b4a-4ddf-8239-83b2568b3a6b/de7hhu3-3eae646a-9b2e-4e42-84a4-532bff43f397.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y4NjhlY2VmLTRiNGEtNGRkZi04MjM5LTgzYjI1NjhiM2E2YlwvZGU3aGh1My0zZWFlNjQ2YS05YjJlLTRlNDItODRhNC01MzJiZmY0M2YzOTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.R0h-BS0osJSrsb1iws4-KE43bUXHMFvu5PvNfoaoi8o')" }}
                >
                    <div className="absolute inset-0 bg-blue-900 bg-opacity-75 transition duration-300 ease-in-out"></div>
                    <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center">
                        <div>
                            <img
                                className="inline-block h-25 w-25 rounded-full ring-2 ring-white"
                                src="https://mui.com/static/images/avatar/2.jpg" alt="Nombre user" />

                            <h3 className="text-white text-lg mt-2 ">
                                <span className='font-semibold text-blue-200'>Name lastname</span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div className="relative w-full h-52 bg-cover bg-center group rounded-lg overflow-hidden shadow-lg transition duration-300 ease-in-out"
                    style={{ backgroundImage: "url('https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f868ecef-4b4a-4ddf-8239-83b2568b3a6b/de7hhu3-3eae646a-9b2e-4e42-84a4-532bff43f397.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y4NjhlY2VmLTRiNGEtNGRkZi04MjM5LTgzYjI1NjhiM2E2YlwvZGU3aGh1My0zZWFlNjQ2YS05YjJlLTRlNDItODRhNC01MzJiZmY0M2YzOTcuanBnIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.R0h-BS0osJSrsb1iws4-KE43bUXHMFvu5PvNfoaoi8o')" }}>
                    <div className="absolute inset-0 bg-blue-900 bg-opacity-75 transition duration-300 ease-in-out"></div>
                    <div className="relative w-full h-full px-4 sm:px-6 lg:px-4 flex items-center justify-center">
                        <div>
                            <h3 className="text-center text-white text-lg">
                                Total Balance
                            </h3>
                            <h3 className="text-center text-white text-3xl mt-2 font-bold">
                                ETH 27,580
                            </h3>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Perfil;

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
