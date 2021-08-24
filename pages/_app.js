import '../styles/globals.css'
import NavigationMenu from '../components/containers/NavigationMenu'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div>
      {
        router.pathname === '/form/loginPage' || router.pathname === '/' ?
          <Component {...pageProps} /> :
          <NavigationMenu>
            <Component {...pageProps} />
          </NavigationMenu>
      }


    </div>
  )
}

export default MyApp
