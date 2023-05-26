import React from "react";
import FloatingButton from "@/Components/FloatingButton";
import Navbar from "@/Components/Navbar";
import FooterAbout from "@/Components/FooterAbout";
import { usePage } from "@inertiajs/react";
import Toast from "@/Components/Toast";

const MainLayout = ({ children }) => {
    const page = usePage();
    return (
        <div className="relative flex flex-col min-h-screen antialiased bg-[#FFF8F0]">
            <Navbar />
            <div
                className={`${
                    page.component === "Course/CourseDetail" && "absolute"
                } w-full`}
            >
                {children}
                <FooterAbout />
            </div>
            <FloatingButton />
            <Toast />
        </div>
    );
};

export default MainLayout;
