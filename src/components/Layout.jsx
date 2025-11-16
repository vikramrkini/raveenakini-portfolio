import { Outlet } from 'react-router-dom'
import SectionNav from './SectionNav'
import { navLinks } from '../data/portfolioData'

export default function Layout() {
  return (
    <div className="page">
      <header className="site-header">
        <div className="logo-mark">RK</div>
        <div>
          <h1>Dr. Raveena Kini</h1>
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
