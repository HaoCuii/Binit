import React, { useState } from 'react';
import { Home, BarChart2, Trophy, LogIn, UserPlus, MoreHorizontal, LogOut } from 'lucide-react';
import { useAuth } from '../contexts/authContext';
import { doSignOut } from '../firebase/auth';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const navigate = useNavigate();
    const { userLoggedIn } = useAuth();

    const handleLogout = async () => {
        await doSignOut();
        navigate('/landing');
    };

    const handleStatsClick = () => {
        if (!userLoggedIn) {
            // If user isn't logged in, redirect to login page
            navigate('/login');
        } else {
            // Otherwise, navigate to stats
            navigate('/stats');
        }
    };

    return (
        <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-lg">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <ul className="flex items-center space-x-8">
                    <NavLink href="/landing" icon={<Home size={18} />} text="Home" />
                    <li onClick={handleStatsClick} className="flex items-center cursor-pointer text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900">
                        <BarChart2 size={18} />
                        <span className="ml-2">Dashboard</span>
                    </li>
                    <NavLink href="/leaderboard" icon={<Trophy size={18} />} text="Leaderboard" />
                </ul>

                <div className="hidden md:flex items-center space-x-4">
                    {!userLoggedIn ? (
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

                <div className="md:hidden flex items-center">
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="text-neutral-600"
                    >
                        <MoreHorizontal size={24} />
                    </button>
                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden absolute top-16 right-4 bg-white shadow-lg rounded-lg p-4">
                    <ul className="space-y-4">
                        <NavLink href="/landing" icon={<Home size={18} />} text="Home" />
                        <li onClick={handleStatsClick} className="flex items-center cursor-pointer text-sm font-medium text-neutral-600 transition-colors hover:text-neutral-900">
                            <BarChart2 size={18} />
                            <span className="ml-2">Dashboard</span>
                        </li>
                        <NavLink href="/leaderboard" icon={<Trophy size={18} />} text="Leaderboard" />
                        {!userLoggedIn ? (
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
                    </ul>
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
