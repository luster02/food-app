import { ReactNode, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Modal({ opacity, children }: { opacity?: number, children: ReactNode }) {

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => (document.body.style.overflow = 'auto' as any)
    }, [])

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                {children}
            </motion.div>
            {!opacity && <div className="opacity-40 fixed inset-0 z-40 bg-black" />}
            {opacity === 50 && <div className="opacity-75 fixed inset-0 z-40 bg-black" />}
            {opacity === 100 && <div className="opacity-100 fixed inset-0 z-40 bg-black" />}
        </motion.div>
    )
}