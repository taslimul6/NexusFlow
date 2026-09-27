import { useEffect, useRef, useState } from 'react'
import Cta from './Components/Cta'
import Faq from './Components/Faq/Faq'
import Features from './Components/Feature/Features'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Nav'
import NexusHero from './Components/NexusHero'
import PartnersLogo from './Components/PartnersLogo'
import Pricing from './Components/Pricing/Pricing'
import Solutions from './Components/Solution/Solutions'
import Stats from './Components/Stats'
import Testimonials from './Components/Testimonial/Testimonials'
import Toast from './Components/ui/Toast'

function App() {
  const [toast, setToast] = useState('')
  const timer = useRef(null)

  // Links that point to "#demo" are pages this showcase doesn't include
  // (login, careers, socials...). Show a friendly note instead of a dead jump.
  useEffect(() => {
    const onClick = (event) => {
      const link = event.target.closest('a[href="#demo"]')
      if (!link) return
      event.preventDefault()
      setToast('Demo page — not included in this portfolio showcase.')
      clearTimeout(timer.current)
      timer.current = setTimeout(() => setToast(''), 2600)
    }
    document.addEventListener('click', onClick)
    return () => {
      document.removeEventListener('click', onClick)
      clearTimeout(timer.current)
    }
  }, [])

  return (
    <>
      <a
        href="#features"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[70] focus:px-3 focus:py-2 focus:rounded-md focus:bg-white focus:text-black text-sm"
      >
        Skip to content
      </a>
      <Nav />
      <main>
        <NexusHero />
        <PartnersLogo />
        <Features />
        <Solutions />
        <Stats />
        <Testimonials />
        <Pricing />
        <Faq />
        <Cta />
      </main>
      <Footer />
      <Toast message={toast} />
    </>
  )
}

export default App
