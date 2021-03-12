import { AppProps } from 'next/app'
import { AnimatePresence } from 'framer-motion'
import { AppProvider } from '@state/AppContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <AnimatePresence
      exitBeforeEnter
    >
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </AnimatePresence>
  )
}

export default MyApp
