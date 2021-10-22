import type { NextPage } from 'next'
import Head from 'next/head';
import TitleBar from 'components/titlebar';

const Perfil: NextPage = () => {
    return (
        <>
            <Head>
                <title>Perfil</title>
            </Head>
            <TitleBar  pageName="Perfil"/>

        </>
    )
}

export default Perfil;