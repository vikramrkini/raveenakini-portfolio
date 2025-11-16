import { NavLink } from 'react-router-dom'

export default function SectionNav({ navLinks }) {
  return (
    <nav className="section-nav">
      {navLinks.map(({ label, path }) => (
        <NavLink
          key={label}
          to={path}
          className={({ isActive }) => `nav-pill${isActive ? ' active' : ''}`}
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
