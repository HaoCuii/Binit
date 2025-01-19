import React from 'react';

const Navbar = () => {
    return (
        <nav className="sticky top-0 z-50 px-4 backdrop-blur-lg border-b border-neutral-600 bg-neutral-100">
            <div className="container p-2 mx-auto flex justify-between items-center">
                <ul className="flex space-x-10">
                    <a href="#home"><li className="text-primary-500">Home</li></a>
                    <a href="#stats"><li className="text-primary-500">Stats</li></a>
                    <a href="#leaderboard"><li className="text-primary-500">Leaderboard</li></a>
            
                </ul>

                <div className="flex space-x-4">
                    <a href="/signup">
                        <button className="rounded-md bg-gradient-to-r border border-neutral-800
                        py-2 px-3 ">Sign Up</button>
                    </a>

                    <a href="/login">
                    <button className="border border-neutral-800 rounded-md py-2 px-3">Log in</button>
                    </a>
                    
                </div>
            </div>

        </nav>
    );
};

export default Navbar;