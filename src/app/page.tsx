import { About, Contact, Footer, Hero, Navbar, Pricing, Services, Work } from '@/components/Comp'


export default function Home() {
  return (
  <>
  <div className='min-[1500px]:hidden'>
  <Navbar />
  <Hero />
  <Services />
  <Work />
  <About />
  <Pricing />
  <Contact />
  <Footer />

  </div>
  
  
  
  </>
  )
}
