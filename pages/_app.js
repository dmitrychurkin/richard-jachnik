import 'styles/globals.css';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || (h => h)
  return getLayout(<Component {...pageProps} />)
}

export default MyApp;
