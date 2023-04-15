import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import React from "react";

const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen antialiased bg-[#FFF8F0]">
            <Navbar />
            {children}
            <Footer />
        </div>
    );
};

export default MainLayout;
