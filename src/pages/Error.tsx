import { Link, NavLink } from 'react-router-dom'
import type { IError } from '../interfaces/IError'
import { Container } from '../ui/Container'
import { Logo } from '../ui/Logo'

export const Error = ({ status, name, message }: IError): JSX.Element => {
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
        <section className="error-section">
          <Container>
            <div className="error-content">
              <h1>{status}</h1>
              <p>{message}</p>
            </div>
            <Link to="/" className="nav-link">
              Retourner sur la page d'accueil
            </Link>
          </Container>
        </section>
      </main>
      <div className="footer">
        <Logo width={'122'} height={'40'} fill={'rgba(255, 255, 255, 1)'} />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </>
  )
}
