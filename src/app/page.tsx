import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Services from '@/components/Services'
import DirectorMessage from '@/components/DirectorMessage'
import BusinessHours from '@/components/BusinessHours'
import PatientReviews from '@/components/PatientReviews'
import Equipment from '@/components/Equipment'
import ImprovementComparison from '@/components/ImprovementComparison'
import CtaBanner from '@/components/CtaBanner'
import Footer from '@/components/Footer'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <DirectorMessage />
        <PatientReviews />
        <Equipment />
        <BusinessHours />
        <ImprovementComparison />
        <CtaBanner />
      </main>
      <Footer />
    </>
  )
}
