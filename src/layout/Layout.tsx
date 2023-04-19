import { NavLink, Outlet } from 'react-router-dom'
import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'

export const Layout = (): JSX.Element => {
  return (
    <>
      <Container>
        <header>
          <div className="logo">
            <Logo width={'122'} height={'40'} fill={'rgba(255, 96, 96, 1)'} />
          </div>
          <nav>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link--active' : 'nav-link'
              }
            >
              Accueil
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'nav-link nav-link--active' : 'nav-link'
              }
            >
              About
            </NavLink>
          </nav>
        </header>
      </Container>
      <main>
        <Outlet />
      </main>
      <div className="footer">
        <Logo width={'122'} height={'40'} fill={'rgba(255, 255, 255, 1)'} />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </>
  )
}
