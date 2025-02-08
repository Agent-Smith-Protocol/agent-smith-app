import { NavLink } from 'react-router-dom';

export const HomePage = () => {
  return (
    <main>
      <div className="hero">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold text-base-content">Our project name</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <NavLink to={'/dashboard'}>
              <button className="btn btn-soft btn-accent">
                Go to dashboard
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  )
}