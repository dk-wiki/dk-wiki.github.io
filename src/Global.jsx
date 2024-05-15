import React, { useState } from 'react';
import { FaXTwitter } from "react-icons/fa6";

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const NAVCSS = "text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-gray-700";

    return (
        <nav className="bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <div className="flex-shrink-0">
                            <img className="h-10 w-10" src="logo.svg" alt="Logo" />
                        </div>
                        <a href="/">
                            <div className="ml-8 hidden md:block">
                                <h1 className="text-white text-lg font-bold">The Encyclopedia of Hunger</h1>
                            </div>
                        </a>
                        <a href="/">
                            <div className="ml-2 md:hidden">
                                <h1 className="text-white text-lg font-bold">DK Wiki</h1>
                            </div>
                        </a>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <a href="#" className={NAVCSS}>Home</a>
                            <a href="#/about" className={NAVCSS}>About</a>
                            <a href="#/entries" className={NAVCSS}>Entries</a>
                        </div>
                    </div>
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            type="button"
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            aria-controls="mobile-menu"
                            aria-expanded="false"
                        >
                            <span className="sr-only">Open main menu</span>
                            {!isMobileMenuOpen ? (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                                </svg>
                            ) : (
                                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div className="md:hidden" id="mobile-menu">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <a href="#" className={NAVCSS}>Home</a>
                        <a href="#/about" className={NAVCSS}>About</a>
                        <a href="#/entries" className={NAVCSS}>Entries</a>
                    </div>
                </div>
            )}
        </nav>
    );
};

export const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto flex justify-center items-center mb-4">
                <p className="text-white text-sm">
                    &copy; {currentYear} DK. All rights reserved.
                </p>
            </div>
            <div className="max-w-7xl mx-auto flex justify-center items-center">
                <a href="https://twitter.com/321dk123" target="_blank" rel="noopener noreferrer" className="text-white flex items-center space-x-2">
                    <FaXTwitter className="h-6 w-6 text-blue-500" />
                </a>
            </div>
        </footer>
    );
};


export default Navbar;
