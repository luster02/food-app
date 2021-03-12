import React, { useState, useEffect } from 'react'
import { getUserItem, deleteUserItem } from '@utils/localStorage'

const AppContext = React.createContext({})

interface App {
    car: any[]
    setCar: (state: any) => void
}

export function AppProvider(props: any) {
    const [car, setCar] = useState<any[]>([])

    useEffect(() => {
        const date = getUserItem()
        if (date) {
            if (new Date(date).toLocaleDateString() < new Date().toLocaleDateString()) {
                deleteUserItem()
            }
        }
    }, [])

    const value = {
        car,
        setCar
    }

    return <AppContext.Provider {...props} value={value} />
}


export function useApp(): App {
    const context = React.useContext(AppContext)
    if (!context) throw new Error('useApp is out from provider')
    return (context as any)
}