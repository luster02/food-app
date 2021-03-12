import { useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaTimes, FaTrash, FaPlus, FaMinus } from 'react-icons/fa'
import { useApp } from '@state/AppContext'

export default function Car({ handleShow }: { handleShow: any }) {
    const { car, setCar } = useApp()

    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => (document.body.style.overflow = 'auto' as any)
    }, [])

    const addMoreItemCount = (item) => {
        const founIndex = car.findIndex(el => el === item)
        if (!car[founIndex]?.amount) car[founIndex] = { ...car[founIndex], amount: 1 }
        car[founIndex] = { ...item, amount: car[founIndex].amount + 1 }
    }

    const deleteItem = (item) => {
        setCar(car.filter(it => it.name !== item.name))
    }

    const removeItemCount = (item) => {
        const founIndex = car.findIndex(el => el === item)
        if (car[founIndex].amount >= 1) return
        car[founIndex] = { ...item, amount: item.amount - 1 }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
        >
            <motion.div
                initial={{ y: 50 }}
                animate={{ y: 0 }}
                exit={{ y: 150 }}
                className="justify-center items-end flex overflow-x-hidden overflow-y-hidden fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="h-5/6 lg:h-3/6  bg-white rounded-t-2xl w-full relative">
                    <div className="w-full  border-b-2 border-gray-200">
                        <div className="absolute top-3 right-3">
                            <FaTimes onClick={() => handleShow(false)} className="text-lg cursor-pointer " />
                        </div>
                        <p className="font-semibold text-xl text-center mt-2">Mi orden</p>
                    </div>

                    <div className="w-full  h-full overflow-y-auto lg:px-5 px-2">
                        {car.map((el, index) => (
                            <div key={index} className="flex w-full mt-3 items-center">
                                <div className="flex w-full justify-between lg:items-center">
                                    <div className="flex ">
                                        <div className="lg:h-16 lg:w-16 h-14 w-14">
                                            <img src="/food.png" alt="" />
                                        </div>
                                        <div>
                                            <p>{el?.name}</p>
                                            <p>{el?.amount || 1}</p>
                                        </div>
                                    </div>
                                    <div className="flex space-x-2">
                                        {/* {el?.amount > 1 && <FaMinus onClick={() => removeItemCount(el)} className="mt-2 lg:mt-0" />} */}
                                        {/* <FaPlus onClick={() => addMoreItemCount(el)} className="mt-2 lg:mt-0" /> */}
                                        <FaTrash onClick={() => deleteItem(el)} className="mt-2 lg:mt-0" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="absolute bottom-0  w-full">
                        <div
                            className={car.length > 0
                                ? 'flex h-14  bg-black text-white justify-center items-center cursor-pointer hover:bg-gray-700 transition-colors duration-300'
                                : 'flex h-14  bg-gray-500 text-white justify-center items-center cursor-not-allowed '
                            }
                        >
                            Ordenar {car.length}
                        </div>
                    </div>
                </div>
            </motion.div>

            <div className="opacity-50 fixed inset-0 z-40 bg-black" />
        </motion.div>
    )
}