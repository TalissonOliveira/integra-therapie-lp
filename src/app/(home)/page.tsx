import { AboutSection } from './components/sections/about-section'
import { HeroSection } from './components/sections/hero-section'
import { TeamSection } from './components/sections/team-section'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <TeamSection />
    </main>
  )
}
