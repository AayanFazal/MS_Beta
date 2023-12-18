import { Inter } from 'next/font/google'
import './globals.css'
import { ColorSchemeScript, MantineProvider } from '@mantine/core'
import '@mantine/core/styles.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Nemesis Master Scout',
    description: 'Information about various FRC competitions using FRC 2590 Nemesis scouting data.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <ColorSchemeScript defaultColorScheme='dark' />
            </head>
            <body className={inter.className}>
                <MantineProvider defaultColorScheme='dark'>{children}</MantineProvider>
            </body>
        </html>
    )
}
