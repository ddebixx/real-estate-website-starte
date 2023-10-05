import { Poppins } from 'next/font/google'
import { Navbar } from './components/Navbar'
import './globals.css'
import { Footer } from './components/Footer'

export const metadata = {
  title: 'kovcheg',
}

const poppins = Poppins({ subsets: ["latin"], weight: ['100', '200', '300', '400', '500', '600', '700'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}