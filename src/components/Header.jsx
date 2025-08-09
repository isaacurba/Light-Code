import { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <section>
          <nav className="container flex justify-between items-center relative z-50">
        <div className="p-5 text-color-secondary font-bold text-3xl">
          <a href="#home">
            <span className="text-color-white">Light</span>code.
          </a>
        </div>

        {/* Desktop menu */}
        <div>
          <ul className="hidden lg:flex items-center space-x-6">
            <li><a href="#home" className="text-color-white hover:text-color-secondary ease-in duration-200">Home</a></li>
            <li><a href="#features" className="text-color-white hover:text-color-secondary ease-in duration-200">Features</a></li>
            <li><a href="#testimonial" className="text-color-white hover:text-color-secondary ease-in duration-200">Testimonial</a></li>            
            <li><a href="#pricing" className="text-color-white hover:text-color-secondary ease-in duration-200">Pricing</a></li>
            <li><a href="#blog" className="text-color-white hover:text-color-secondary ease-in duration-200">Blog</a></li>
            <li><a href="#contact" className="text-color-white hover:text-color-secondary ease-in duration-200">Contact</a></li>
            <li>
              <button className="btn">
                Free Trial
              </button>
            </li>
          </ul>
        </div>

        {/* Hamburger Icon */}
        <div onClick={toggleMenu} className="lg:hidden cursor-pointer z-50">
          <i className={`text-color-white fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="bg-color-primary-dark h-[100vh] w-full absolute top-0 left-0 z-40 ">
            <ul className="h-full grid place-items-center py-20 space-y-4">
              <li><a onClick={closeMenu} href="#home" className="text-color-white hover:text-color-secondary ease-in duration-200">Home</a></li>
              <li><a onClick={closeMenu} href="#features" className="text-color-white hover:text-color-secondary ease-in duration-200">Testimonial</a></li>
              <li><a onClick={closeMenu} href="#pricing" className="text-color-white hover:text-color-secondary ease-in duration-200">Pricing</a></li>
              <li><a onClick={closeMenu} href="#blog" className="text-color-white hover:text-color-secondary ease-in duration-200">Blog</a></li>
              <li><a onClick={closeMenu} href="#contact" className="text-color-white hover:text-color-secondary ease-in duration-200">Contact</a></li>
              <li>
                <button className="bg-color-secondary px-9 py-3 rounded-md capitalize font-bold text-color-white hover:opacity-80 ease-in duration-200">
                  Free Trial
                </button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </section>

  );
};

export default Header;
