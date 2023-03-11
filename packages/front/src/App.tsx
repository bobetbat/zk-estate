import React from 'react';
import './App.css';
import theme from './theme';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { RouterProvider } from 'react-router-dom';
import { router } from './routes';
import { store } from './store'
import { Provider } from 'react-redux'
import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { mainnet, polygon, optimism, arbitrum } from 'wagmi/chains';
// import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [mainnet, polygon, optimism, arbitrum],
  [
    // alchemyProvider({ apiKey: process.env.ALCHEMY_ID || '' }),
    publicProvider()
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'My RainbowKit App',
  chains
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider
})

const App: React.FC = () => {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <WagmiConfig client={wagmiClient}>
          <RainbowKitProvider chains={chains}>
            <Provider store={store}>
              {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
              <CssBaseline />
              <RouterProvider router={router} />
            </Provider>
          </RainbowKitProvider>
        </WagmiConfig>
      </ThemeProvider>
    </div>
  );
}

export default App;
