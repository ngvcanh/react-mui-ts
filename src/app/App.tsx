import { FC } from 'react';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';
import { SnackbarProvider } from 'notistack';
import { AppConfig } from 'helpers/constants';
import Suspense from 'views/components/base/Suspense';
import CssBaseline from '@mui/material/CssBaseline';
import AuthContext from 'views/includes/AuthContext';
import i18n from './i18n';
import store from './store';
import theme from './theme';

const App: FC = () => {

  return <Provider store={ store }>
    <I18nextProvider i18n={ i18n }>
      <Suspense>
        <ThemeProvider theme={ theme }>
          <CssBaseline />

          <SnackbarProvider 
            maxSnack={ AppConfig.NOTIFY_MAX_STACK as number } 
            anchorOrigin={{
              vertical: AppConfig.NOTIFY_VERTICAL,
              horizontal: AppConfig.NOTIFY_HORIZONTAL
            }}
          >
            <BrowserRouter basename={ AppConfig.BASE_URL as string }>
              <Suspense>
                <AuthContext />
              </Suspense>
            </BrowserRouter>
          </SnackbarProvider>
        </ThemeProvider>
      </Suspense>
    </I18nextProvider>
  </Provider>

}

export default App;