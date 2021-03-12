import { motion } from 'framer-motion'
import { Fragment, useState } from 'react'
import { fadeInUp } from './animations'
import Modal from '../detailsModal'
import { AnimatePresence } from 'framer-motion'

const items = [
    { name: 'hamburguesa grande', desc: 'hamburguesa grande con ingredientes naturales', price: 20 },
    { name: 'hamburguesa mediana', desc: 'hamburguesa mediana con ingredientes naturales', price: 13 },
    { name: 'hamburguesa pequeña', desc: 'hamburguesa pequeña con ingredientes naturales', price: 9 },
]

export default function List() {
    const [showDetailsModal, setShowDetailsModal] = useState(false)
    const [item, setItem] = useState<any>(null)

    const open = (Item: any) => {
        setShowDetailsModal(true)
        setItem(Item)
    }

    const onClose = () => {
        setItem(null)
    }

    return (
        <Fragment>
            <div className="grid grid-cols-1 lg:grid-cols-3  lg:gap-y-4  ">
                {items.map((item, index) => (
                    <motion.div
                        key={index}
                        className="w-ful lg:max-w-xs  my-3 p-1 cursor-pointer"
                        whileTap={{ scale: 0.95 }}
                        onClick={() => open(item)}
                    >
                        <p className="mb-3 font-semibold text-xl ">{item.name}</p>
                        <div className="flex justify-center">
                            <motion.div variants={fadeInUp}>
                                <img
                                    src="/food.png"
                                    className="w-full lg:w-auto lg:h-48"
                                />
                            </motion.div>
                        </div>
                        <div className="mt-2 space-y-2">
                            <p className="font-thin">{item.desc}</p>
                            <p>$ {item.price}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
            <AnimatePresence>
                {showDetailsModal && <Modal handleShow={setShowDetailsModal} item={item} onClose={onClose} />}
            </AnimatePresence>
        </Fragment>
    )
}