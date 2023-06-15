import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { DAppProvider, Config, Chain } from '@usedapp/core'

/*
CKI: 0x5D6373b77c14ABf3FbBFe418DA4b4F0125c637FF
FDG: 0xE89A84Fd29eb0C35cEB7B1e13E567844Ed4DB361
CkiDistr: 0x49365d44f58Ba6351D731Ed170B18248B6aD77D3
FdgDistr: 0xf6BA809452aD34B5088e60477322eC8546168061
CCCore: 0x69dDfbE8BC388E6F5F2e2495A39E21a399a4ABd3
CCStaking - CKI: 0x0a58c62697958311c82F6CA5645fb72aeBCD8522
CCStaking - FDG: 0x38122594740D9BFfde1a577Fb0692a52bF0d5F40
*/

export const Chainlabs: Chain = {
  chainId: 2001,
  chainName: 'Chainlabs',
  isTestChain: false,
  isLocalChain: false,
  getExplorerAddressLink: () => '',
  getExplorerTransactionLink: () => '',
  multicall2Address: '', 
  multicallAddress: '0x2b7e1973951d4Ad66Bb17A81797d38d4533c94E2', 
  nativeCurrency: {
    name: 'Chainlabs Ether',
    symbol: 'ETH',
    decimals: 18
  },
  rpcUrl: 'https://eth.cryptocookies.wtf'
}

const config: Config = {
  networks: [Chainlabs],
  readOnlyChainId: Chainlabs.chainId,
  readOnlyUrls: {
    [Chainlabs.chainId]: 'https://eth.cryptocookies.wtf'
  },
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
  <DAppProvider config={config}>
    <App />
  </DAppProvider>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
