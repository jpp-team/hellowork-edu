import Footer from "@/Components/Footer";
import Navbar from "@/Components/Navbar";
import { Head } from "@inertiajs/react";
import React from "react";

const MainLayout = ({ children }) => {
    return (
        <>
        <Head title="Home" />
            <div>
                <Navbar />
                {children}
                <Footer />
            </div>
        </>
    );
};

export default MainLayout;
