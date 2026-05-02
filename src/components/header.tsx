import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import ajaxLogo from "@/assets/ajax.webp";

const NAV_LINKS = [
    { label: "Home", link: "/" },
    // { label: "About", link: "/about" },
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    useEffect(() => {
        setMenuOpen(false);
    }, [location.pathname]);

    return (
        <header className="w-full bg-zinc-900 shadow-md">
            <div className={
                `max-w-5xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center ${menuOpen ? "gap-4" : ""}`
            }>
                <div className="flex items-center justify-between w-full sm:w-auto">
                    <Link to="/" className="flex items-center gap-3 shrink-0">
                        <img src={ajaxLogo} alt="AJAX Logo" className="h-12 w-auto rounded" />
                        <div>
                            <h1 className="text-2xl font-bold text-white">DK Wiki</h1>
                            <h2 className="text-sm text-gray-400">Studying Gluttonites since 2020</h2>
                        </div>
                    </Link>

                    <div className="sm:hidden">
                        <button
                            className="p-2 border border-white text-white rounded"
                            onClick={() => setMenuOpen(prev => !prev)}
                            aria-label="Toggle menu"
                        >
                            ☰
                        </button>
                    </div>
                </div>

                <nav className={`w-full sm:w-auto transition-all duration-200 ease-in-out`}>
                    <ul
                        className={`${menuOpen ? "flex" : "hidden"
                            } sm:flex flex-col sm:flex-row bg-zinc-800 sm:bg-transparent shadow sm:shadow-none 
              rounded sm:rounded-none text-white my-0`}
                    >
                        {NAV_LINKS.map(({ label, link }) => (
                            <li key={link}>
                                <Link
                                    to={link}
                                    className="block px-4 py-2 hover:bg-zinc-700 sm:hover:bg-transparent sm:hover:text-blue-200"
                                >
                                    {label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
