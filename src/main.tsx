import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './styles/index.css'
import App from './App.tsx'
import { WalletConnectProvider } from './lib/providers/PrivyProvider/provider.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <WalletConnectProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </WalletConnectProvider>
  </StrictMode>,
)
