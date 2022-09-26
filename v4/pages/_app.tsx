import { useRouter } from 'next/router';
import { RecoilRoot } from 'recoil';

import { Header, Footer } from '../components';

import '../styles/global.css';

function MyApp({ Component, pageProps }) {
  const Router = useRouter();

  if (!Router.pathname.includes('/pos') && !Router.pathname.includes('/rms')) {
    return (
      <RecoilRoot>
        <div className='w-screen h-screen box-border overflow-x-hidden overflow-y-auto'>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      </RecoilRoot>
    )
  } else {
    return (
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    )
  }


}

export default MyApp