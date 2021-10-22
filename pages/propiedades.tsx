import type { NextPage } from 'next'
import Head from 'next/head';
import TitleBar from 'components/titlebar';
const HomeUser: NextPage = () => {
    return (
        <>
            <Head>
                <title>Propiedades</title>
            </Head>
            <TitleBar pageName="Propertys"/>

        </>
    )
}

export default HomeUser;