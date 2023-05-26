import React, { useState } from "react";
import { logoMin } from "@/Data/assets";
import { router, usePage } from "@inertiajs/react";
import Button from "./Button";
import { Link } from "@inertiajs/react";
import Dropdown from "./Dropdown";
import useWidthMobile from "@/Hooks/useWidthMobile";

const menus = [{ name: "" }];

const Navbar = () => {
    const { props } = usePage();
    const { user } = props.auth;
    const [menuIsHidden, setMenuIsHidden] = useState(false);
    const isMobile = useWidthMobile();

    function handleMenuButtonClick() {
        setMenuIsHidden(!menuIsHidden);
    }

    return (
        <nav className="bg-white/30 z-10">
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center p-8">
                    <Link href="/">
                        <img src={logoMin} />
                    </Link>
                    <ul className="hidden md:flex items-center gap-2">
                        {!user ? (
                            <>
                                <li>
                                    <Link href="/course">
                                        <Button variant="secondary">
                                            Course
                                        </Button>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/login">
                                        <Button variant="secondary">
                                            Login
                                        </Button>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/register">
                                        <Button variant="secondary">
                                            Register
                                        </Button>
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link href="/course">
                                        <Button variant="secondary">
                                            Course
                                        </Button>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/dashboard">
                                        <Button variant="secondary">
                                            Dashboard
                                        </Button>
                                    </Link>
                                </li>
                                <li>
                                    <Button
                                        variant="secondary"
                                        onClick={() =>
                                            router.post(route("logout"))
                                        }
                                    >
                                        Logout
                                    </Button>
                                </li>
                            </>
                        )}
                    </ul>
                    {isMobile && (
                        <>
                            {!user ? (
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
                            ) : (
                                <Dropdown>
                                    <Dropdown.Trigger>
                                        <span className="flex rounded-md md:hidden">
                                            <button
                                                type="button"
                                                className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150"
                                            >
                                                {user.first_name}

                                                <svg
                                                    className="ml-2 -mr-0.5 h-4 w-4"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    viewBox="0 0 20 20"
                                                    fill="currentColor"
                                                >
                                                    <path
                                                        fillRule="evenodd"
                                                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                                        clipRule="evenodd"
                                                    />
                                                </svg>
                                            </button>
                                        </span>
                                    </Dropdown.Trigger>

                                    <Dropdown.Content>
                                        <Dropdown.Link
                                            href={route("course.index")}
                                        >
                                            Course
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("dashboard")}
                                        >
                                            Dashboard
                                        </Dropdown.Link>
                                        <Dropdown.Link
                                            href={route("logout")}
                                            method="post"
                                            as="button"
                                        >
                                            Log Out
                                        </Dropdown.Link>
                                    </Dropdown.Content>
                                </Dropdown>
                            )}
                        </>
                    )}
                </div>
                <div className="md:hidden mobile-menu">
                    {menuIsHidden && (
                        <ul className="flex flex-col gap-2">
                            {!user && (
                                <>
                                    <li>
                                        <Link
                                            href="/course"
                                            className="block text-sm px-2 py-4 hover:text-white hover:bg-gray-800 transition duration-300"
                                        >
                                            Course
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/login"
                                            className="block text-sm px-2 py-4 hover:text-white hover:bg-gray-800 transition duration-300"
                                        >
                                            Login
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/register"
                                            className="block text-sm px-2 py-4 hover:text-white hover:bg-gray-800 transition duration-300"
                                        >
                                            Register
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
