import { useState } from 'react'
import { FaShoppingBag, FaBars } from 'react-icons/fa'
import Categories from '../categories'
import List from '../list'
import Car from '../car'
import { useApp } from '@state/AppContext'
import { AnimatePresence } from 'framer-motion'

export default function Main() {
    const { car } = useApp()
    const [showCar, setShowCar] = useState(false)

    return (
        <div className="h-screen w-screen p-8 overflow-x-hidden">
            <div className="mt-2 mb-5">
                <FaBars className="cursor-pointer text-xl" />
            </div>

            <div className="flex flex-row justify-between w-full mb-4">
                <div>
                    <h1 className="font-thin text-xl">Comida</h1>
                    <h2 className="text-xl">Especial para ti</h2>
                </div>
                <div className="mt-5">
                    <div onClick={() => setShowCar(true)} className="relative cursor-pointer">
                        <div className="absolute -top-3 -right-3">
                            {car.length > 0 && <div className="bg-red-500 h-5 w-5  rounded-full flex justify-center items-center text-white p-1">
                                {car.length}
                            </div>}
                        </div>
                        <FaShoppingBag className=" text-xl" />
                    </div>
                </div>
            </div>

            <Categories />
            <div className="lg:max-w-6xl lg:mx-auto w-full ">
                <div className="flex justify-center">
                    <List />
                </div>
            </div>
            <AnimatePresence>
                {showCar && <Car handleShow={setShowCar} />}
            </AnimatePresence>
        </div>
    )
}