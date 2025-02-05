import { NavLink } from 'react-router-dom';
import { Button } from '../../shared/Button/Button.tsx';

export const Header = () => {
  return (
    <header className='h-14 flex items-center'>
      <span className='text-gray-50 text-2xl font-bold'>Logo</span>
      <nav>
        <NavLink className='text-base hover:text-emerald-500 transition duration-300' to={'/'}>Home</NavLink>
        <NavLink className='text-base hover:text-emerald-500 transition duration-300' to={'/dashboard'}>Dashboard</NavLink>
        <NavLink className='text-base hover:text-emerald-500 transition duration-300' to={'/agent'}>Agent</NavLink>
        <NavLink className='text-base hover:text-emerald-500 transition duration-300' to={'/terminal'}>Terminal</NavLink>
      </nav>
    </header>
  )
}