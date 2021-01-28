import '../styles/globals.css'
import Layout from '../components/layout'
import Sidebar from '../components/sidebar'
function MyApp({ Component, pageProps }) {
  return <Layout>
            <Sidebar></Sidebar>
            <div className="page"><Component {...pageProps} /></div>
          </Layout>
}

export default MyApp
