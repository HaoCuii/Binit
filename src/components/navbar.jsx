import React, { useState } from 'react';
import { Home, BarChart2, Trophy, LogIn, UserPlus, MoreHorizontal, LogOut } from 'lucide-react';

const Navbar = ({ loggedIn, setLoggedIn }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleLogout = () => {
        setLoggedIn(false);
    };

    return (
        <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-lg">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <ul className="flex items-center space-x-8">
                    <NavLink href="/landing" icon={<Home size={18} />} text="Home" />
                    <NavLink href="/stats" icon={<BarChart2 size={18} />} text="Dashboard" />
                    <NavLink href="/leaderboard" icon={<Trophy size={18} />} text="Leaderboard" />
                </ul>

                {/* For larger screens: Show Sign Up/Log In buttons or Log Out button based on loggedIn */}
                <div className="hidden md:flex items-center space-x-4">
                    {!loggedIn ? (
                        <>
                            <a href="/signup">
                                <button className="flex items-center rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700">
                                    <UserPlus size={18} className="mr-2" />
                                    Sign Up
                                </button>
                            </a>
                            <a href="/login">
                                <button className="flex items-center rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50">
                                    <LogIn size={18} className="mr-2" />
                                    Log In
                                </button>
                            </a>
                        </>
                    ) : (
                        <button
                            onClick={handleLogout}
                            className="flex items-center rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700"
                        >
                            <LogOut size={18} className="mr-2" />
                            Log Out
                        </button>
                    )}
                </div>

                {/* For mobile: Three dots icon */}
                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-neutral-600"
                    >
                        <MoreHorizontal size={24} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu (appears when the three dots are clicked) */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4">
                    {!loggedIn ? (
                        <>
                            <a href="/signup" className="block py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900">
                                Sign Up
                            </a>
                            <a href="/login" className="block py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900">
                                Log In
                            </a>
                        </>
                    ) : (
                        <button
                            onClick={handleLogout}
                            className="block py-2 text-sm font-medium text-neutral-600 hover:text-neutral-900"
                        >
                            Log Out
                        </button>
                    )}
                </div>
            )}
        </nav>
    );
};

const NavLink = ({ href, icon, text }) => (
    <a href={href}>
        <li className="flex items-center text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900">
            {icon}
            <span className="ml-2">{text}</span>
        </li>
    </a>
);

export default Navbar;
