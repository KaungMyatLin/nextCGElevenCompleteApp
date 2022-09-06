import '../styles/globals.css'
import MainLayout from '../components/layout/mainlayout_Cmp'

function MyApp({ Component, pageProps }) {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  )
}

export default MyApp
