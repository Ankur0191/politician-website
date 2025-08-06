'use client'

import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import PolicyHighlights from '@/components/PolicyHighlights'
import AboutLeader from '@/components/AboutLeader'
import NewsSection from '@/components/NewsSection'
import CongressPartySection from '@/components/CongressPartySection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <section id="home" style={{ scrollMarginTop: '100px' }}>
        <Hero />
      </section>

      {/* Policy Highlights Section */}
      <section id="leadership" style={{ scrollMarginTop: '100px' }}>
        <PolicyHighlights />
      </section>

      {/* About the Leader Section */}
      <section id="about" style={{ scrollMarginTop: '100px' }}>
        <AboutLeader />
      </section>

      {/* News Section */}
      <section id="news" style={{ scrollMarginTop: '100px' }}>
        <NewsSection />
      </section>

      {/* Congress Party External Section */}
      <section id="congress" style={{ scrollMarginTop: '100px' }}>
        <CongressPartySection />
      </section>

      {/* Contact Section */}
      <section id="contact" style={{ scrollMarginTop: '100px' }}>
        <ContactSection />
      </section>
    </>
  )
}
