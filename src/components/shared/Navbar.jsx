import { Link } from "react-router-dom";

const Navbar = () => {
    return(
        <nav className="top-0 left-0 w-full flex justify-between items-center p-4 bg-gray-700 shadow-md">
            <Link to="/">
                <h1 className="text-3xl font-bold text-white">Kartik's Portfolio</h1>
            </Link>
            <div className="space-x-4">
                <Link to="/contact">
                <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-500">
                    Contact
                </button>
                </Link>
                <Link to="/resume">
                <button className="px-4 py-2 bg-white text-black rounded hover:bg-gray-500">
                    Resume
                </button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;