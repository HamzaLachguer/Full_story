import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { label: "World", href: "/world" },
  { label: "U.S.", href: "/us" },
  { label: "Business", href: "/business" },
  { label: "Politics", href: "/politics" },
  { label: "Economy", href: "/economy" },
  { label: "Finance", href: "/finance" },
  { label: "Health", href: "/health" },
  { label: "Tech", href: "/tech" },
  { label: "Sports", href: "/sports" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) {
      return;
    }

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);

  }, [isMenuOpen])

  return (
    <header className={`fixed top-0 w-full bg-secondary px-4 md:px-6 lg:px-15 text-white flex items-start transition-all duration-300 ${ isMenuOpen ? "h-screen lg:h-16" : "h-16 overflow-hidden" }`}>

      <a 
        href="/" 
        className="bg-primary h-21.25 w-21.25 grid place-items-center fixed top-0"
        aria-label="go home page"
        >
        <img className="h-15 w-15" src="/logo-mark.svg" alt="homePage" />
      </a>

      <div className="lg:pl-29.25 capitalize flex justify-end items-center h-16 w-full relative">

        {/* Primary navigation */}
        <nav
          id="primary-navigation"
          className={`
            absolute top-31 w-full left-0 pr-6 font-medium
            lg:static lg:block
            ${ isMenuOpen ? "block" : "hidden lg:block"}
          `}
          aria-label="Primary navigation"
        >
          <ul className="text-lg px-2 lg:px-0 lg:text-sm flex items-start gap-6 flex-col lg:flex-row lg:text-center">

            { NAV_ITEMS.map(item => (
              <li key={item.href}><a href={item.href}>{item.label}</a></li>
            )) }

          </ul>
        </nav>

        <button 
          className="hidden lg:flex h-8.75 cursor-pointer"
          aria-label="search button"
          type="button"
        >
          <span className="text-xs flex items-center bg-[#cbd5e166] w-53.75 pl-4">Search...</span>
          <span className="h-8.75 w-8.75 bg-primary grid place-items-center text-xl"><i className="ri-search-line" aria-hidden="true" /></span>
        </button>

        <button 
          className="flex flex-col justify-center items-center gap-2 h-7.5 w-7.5 lg:hidden cursor-pointer relative"
          aria-expanded={ isMenuOpen }
          aria-controls="primary-navigation"
          aria-label={ isMenuOpen? "close menu" : "open menu"}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className={`h-0.5 w-6 bg-white transition-all duration-300 ${ isMenuOpen? "absolute rotate-45" : ""}`}></div>
          <div className={`h-0.5 w-6 bg-white transition-all duration-300 ${ isMenuOpen? "absolute -rotate-45" : ""}`}></div>
        </button>
      </div>
    </header>
  )
}

export default Header;