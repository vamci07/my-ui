import React, { useEffect } from 'react';
import { useMediaQuery } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import routes from 'utils/routes';
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
      <Layout lng={lng} changeLanguage={changeLanguage}>
        {routes}
      </Layout>
    </ThemeWrapper>
  );
}

export default App;
