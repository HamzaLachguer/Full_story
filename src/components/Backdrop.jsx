import { useGSAP } from "@gsap/react";

import gsap from "gsap";
import { useRef } from "react";


const Backdrop = ({article}) => {

  const backdropRef = useRef(null)

  useGSAP(
    () => {
      gsap.fromTo(
        backdropRef.current,
        {scale: 1.2},
        {scale: 1, duration: 1, ease: "power1.inOut"}
      )
    }, [article])

  return (
      <div className="relative h-full">

        <div className="overflow-hidden h-full w-full relative flex items-center">
          <img 
            className="w-full object-center object-cover" 
            src={article.imgSrc} 
            alt={article.heading} />

          <div className="h-full w-full absolute top-0 left-0 bg-linear-to-t from-secondary via-transparent to-black backdrop-blur-lg" />
        </div>

        <div className="absolute top-0 right-0 w-full h-full overflow-hidden flex justify-end">
          <img 
            ref={backdropRef}
            src={article.imgSrc} 
            className="md:aspect-[1.25/1] h-full w-full md:w-fit object-cover mask-l-from-70%" 
            alt={article.heading} />

          <div 
            className="absolute inset-0 bg-linear-to-r from-[#00000090] md:from-black from-10% via-75% via-white to-[#00000090] md:to-black to-100% mix-blend-multiply" 
          />
          <div 
            className="absolute inset-0 bg-linear-to-t from-[#00000090] md:from-black from-0% via-30% via-white to-[#00000090] md:to-black to-120% mix-blend-multiply md:hidden" 
          />
        </div>
      </div>
  )
}

export default Backdrop;