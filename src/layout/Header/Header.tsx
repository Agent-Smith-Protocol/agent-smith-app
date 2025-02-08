import { NavLink } from 'react-router-dom';
import { usePrivy, useWallets } from '@privy-io/react-auth';
import { toShortAddress } from '../../lib/toShortAddress.ts';

export const Header = () => {
  const { connectWallet, ready } = usePrivy()
  const { wallets } = useWallets()

  return (
    <header className='h-18 flex items-center justify-center relative'>
      <NavLink to={'/'} className='absolute left-0'>
        <span className='text-gray-50 text-2xl font-bold'>Logo</span>
      </NavLink>
      <nav className='flex gap-4'>
        <NavLink className='text-base hover:text-accent transition duration-300' to={'/'}>Home</NavLink>
        <NavLink className='text-base hover:text-accent transition duration-300' to={'/dashboard'}>Dashboard</NavLink>
        <NavLink className='text-base hover:text-accent transition duration-300' to={'/agent'}>Agent</NavLink>
        {/*<NavLink className='text-base hover:text-accent transition duration-300' to={'/terminal'}>Terminal</NavLink>*/}
      </nav>
        <button onClick={() => connectWallet({walletList: ['safe', 'rabby_wallet', 'metamask', 'wallet_connect', 'coinbase_wallet']})} className='btn btn-soft btn-accent absolute right-0'>
          {ready ? toShortAddress(wallets[0]?.address) : 'Connect wallet'}
        </button>
    </header>
  )
}