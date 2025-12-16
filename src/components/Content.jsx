import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

const Content = ( {article, length, articleIndex, onSwitch, onNext, onPrev} ) => {

  const headingRef = useRef(null);
  const paraRef = useRef(null);

  useGSAP(() => {
    gsap.fromTo(headingRef.current, 
      { opacity: 1, x: -700 },
      { opacity: 1, x: 0, duration: 1, ease: "power1.inOut" }
    )

    
      gsap.fromTo(paraRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 2, ease: "power1.inOut" }
      )
  }, [articleIndex])

  return (
    <div 
      className="absolute w-full bottom-0 left-0 text-white p-6 md:pb-15 flex flex-col md:flex-row md:items-end md:justify-between gap-10.5"
    >
      <article className="flex flex-col gap-5 max-w-100 md:max-w-125 lg:max-w-150 group">
        <h1 
          ref={headingRef} 
          className="text-2xl md:text-[26px] lg:text-[44px] font-semibold group-hover:text-primary transition-all duration-300"
        >{article.heading}</h1>

        <div className="hidden md:flex flex-col gap-7">
          <p ref={paraRef} className="text-base">{article.description}</p>

          <ul className="flex items-center gap-5">
            <li className="">
              <button 
                type="button" 
                className="text-[#ffffff80] font-medium leading-none flex items-center gap-2 hover:text-primary transition-all duration-300">
                <div className="rounded-full bg-[#ffffff1a] h-5.25 w-5.25 border border-[#ffffff50] grid place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" height={12} viewBox="0 0 256 256" focusable="false"><g weight="regular"><path fill="#ffffff90" d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></g></svg>
                </div>
                <span className="text-sm">Read Story</span>
              </button>
            </li>

            <li className="">
              <button 
                type="button" 
                className="text-[#ffffff80] font-medium leading-none flex items-center gap-2 hover:text-primary transition-all duration-300">
                <div className="rounded-full bg-[#ffffff1a] h-5.25 w-5.25 border border-[#ffffff50] grid place-items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" height={12} viewBox="0 0 256 256" focusable="false" >
                    <g weight="regular"><path fill="#ffffff90" d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path></g>
                  </svg>
                </div>
                <span className="text-sm capitalize">{article.author}</span>
              </button>
            </li>

            <li className="text-[#ffffff80] font-medium leading-none flex items-center gap-2">
              <div className="rounded-full bg-[#ffffff1a] h-5.25 w-5.25 border border-[#ffffff50] grid place-items-center">
                <svg xmlns="http://www.w3.org/2000/svg" height={12} viewBox="0 0 256 256" focusable="false"><g fill="#ffffff90" weight="regular"><path d="M128,40a96,96,0,1,0,96,96A96.11,96.11,0,0,0,128,40Zm0,176a80,80,0,1,1,80-80A80.09,80.09,0,0,1,128,216ZM173.66,90.34a8,8,0,0,1,0,11.32l-40,40a8,8,0,0,1-11.32-11.32l40-40A8,8,0,0,1,173.66,90.34ZM96,16a8,8,0,0,1,8-8h48a8,8,0,0,1,0,16H104A8,8,0,0,1,96,16Z"></path></g></svg>
              </div>
              <span className="text-sm">{article.readIn}</span>
            </li>
          </ul>
        </div>
      </article>

      <div className="flex gap-2.5 items-center justify-between">
        <div className="flex gap-1">
          { Array.from({length: length}).map((_, index) => {
            return (
              <button
                key={index}
                type="button"
                aria-label={`go to slide ${index}`}
                className={`h-1.25 bg-[#cbd5e166] ${index === articleIndex ? "w-12.5" : "w-1.25"}
                    relative after:content-[''] after:absolute after:h-full  after:top-0 after:bg-primary after:transition-all after:duration-5000 ${index === articleIndex ? "after:w-full" : "after:w-0"}`}
                onClick={() => onSwitch(index)}
              ></button>
            )
          }) }
        </div>

        <div className="flex gap-2.5">
          <button 
            type="button"
            aria-label="next slide"
            className="h-8.75 w-8.75 rounded-full bg-[#cbd5e166] grid place-items-center text-base text-[#ffffff80]"
            onClick={onNext}
          >
            <i className="ri-arrow-left-line"></i>
          </button>
          <button 
            type="button"
            aria-label="previous slide"
            className="h-8.75 w-8.75 rounded-full bg-[#cbd5e166] grid place-items-center text-base text-[#ffffff80]"
            onClick={onPrev}
          >
            <i className="ri-arrow-right-line"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Content;