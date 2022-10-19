import Head from 'next/head';
import { CacheProvider } from '@emotion/react';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import { createEmotionCache } from '@utils/create-emotion-cache';
import { theme } from '../theme';
import {CommonLayout} from "@components/common/common-layout";
import { Provider } from 'react-redux';
import {store} from "@store/store";
import { DashboardLayout } from '@components/main/dashboard-layout';

const clientSideEmotionCache = createEmotionCache();

interface appProps {
    Component: any;
    pageProps: any;
}

const App = (props: appProps) => {
  const { Component, pageProps } = props;

  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    <CacheProvider value={clientSideEmotionCache}>
        <Provider store={store}>
      <Head>
        <title>
          BLUE WINGS
        </title>
        <meta
          name="viewport"
          content="initial-scale=1, width=device-width"
        />
      </Head>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
            {/*<CommonLayout>*/}
          <DashboardLayout>
                {getLayout(<Component {...pageProps} />)}
          </DashboardLayout>
            {/*</CommonLayout>*/}
        </ThemeProvider>
      </LocalizationProvider>
        </Provider>
    </CacheProvider>
  );
};

export default App;
