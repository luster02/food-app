import { useState } from 'react'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import { FaArrowLeft } from 'react-icons/fa'
import { fadeInUp, stagger } from './animations'
import { setUserItem } from '@utils/localStorage'

export default function Main({ setSwitchContent }: { setSwitchContent: any }) {
    const { push } = useRouter()
    const [table, setTable] = useState<string>('none')

    const continueFn = () => {
        const date = new Date().toLocaleDateString()
        push('/home')
        const createKey = `${date}`
        setUserItem(createKey)
    }
    const hideThis = () => setSwitchContent(false)

    return (
        <motion.div variants={stagger} className="flex h-screen w-screen justify-center items-center px-4">
            <motion.div variants={fadeInUp}>
                <div className="my-2">
                    <FaArrowLeft onClick={hideThis} className="text-xl cursor-pointer" />
                </div>
                <div className="my-4">
                    <p className="text-center text-2xl font-semibold">Selecciona tu mesa</p>
                </div>

                <select
                    className="bg-gray-300 w-full rounded-xl py-3 px-5 focus:outline-none focus:bg-indigo-200"
                    name="table"
                    onChange={e => setTable(e.target.value)}
                >
                    <option value="none"> seleccionar</option>
                    <option value="mesa1"> mesa 1</option>
                </select>

                <motion.div
                    whileHover={table !== 'none' ? { scale: 1.05 } : null}
                    whileTap={table !== 'none' ? { scale: 0.95 } : null}
                    className="flex justify-center my-5"
                >
                    <button
                        className={table !== 'none'
                            ? "bg-indigo-500 text-white py-2 px-4 rounded-xl focus:outline-none w-full hover:bg-indigo-700 transition-colors duration-300"
                            : "bg-gray-500  text-white py-2 px-4 rounded-xl focus:outline-none w-full cursor-not-allowed"
                        }
                        onClick={table !== 'none'
                            ? continueFn
                            : null
                        }
                    >
                        Continuar
                    </button>
                </motion.div>
            </motion.div>
        </motion.div >
    )
}