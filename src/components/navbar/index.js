import {useState} from "react";
import {navbarItems} from "./navItems.data";
import {AiOutlineClose, AiOutlineMenu} from "react-icons/ai";
import {Link, NavLink} from "react-router-dom";
import LanguageDropdown from "./components/LanguageDropdown";

const Navbar = () => {
    const [nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="bg-black w-full h-20 flex flex-row px-4 justify-between items-center">
            {/* Logo */}
            <Link to={"/"}>
                <div className="flex flex-col justify-center items-center">
                    <h1 className='text-3xl font-bold text-teal-900 ms-24'>HTA</h1>
                    <p className='text-base  text-white ms-24'>trafficking awareness</p>
                </div>
            </Link>

            {/* Desktop Navigation */}
            <ul className="hidden md:flex">
                {navbarItems.map(item => (
                    <li
                        key={item.id}
                        className="text-xl font-semibold text-white p-4"
                    >
                        <NavLink
                            to={item.itemLink}
                            className="flex flex-row items-center gap-8 aria-[current=page]:text-teal-900 hover:text-teal-900 cursor-pointer"
                        >
                            {item.itemLabel}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <div className="hidden md:flex me-24">
                <LanguageDropdown />
            </div>

            {/* Mobile Navigation Icon */}
            <div onClick={handleNav} className='block md:hidden text-white me-24 border-[1px] border-white p-2 rounded-md cursor-pointer'>
                {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
            </div>

            {/* Mobile Navigation Menu */}
            <ul
                className={
                    nav
                        ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500'
                        : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
                }>

                {/* Mobile Logo */}
                <h1 className='w-full text-3xl font-bold text-teal-900 m-4'>HTA.</h1>

                {/* Mobile Navigation Items */}
                {navbarItems.map(item => (
                    <li
                        key={item.id}
                        className='text-xl font-semibold text-white p-4 aria-[current=page]:text-teal-900 hover:text-teal-900 cursor-pointer border-b-2 border-teal-900 m-4'
                    >
                        <NavLink
                            to={item.itemLink}
                        >
                            {item.itemLabel}
                        </NavLink>
                    </li>
                ))}

            </ul>

        </div>
    );
};

export default Navbar;