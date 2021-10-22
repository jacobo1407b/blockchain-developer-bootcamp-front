import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app';
//import { GetStaticProps, NextPage, NextPageContext } from 'next'
import Layout from 'layout';

/*
interface IProps {
  Component: NextPage;
  pageProps:any
}*/

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
export default MyApp
/*
MyApp.getInitialProps = async (ctx) => {
  const res = await fetch('https://api.github.com/repos/vercel/next.js')
  const json = await res.json()
  return { stars: json.stargazers_count }
}*/
