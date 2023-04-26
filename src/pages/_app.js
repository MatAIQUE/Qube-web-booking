import '@/styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import 'react-loading-skeleton/dist/skeleton.css'
import "../styles/globals.css";
import '../utils/config'
import Layout from '@/components/layout';
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )

}
