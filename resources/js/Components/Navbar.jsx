import { logoMin } from "@/Data/assets";
import { router } from "@inertiajs/react";
import React, { useState } from "react";
import PrimaryButton from "./PrimaryButton";
import Button from "./Button";
import { Link } from "@inertiajs/react";

const menus = [{ name: "" }];

const Navbar = () => {
    const [menuIsHidden, setMenuIsHidden] = useState(false);

    function handleMenuButtonClick() {
        setMenuIsHidden(!menuIsHidden);
    }
    const goToLogin = (e) => {
        router.visit('/login')
    }
    return (
        <nav>
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center p-8">
                    <img src={logoMin} />
                    <ul className="hidden md:flex items-center gap-2">
                        <li>
                            <Link href="/">
                                <Button variant="secondary">Course</Button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/login">
                                <Button variant="secondary">Login</Button>
                            </Link>
                        </li>
                        <li>
                            <Link href="/register">
                                <Button variant="secondary">Register</Button>
                            </Link>
                        </li>
                    </ul>

                    <div className="md:hidden flex items-center">
                        <button
                            className="outline-none mobile-menu-button"
                            onClick={handleMenuButtonClick}
                        >
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                className="w-8 h-12 text-gray-800 hover:text-gray-600"
                                viewBox="0 0 24 24"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <div className="md:hidden mobile-menu">
                {menuIsHidden && (
                    <ul className="">
                        <li>
                            <a
                                href="#"
                                className="block text-sm px-2 py-4 hover:text-white hover:bg-gray-800 transition duration-300"
                            >
                                Course
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block text-sm px-2 py-4 hover:text-white hover:bg-gray-800 transition duration-300"
                            >
                                Login
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block text-sm px-2 py-4 hover:text-white hover:bg-gray-800 transition duration-300"
                            >
                                Register
                            </a>
                        </li>
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
