import { PrivyProvider } from '@privy-io/react-auth';

export function WalletConnectProvider({children}: {children: React.ReactNode}) {
  return (
    <PrivyProvider
      appId="cm6w1dxit011fdbdvt9v1hwn6"
      config={{
        // Customize Privy's appearance in your app
        appearance: {
          theme: 'dark',
          accentColor: '#00d3bb',
        },
        // Create embedded wallets for users who don't have a wallet
        embeddedWallets: {
          createOnLogin: 'users-without-wallets',
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}