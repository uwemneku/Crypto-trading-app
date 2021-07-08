import  { useEffect, useState } from 'react'

export default function useIntersection(element, rootMargin) {
   const [isVisible, setIsVisible] = useState(false)
   useEffect(() => {
       const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting)
       }, {rootMargin});

       if(element){
           element && observer.observe(element)
       }

       return () => observer.unobserve(element)
   }, [])

   return isVisible
}
