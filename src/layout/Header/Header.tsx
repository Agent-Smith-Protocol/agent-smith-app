import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='h-18 flex items-center justify-between'>
      <div className={'flex items-center gap-40'}>
        <NavLink to={'/'} className='mr-auto'>
          <span className='text-gray-50 text-2xl font-bold'>Logo</span>
        </NavLink>
        <nav className='flex gap-4'>
          <NavLink className='text-base hover:text-accent transition duration-300' to={'/'}>Home</NavLink>
          <NavLink className='text-base hover:text-accent transition duration-300' to={'/dashboard'}>Dashboard</NavLink>
          <NavLink className='text-base hover:text-accent transition duration-300' to={'/agent'}>Agent</NavLink>
          <NavLink className='text-base hover:text-accent transition duration-300' to={'/terminal'}>Terminal</NavLink>
        </nav>
      </div>
      <button className='btn btn-outline btn-accent ml-auto'>Connect wallet</button>
    </header>
  )
}