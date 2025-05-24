
import { Link } from "@inertiajs/react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center">
              <div className="font-bold text-2xl text-portfolio-blue">
                <span className="text-portfolio-darkblue">A</span>K
              </div>
            </Link>
            <p className="mt-2 text-gray-600 max-w-md">
              Creating beautiful, functional websites and digital experiences that delight users and drive business growth.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 sm:gap-16">
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-600 hover:text-portfolio-blue transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-600 hover:text-portfolio-blue transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-600 hover:text-portfolio-blue transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#projects" className="text-gray-600 hover:text-portfolio-blue transition-colors">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link href="#blog" className="text-gray-600 hover:text-portfolio-blue transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="text-gray-600">
                  <span className="font-medium">Email:</span> hello@yoursite.com
                </li>
                <li className="text-gray-600">
                  <span className="font-medium">Phone:</span> +1 (123) 456-7890
                </li>
                <li className="text-gray-600">
                  <span className="font-medium">Address:</span> 123 Web Street, Digital City
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold mb-4">Social</h3>
              <div className="flex space-x-4">
                <a href="#" className="bg-gray-100 hover:bg-portfolio-blue hover:text-white p-2 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-gray-100 hover:bg-portfolio-blue hover:text-white p-2 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                  </svg>
                </a>
                <a href="#" className="bg-gray-100 hover:bg-portfolio-blue hover:text-white p-2 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a href="#" className="bg-gray-100 hover:bg-portfolio-blue hover:text-white p-2 rounded-full transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-600 hover:text-portfolio-blue transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-gray-600 hover:text-portfolio-blue transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
