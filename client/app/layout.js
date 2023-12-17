import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Nemesis Master Scout',
    description: 'Information about various FRC competitions using data collected by Nemesis (FRC 2590) scouting',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={`${inter.className} container`}>
                <Navbar />
                {children}
            </body>
        </html>
    )
}
