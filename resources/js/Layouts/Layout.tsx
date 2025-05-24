import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";
 
 

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
   
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />

      {/* Main Content (Pushes the footer down when content is small) */}
      <main className="relative">
        <div >{children}</div>
      </main>

      {/* Footer (Always at the bottom) */}
      <Footer />
    </div>
    
  );
};

export default Layout;
