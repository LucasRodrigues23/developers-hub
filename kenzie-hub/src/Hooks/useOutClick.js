import { useEffect, useRef } from 'react'

export const useOutClick = (callback) => {
  const ref = useRef(null)
  
  useEffect(() => {
    function modalOutClick(e) {
       const target = e.target
       const element = ref.current
       if (!element.contains(target)) {
          callback()
       }
    }
    window.addEventListener('mousedown', modalOutClick)

    return () => {
       window.removeEventListener('mousedown', modalOutClick)
    }
 }, [])

  return ref
}
