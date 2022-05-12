import Theme from 'providers/Theme';

import 'styles/globals.css';

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || (h => h);

  return (
    <Theme>
      {getLayout(<Component {...pageProps} />)}
    </Theme>
  );
}

export default MyApp;
