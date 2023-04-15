import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import React from "react";

const MainLayout = ({ children }) => {
    return (
        <>
        <Head title="Home" />
            <div className="flex flex-col min-h-screen antialiased bg-[#FFF8F0]">
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    );
};

export default MainLayout;
