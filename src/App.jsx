import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Toaster } from 'sonner'
import Navbar from './components/Navbar'
import { HeroSection } from './components/ui/hero-section-2'
import About from './components/About'
import SignatureItems from './components/SignatureItems'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Contact from './components/Contact'
import Footer from './components/Footer'
import OrderModal from './components/OrderModal'
import Loader from './components/Loader'
import InfiniteCarousel from './components/InfiniteCarousel'

const HERO_IMAGE = 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=1920&q=80'

function App() {
  const [loading, setLoading] = useState(true)
  const [orderOpen, setOrderOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="min-h-screen bg-background text-foreground">
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#F5F9F5]"
            exit={{ opacity: 0, transition: { duration: 0.5 } }}
          >
            <Loader />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 1 } }}
      >
        <Navbar onOrder={() => setOrderOpen(true)} />

        <HeroSection
          onOrder={() => setOrderOpen(true)}
          slogan="BAKING KINDNESS EVERY DAY"
          title={
            <>
              Where every <br />
              <span className="text-primary italic">bite</span> is made with kindness
            </>
          }
          subtitle="Fresh pastries, cakes, and confectionaries — lovingly baked in Madanryting, Shillong. Affordable treats for every occasion."
          callToAction={{
            text: 'ORDER NOW',
          }}
          backgroundImage={HERO_IMAGE}
          contactInfo={{
            website: 'be kind bakery',
            phone: '+91 96126 71091',
            address: 'Madanryting, Shillong',
          }}
        />

        <About />
        <SignatureItems />
        <Gallery />
        <Reviews />
        <Contact onOrder={() => setOrderOpen(true)} />
        <InfiniteCarousel />
        <Footer />
      </motion.div>

      <OrderModal open={orderOpen} onClose={() => setOrderOpen(false)} />
      <Toaster richColors position="bottom-right" />
    </div>
  )
}

export default App
