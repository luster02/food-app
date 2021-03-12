import Head from 'next/head'
import { ReactNode } from "react";
import { motion } from 'framer-motion'

export default function Template({ children, title }: { children: ReactNode, title?: string }) {
    
    return (
        <motion.div
            exit={{ opacity: 0 }}
            initial='initial'
            animate='animate'
        >
            <Head>
                <title>{title}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {children}
        </motion.div>
    )
}