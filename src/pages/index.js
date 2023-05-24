import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Walktrhough from '@/components/Walktrhough'
import { Inter } from 'next/font/google'
import Navbar from '../components/Navbar'
import Products from '@/components/Products'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Navbar />


    <Hero />

    <Walktrhough />

    <Products />

    
    <Footer />


    </>
    )
}
