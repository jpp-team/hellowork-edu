import assets from "@/Data/assets";
import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";

const menus = [
    {name: ''}
]

const Navbar = () => {
    const [menuIsHidden, setMenuIsHidden] = useState(true);

    function handleMenuButtonClick() {
        setMenuIsHidden(!menuIsHidden);
    }
    return (
        <nav>
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center p-8">
                    <img src={assets.logoMin} className="" />
                    <ul className="hidden md:flex items-center gap-2">
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

                    <div class="md:hidden flex items-center">
                        <button class="outline-none mobile-menu-button" onClick={handleMenuButtonClick}>
                            <svg class=" w-8 h-12 text-gray-800 hover:text-gray-600 "
                                x-show="!showMenu"
                                fill="none"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div class="md:hidden mobile-menu">
                {menuIsHidden && (
                    <ul class="">
                        <li><a href="#" class="block text-sm px-2 py-4 hover:text-white hover:bg-gray-800 transition duration-300">Course</a></li>
                        <li><a href="#" class="block text-sm px-2 py-4 hover:text-white hover:bg-gray-800 transition duration-300">Login</a></li>
                        <li><a href="#" class="block text-sm px-2 py-4 hover:text-white hover:bg-gray-800 transition duration-300">Register</a></li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
