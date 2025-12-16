
const backdrop = ({article}) => {
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
            src={article.imgSrc} 
            className="md:aspect-[1.25/1] h-full w-full md:w-fit object-cover mask-l-from-70%" 
            alt={article.heading} />

          <div className="absolute inset-0 bg-linear-to-r from-black from-10% via-75% via-white to-black to-100% mix-blend-multiply"></div>
        </div>
      </div>
  )
}

export default backdrop;