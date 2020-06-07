import React, { useEffect } from 'react';
import { useMediaQuery } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Helmet } from 'react-helmet';
import { routes } from 'utils/routes';
import { ThemeWrapper, myTheme } from './theme';
import Layout from './components/Layout';

function App() {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = React.useMemo(() => myTheme(prefersDarkMode ? 'dark' : 'light'), [prefersDarkMode]);

  const { i18n } = useTranslation();
  const [lng, setLng] = React.useState('en');

  useEffect(() => {
    i18n.changeLanguage('en');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setLng(lng);
  };

  return (
    <ThemeWrapper theme={theme}>
      <>
        <Helmet>
          <meta charSet="utf-8" />
          <title>My Title</title>
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Montserrat+Subrayada:wght@400;700&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <Layout lng={lng} changeLanguage={changeLanguage}>
          {routes}
        </Layout>
      </>
    </ThemeWrapper>
  );
}

export default App;
