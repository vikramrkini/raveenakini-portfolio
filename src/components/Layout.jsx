import { Outlet } from 'react-router-dom'
import SectionNav from './SectionNav'
import { navLinks } from '../data/portfolioData'
import logoIcon from '../assets/logo.png'

export default function Layout() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="logo-mark">
          <img src={logoIcon} alt="Dr Raveena Kini (PT) logo" />
        </div>
        <div>
          <h1>Dr. Raveena Kini (PT)</h1>
          <p className="site-tagline">Physiotherapist • Reform The Physio Way</p>
        </div>
      </header>
      <SectionNav navLinks={navLinks} />
      <main className="layout-shell">
        <Outlet />
      </main>
    </div>
  )
}
