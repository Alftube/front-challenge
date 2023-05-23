import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import ProducstSection from '@/components/ProductsSection'
import Walktrhough from '@/components/Walktrhough'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar />


    <Hero />

    <Walktrhough />

    <ProducstSection />

    
    <Footer />


    </>
    )
}
