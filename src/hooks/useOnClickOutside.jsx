import { useEffect } from "react"

export default function useClickOutside(elementRef, callback) {
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (elementRef && elementRef.current && !elementRef.current.contains(event.target)) {
                callback()
            }
            return
        }
        document.addEventListener('click', handleClickOutside, true)
        return () => {
            document.removeEventListener('click', handleClickOutside, true)
        }
    }, [elementRef, callback])
}