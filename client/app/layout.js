import { Inter } from 'next/font/google'
import './globals.css'
import { ColorSchemeScript, MantineProvider, createTheme } from '@mantine/core'
import '@mantine/core/styles.css'
import classes from './overrides.module.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Nemesis Master Scout',
    description: 'Information about various FRC competitions using FRC 2590 Nemesis scouting data.',
}

const theme = createTheme({
    fontFamily: inter.style,
    components: {
        Autocomplete: {
            classNames: {
                input: classes.input,
                option: classes.option,
                label: classes.label
            }
        },
        MultiSelect: {
            classNames: {
                input: classes.input,
                option: classes.option,
                label: classes.label
            }
        }
    }
})

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <ColorSchemeScript defaultColorScheme='dark' />
            </head>
            <body className={inter.className}>
                <MantineProvider defaultColorScheme='dark' theme={theme}>{children}</MantineProvider>
            </body>
        </html>
    )
}