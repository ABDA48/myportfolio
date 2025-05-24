
import { useState, useEffect } from "react";
import { Link } from "@inertiajs/react";
import { Button } from "./ui/button";
import { Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="font-bold text-2xl text-portfolio-blue">
            <span className="text-portfolio-darkblue">J.A.</span>M
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link href="/" className="text-gray-800 hover:text-portfolio-blue transition-colors">
            {t('home')}
          </Link>
          <Link href="/services" className="text-gray-800 hover:text-portfolio-blue transition-colors">
            {t('services')}
          </Link>
          <Link href="/projects" className="text-gray-800 hover:text-portfolio-blue transition-colors">
            {t('projects')}
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-portfolio-blue transition-colors">
            {t('about')}
          </Link>
          <Link href="/blog" className="text-gray-800 hover:text-portfolio-blue transition-colors">
            {t('blog')}
          </Link>
          <Link href="/contact">
            <Button className="bg-portfolio-blue hover:bg-portfolio-darkblue text-white">
              {t('contact')}
            </Button>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="ml-2">
                <Globe className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
            <DropdownMenuItem onClick={() => setLanguage("fr")}>
                🇫🇷 Français {language === "fr" && "✓"}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("en")}>
                🇬🇧 English {language === "en" && "✓"}
              </DropdownMenuItem>
             
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" className="mr-2">
                <Globe className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setLanguage("en")}>
                🇬🇧 English {language === "en" && "✓"}
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setLanguage("fr")}>
                🇫🇷 Français {language === "fr" && "✓"}
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <button
            className="text-gray-800"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-4 px-6 absolute top-full left-0 right-0 flex flex-col space-y-4 animate-fade-in">
          <Link href="/" className="text-gray-800 hover:text-portfolio-blue transition-colors" onClick={() => setMobileMenuOpen(false)}>
            {t('home')}
          </Link>
          <Link href="/services" className="text-gray-800 hover:text-portfolio-blue transition-colors" onClick={() => setMobileMenuOpen(false)}>
            {t('services')}
          </Link>
          <Link href="/projects" className="text-gray-800 hover:text-portfolio-blue transition-colors" onClick={() => setMobileMenuOpen(false)}>
            {t('projects')}
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-portfolio-blue transition-colors" onClick={() => setMobileMenuOpen(false)}>
            {t('about')}
          </Link>
          <Link href="/blog" className="text-gray-800 hover:text-portfolio-blue transition-colors" onClick={() => setMobileMenuOpen(false)}>
            {t('blog')}
          </Link>
          <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>
            <Button className="bg-portfolio-blue hover:bg-portfolio-darkblue text-white w-full" onClick={() => setMobileMenuOpen(false)}>
              {t('contact')}
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
