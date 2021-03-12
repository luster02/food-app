import { useEffect } from 'react'
import Modal from '@components/app/modal'
import { useApp } from '@state/AppContext'

export default function DetailsModal({ handleShow, onClose, item }: { handleShow: any, onClose?: any, item: any }) {
    const { car, setCar } = useApp()

    useEffect(() => {
        return () => {
            if (onClose) onClose()
        }
    }, [])

    const add = () => {
        setCar(arr => [...arr, { ...item }])
    }

    return (
        <Modal>
            <div className="max-w-xl mx-auto sm:px-6 lg:px-8">
                <div className="overflow-hidden shadow-md bg-white rounded-2xl">

                    <div className="px-6 py-4  border-b border-gray-200 font-bold uppercase">
                        Agregar a la orden {item?.name}
                    </div>


                    <div className="p-6  border-b border-gray-200">

                        {car.filter(it => it.name === item?.name).length === 0
                            ? 'Agregar este producto a la orden'
                            : 'El producto ya se encuentra en tu orden'
                        }
                    </div>


                    <div className="px-6 py-3  border-gray-200 text-right space-x-4">
                        <button
                            className="bg-gray-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-gray-400 focus:outline-none  uppercase rounded-2xl"
                            onClick={() => handleShow(false)}
                        >
                            cerrar
                        </button>
                        {car.filter(it => it.name === item?.name).length === 0 && <button
                            className="bg-indigo-500 shadow-md text-sm text-white font-bold py-3 md:px-8 px-4 hover:bg-indigo-400 focus:outline-none  uppercase rounded-2xl"
                            onClick={add}
                        >
                            Agregar
                        </button>}
                    </div>
                </div>
            </div>
        </Modal>
    )
}