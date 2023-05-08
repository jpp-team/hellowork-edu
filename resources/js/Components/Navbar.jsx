import { logoMin } from "@/Data/assets";
import { router, usePage } from "@inertiajs/react";
import React, { useState } from "react";
import Button from "./Button";
import { Link } from "@inertiajs/react";

const menus = [{ name: "" }];

const Navbar = () => {
    const { props } = usePage();
    const { user } = props.auth;
    const [menuIsHidden, setMenuIsHidden] = useState(false);

    function handleMenuButtonClick() {
        setMenuIsHidden(!menuIsHidden);
    }

    return (
        <nav>
            <div className="max-w-6xl mx-auto px-4">
                <div className="flex justify-between items-center p-8">
                    <img src={logoMin} />
                    <ul className="hidden md:flex items-center gap-2">
                        {user ? (
                            <>
                                <li className="mr-4">
                                    <p>Welcome, {user.first_name}</p>
                                </li>
                                <li>
                                    <Link href="/dashboard">
                                        <Button variant="secondary">
                                            Dashboard
                                        </Button>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        method="post"
                                        as="button"
                                        href="/logout"
                                    >
                                        <Button variant="secondary">
                                            Logout
                                        </Button>
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link href="/">
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
                        )}
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
            <div className="md:hidden mobile-menu text-center">
                {menuIsHidden && (
                    <ul className="flex flex-col gap-2">
                        {user ? (
                            <>
                                <li>
                                    <p>Welcome, {user.first_name}</p>
                                </li>
                                <li>
                                    <Link href="/dashboard">
                                        <Button variant="secondary">
                                            Dashboard
                                        </Button>
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        method="post"
                                        as="button"
                                        href="/logout"
                                    >
                                        <Button variant="secondary">
                                            Logout
                                        </Button>
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <Link href="/">
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
                        )}
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
