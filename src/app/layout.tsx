import { Poppins } from 'next/font/google'
import { Navbar } from './features/landing-page/Navbar'
import './globals.css'

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
      </body>
    </html>
  )
}