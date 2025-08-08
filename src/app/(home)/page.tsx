import { AboutSection } from './components/sections/about-section'
import { CTASection } from './components/sections/CTA-section'
import { HeroSection } from './components/sections/hero-section'
import { ServicesSection } from './components/sections/services-section'
import { TeamSection } from './components/sections/team-section'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <TeamSection />
      <ServicesSection />
      <CTASection />
    </main>
  )
}
