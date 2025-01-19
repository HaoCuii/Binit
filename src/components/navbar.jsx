import React from 'react';
import { Home, BarChart2, Trophy, LogIn, UserPlus } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 border-b border-neutral-200 bg-white/80 backdrop-blur-lg">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">
                <ul className="flex items-center space-x-8">
                    <NavLink href="/landing" icon={<Home size={18} />} text="Home" />
                    <NavLink href="/stats" icon={<BarChart2 size={18} />} text="Stats" />
                    <NavLink href="/leaderboard" icon={<Trophy size={18} />} text="Leaderboard" />
                </ul>

                <div className="flex items-center space-x-4">
                    <a href="/signup">
                        <button className="flex items-center rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-neutral-700">
                            <UserPlus size={18} className="mr-2" />
                            Sign Up
                        </button>
                    </a>

                    <a href="/login">
                        <button className="flex items-center rounded-lg border border-neutral-200 px-4 py-2 text-sm font-medium text-neutral-700 transition-colors hover:bg-neutral-50">
                            <LogIn size={18} className="mr-2" />
                            Log in
                        </button>
                    </a>
                </div>
            </div>
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