import { HashRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Layout from './components/Layout'
import AboutSection from './components/AboutSection'
import AchievementsSection from './components/AchievementsSection'
import CertificationsSection from './components/CertificationsSection'
import ResearchSection from './components/ResearchSection'
import WhySection from './components/WhySection'
import ContactSection from './components/ContactSection'

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<AboutSection />} />
          <Route path="achievements" element={<AchievementsSection />} />
          <Route path="certifications" element={<CertificationsSection />} />
          <Route path="researches" element={<ResearchSection />} />
          <Route path="why" element={<WhySection />} />
          <Route path="contact" element={<ContactSection />} />
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
