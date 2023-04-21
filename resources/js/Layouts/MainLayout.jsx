import React from "react";
import FloatingButton from "@/Components/FloatingButton";
import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import FooterAbout from "@/Components/FooterAbout";

const MainLayout = ({ children }) => {
    return (
        <div className="flex flex-col min-h-screen antialiased bg-[#FFF8F0]">
            <Navbar />
            {children}
            <FooterAbout />
            <FloatingButton />
        </div>
    );
};

export default MainLayout;
