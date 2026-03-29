import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import TrustBar from '@/components/TrustBar'
import Stats from '@/components/Stats'
import Services from '@/components/Services'
import ClinicPhotos from '@/components/ClinicPhotos'
import Equipment from '@/components/Equipment'
import DirectorMessage from '@/components/DirectorMessage'
import PatientReviews from '@/components/PatientReviews'
import NewsSection from '@/components/NewsSection'
import Partnership from '@/components/Partnership'
import BusinessHours from '@/components/BusinessHours'
import CtaBanner from '@/components/CtaBanner'
import Footer from '@/components/Footer'
import FloatingCta from '@/components/FloatingCta'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Stats />
        <Services />
        <ClinicPhotos />
        <Equipment />
        <DirectorMessage />
        <PatientReviews />
        <NewsSection />
        <Partnership />
        <BusinessHours />
        <CtaBanner />
      </main>
      <Footer />
      <FloatingCta />
    </>
  )
}
