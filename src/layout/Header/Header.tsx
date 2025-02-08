import { NavLink } from 'react-router-dom';
import { usePrivy } from '@privy-io/react-auth';
import { toShortAddress } from '../../lib/toShortAddress.ts';

export const Header = () => {
  const { login, user, logout, authenticated } = usePrivy()
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
      {authenticated
        ? <div className='flex gap-4 absolute right-0'>
          <button className='btn btn-soft btn-accent'>
            {toShortAddress(user?.wallet?.address)}
          </button>
          <button onClick={logout} className='btn btn-soft btn-accent'>
            Logout
          </button>
        </div>
        : <button onClick={login} className='btn btn-soft btn-accent absolute right-0'>
          Connect
        </button>
      }
    </header>
  )
}