import assets from "@/Data/assets";
import React from "react";
import PrimaryButton from "./PrimaryButton";

const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-8">
            <img src={assets.logoMin} className="" />
            <ul className="flex gap-2">
                <li>
                    <PrimaryButton>Course</PrimaryButton>
                </li>
                <li>
                    <PrimaryButton>Login</PrimaryButton>
                </li>
                <li>
                    <PrimaryButton>Register</PrimaryButton>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
