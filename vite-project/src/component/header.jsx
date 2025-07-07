import React, { useState } from "react";

const services = [
    "Website Design",
    "Website Development",
    "Responsive Web Design",
    "Ecommerce Web Design & Development",
    "Search Engine Optimization",
    "Branding",
    "Logo Designing",
    "Brochure Designing",
    "Corporate Presentation",
    "Website Redesigning",
    "Website Maintenance",
    "Domain & Hosting",
    "Media",
    "Corporate shoot",
];

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <header className="fixed w-full z-30 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 shadow-lg">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                <div className="text-2xl font-extrabold tracking-wide text-white drop-shadow-lg select-none">
                    Freelancing Services
                </div>
                {/* Hamburger */}
                <button
                    className="md:hidden flex flex-col gap-1.5 w-10 h-10 items-center justify-center group relative z-40"
                    onClick={() => setMenuOpen((open) => !open)}
                    aria-label="Toggle menu"
                >
                    <span className={`block h-1 w-8 rounded bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}></span>
                    <span className={`block h-1 w-8 rounded bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}></span>
                    <span className={`block h-1 w-8 rounded bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}></span>
                </button>
                {/* Nav */}
                <nav>
                    <ul className={`
                        md:flex md:items-center md:gap-8
                        fixed md:static top-0 right-0 h-full md:h-auto w-64 md:w-auto bg-gray-900 md:bg-transparent
                        flex-col md:flex-row pt-24 md:pt-0 px-6 md:px-0
                        transition-all duration-700 ease-[cubic-bezier(.77,0,.18,1)]
                        ${menuOpen ? "flex shadow-2xl" : "hidden md:flex"}
                    `}>
                        <li>
                            <a
                                href="#about"
                                className="block py-2 px-4 text-white font-medium rounded hover:bg-gray-800 hover:text-cyan-400 transition-all duration-300"
                                onClick={() => setMenuOpen(false)}
                            >
                                About
                            </a>
                        </li>
                        <li
                            className="relative"
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                            <button
                                className="flex items-center gap-2 py-2 px-4 text-white font-medium rounded hover:bg-gray-800 hover:text-cyan-400 transition-all duration-300"
                                onClick={() => setDropdownOpen((open) => !open)}
                                aria-haspopup="true"
                                aria-expanded={dropdownOpen}
                            >
                                Services
                                <svg className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? "rotate-180" : ""}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                                </svg>
                            </button>
                            {/* Dropdown */}
                            <ul
                                className={`
                                    absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-2xl overflow-hidden
                                    transition-all duration-500 origin-top
                                    ${dropdownOpen ? "scale-y-100 opacity-100 pointer-events-auto" : "scale-y-75 opacity-0 pointer-events-none"}
                                    transform-gpu
                                `}
                                style={{ zIndex: 50 }}
                            >
                                {services.map((service, idx) => (
                                    <li key={service}>
                                        <a
                                            href={`#${service.replace(/\s+/g, "-").toLowerCase()}`}
                                            className={`
                                                block px-6 py-3 text-gray-800 hover:bg-cyan-600 hover:text-white
                                                transition-all duration-300
                                                ${idx % 2 === 0 ? "bg-gray-50" : "bg-white"}
                                            `}
                                            onClick={() => {
                                                setMenuOpen(false);
                                                setDropdownOpen(false);
                                            }}
                                        >
                                            {service}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="block py-2 px-4 text-white font-medium rounded hover:bg-gray-800 hover:text-cyan-400 transition-all duration-300"
                                onClick={() => setMenuOpen(false)}
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
            {/* Cinematic overlay for mobile menu */}
            <div
                className={`
                    fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm transition-all duration-700
                    ${menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
                    md:hidden z-20
                `}
                onClick={() => setMenuOpen(false)}
            />
        </header>
    );
}
