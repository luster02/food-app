import Image from 'next/image'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { fadeInUp, stagger } from './animations'
import { getUserItem } from '@utils/localStorage'

export default function Wellcome({ setSwitchContent }: { setSwitchContent: any }) {
    const { replace } = useRouter()

    const setTable = () => {
        if (getUserItem()) {
            replace('/home')
        } else {
            setSwitchContent(true)
        }
    }

    return (
        <motion.div variants={stagger} className="flex h-screen w-screen justify-center items-center px-4">
            <motion.div variants={fadeInUp}>
                <div className="my-4">
                    <p className="text-center text-2xl font-semibold">!Bienvenido¡</p>
                </div>
                <div className="hidden lg:block"> <Image src="/undraw_healthy_options_sdo3.svg" width={500} height={500} /></div>
                <div className="block lg:hidden"> <Image src="/undraw_healthy_options_sdo3.svg" width={350} height={350} /></div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="flex justify-center">
                    <button
                        className="bg-indigo-500 text-white py-2 px-4 rounded-xl focus:outline-none w-full hover:bg-indigo-700 transition-colors duration-300"
                        onClick={setTable}
                    >
                        Entrar
                    </button>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}