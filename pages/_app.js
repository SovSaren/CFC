import '../styles/globals.css'
import NavigationMenu from '../components/containers/NavigationMenu'

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <NavigationMenu>
      <Component {...pageProps} />
      </NavigationMenu>
     
    </div>
  )
}

export default MyApp
