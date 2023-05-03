import React, { Suspense } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import './App.css';
import Routing from './routes';
import theme from './utils/themes';
import PageLoader from './components/PageLoader';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux';
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';

function App() {
    return (
        <Suspense fallback={<PageLoader />}>
            <SnackbarProvider maxSnack={3}>
                <Provider store={store}>
                    <PersistGate persistor={persistor}>
                        <ThemeProvider theme={theme()}>
                            <Routing />
                        </ThemeProvider>
                    </PersistGate>
                </Provider>
            </SnackbarProvider>
        </Suspense>
    );
}

export default App;
