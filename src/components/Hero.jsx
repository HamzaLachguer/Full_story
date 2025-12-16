import { useCallback, useEffect, useRef, useState } from "react";
import { ARTICLES } from "../data/data";
import Backdrop from "./Backdrop";
import Content from "./Content";

const INTERVAL_DELAY = 5000;

const Hero = () => {
  const [articleIndex, setArticleIndex] = useState(0);
  const intervalRef = useRef(null);

  const switchTo = useCallback((i) => setArticleIndex((i + ARTICLES.length) % ARTICLES.length), []);

  const nextArticle = useCallback(() => switchTo(articleIndex + 1), [articleIndex, switchTo]);
  const prevArticle = useCallback(() => switchTo(articleIndex - 1), [articleIndex, switchTo]);

  useEffect(() => {
    intervalRef.current = setInterval(nextArticle, INTERVAL_DELAY);
    return () => clearInterval(intervalRef.current);
  })
  
  return (
    <div className="relative h-122.5 md:h-130 lg:h-158.75">
      {/* BG */}
      <Backdrop article={ARTICLES[articleIndex]} />

      {/* Text content */}
      <Content 
        article={ARTICLES[articleIndex]} 
        length={ARTICLES.length} 
        articleIndex={articleIndex} 
        onSwitch={switchTo} 
        onNext={nextArticle} 
        onPrev={prevArticle} 
      />
    </div>
  )
}

export default Hero;