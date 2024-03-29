import { Inter } from 'next/font/google'
import './globals.css'
import { SessionProvider } from './components.js/SessionProvider'
import { auth } from '@/auth'
import Header from './components.js/Header'
import Provider from './components.js/providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Amazon 2.0',
  description: 'Amazon clone',
}

export default async function RootLayout({ children }) {

  const session = await auth();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <SessionProvider>
            {/**this is the header of the page */}
            <Header />
            {children}
          </SessionProvider>
        </Provider>
      </body>
    </html>
  )
}
