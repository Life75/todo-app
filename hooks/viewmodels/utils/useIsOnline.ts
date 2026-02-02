import { useState, useEffect } from "react"
import {toast } from 'sonner'
export default function useIsOnline() {

    const [isOnline, setIsOnline] = useState(() => 
        typeof navigator !== 'undefined' ? navigator.onLine : true
    )
    
    useEffect(() => {
        function handleOnline() {
            setIsOnline(true)
            toast("You are back online")
        }

        function handleOffline() {
            setIsOnline(false)
            toast.error("You are offline")
        }

        window.addEventListener('online', handleOnline)
        window.addEventListener('offline', handleOffline)
        return () => {
            window.removeEventListener('online', handleOnline)
            window.removeEventListener('offline', handleOffline)
        }
    }, [])


    return { isOnline }
}