//import Cookies from 'cookies'
import { Drizzle, IDrizzleOptions } from "@drizzle/store";
import { Provider } from 'react-redux';
import Asset from 'utils/block/build/contracts/AssetT.json';
import 'tailwindcss/tailwind.css'
import '../index.css'
import type { AppProps } from 'next/app';
import Layout from 'layout';
import store from "redux/store";
import Modal from "@components/Modal";
const { DrizzleContext } = require("@drizzle/react-plugin");



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
      url: 'wss://rinkeby.infura.io/ws/v3/49ebf8fbe1c54a1bbf42b8527e3eab66'
    }
  }
};

const drizzle = new Drizzle(options);
function MyApp({ Component, pageProps }: IProps) {

  return (
    <DrizzleContext.Provider drizzle={drizzle}>
      <Provider store={store}>
        <Modal/>
        <Layout drizzle={drizzle}>
          <Component {...pageProps} />
        </Layout>
      </Provider>
    </DrizzleContext.Provider>

  );
}
export default MyApp

/*MyApp.getInitialProps = async (ctx: any) => {
  const cookies = new Cookies(ctx?.ctx?.req, ctx?.ctx?.res);
  var isSesion = cookies.get('userlogin')
  const login = isSesion ? true : false
  return { login }
}*/
