const { DrizzleContext } = require("@drizzle/react-plugin");
import { Drizzle, IDrizzleOptions } from "@drizzle/store";
import Asset from 'utils/contracts/AssetT.json';
import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app';
import Layout from 'layout';


interface IProps extends AppProps {
  Component: any;
  pageProps: any;
  login: boolean;
};
interface IState extends IDrizzleOptions {
  contracts: any;
}

const options: IState = {
  contracts: [Asset],
  web3: {
    fallback: {
      type: 'ws',
      url: process.env.WSCONTRATO!
    }
  }
};

const drizzle = new Drizzle(options);
function MyApp({ Component, pageProps, login }: IProps) {
  
  return (
    <DrizzleContext.Provider drizzle={drizzle}>
        <Layout login={login}>
          <Component {...pageProps} />
        </Layout>
    </DrizzleContext.Provider>

  )
}
export default MyApp

MyApp.getInitialProps = async (ctx: any) => {
  const login = false;
  return { login }
}
