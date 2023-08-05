import React from 'react';

const Navbar = () => {
    return (
        <nav className="bg-blue-500 py-4">
            <div className="container mx-auto flex items-center justify-between">
                <div className="text-white font-bold text-xl">Customize</div>
                <div className="flex items-center space-x-4">
                    <NavLink to="/categorizebuilder" label="Customize" />
                    <NavLink to="/clozebuilder" label="Cloze" />
                    <NavLink to="/comprehensionbuilder" label="Comprehension" />
                </div>
            </div>
        </nav>
    );
};

const NavLink = ({ to, label }) => {
    return (
        <a
            href={to}
            className="text-white hover:text-blue-100 px-3 py-2 rounded transition-colors duration-300"
        >
            {label}
        </a>
    );
};

export default Navbar;
