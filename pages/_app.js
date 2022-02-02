import React from 'react';
import '../styles/globals.css';
import NavigationMenu from '../components/containers/NavigationMenu';
import { useRouter } from 'next/router';
import { RecoilRoot } from 'recoil';
import AuthGuard from '../components/persentation/AuthGuard';


function MyApp({ Component, pageProps }) {
  const router = useRouter();
 

  return (
    <div>
      < RecoilRoot>
      {
        router.pathname === '/loginpage' || router.pathname === '/register' || router.pathname === '/'  ?
          <Component {...pageProps} /> :
            <AuthGuard>
              <NavigationMenu>
              <Component {...pageProps} />
              </NavigationMenu>
            </AuthGuard>
      }
      </RecoilRoot>
    </div>
  )
}

export default MyApp
