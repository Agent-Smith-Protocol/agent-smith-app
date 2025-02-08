import { PrivyProvider } from '@privy-io/react-auth';

export function WalletConnectProvider({children}: {children: React.ReactNode}) {
  return (
    <PrivyProvider
      appId="cm6w1dxit011fdbdvt9v1hwn6"
      config={{
        appearance: {
          theme: 'dark',
          accentColor: '#00d3bb',
        },
      }}
    >
      {children}
    </PrivyProvider>
  );
}