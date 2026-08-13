import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { assets } from '../assets/assets'
import { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

    const [visible, setVisible] = useState(false)

    const { setShowSearch, getCartCount } = useContext(ShopContext)

    return (
        <div className="flex items-center justify-between py-5 font-medium">

            {/* LEFT - LOGO */}
            <Link to="/">
                <img
                    src={assets.logo}
                    className="w-36"
                    alt="Logo"
                />
            </Link>

            {/* DESKTOP MENU */}
            <ul className="hidden sm:flex gap-5 text-sm text-gray-700">

                <Link to="/">
                    <p>HOME</p>
                </Link>

                <Link to="/collection">
                    <p>COLLECTION</p>
                </Link>

                <Link to="/contact">
                    <p>CONTACT</p>
                </Link>

            </ul>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-6">

                {/* SEARCH */}
                <img
                    src={assets.search_icon}
                    className="w-5 cursor-pointer"
                    alt="Search"
                    onClick={() => setShowSearch(true)}
                />

                {/* PROFILE */}
                <div className="group relative">

                    <img
                        src={assets.profile_icon}
                        className="w-5 cursor-pointer"
                        alt="Profile"
                    />

                    <div className="group-hover:block hidden absolute right-0 pt-4 z-50">

                        <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">

                            <Link
                                to="/profile"
                                className="cursor-pointer hover:text-black"
                            >
                                Profile
                            </Link>

                            <Link
                                to="/orders"
                                className="cursor-pointer hover:text-black"
                            >
                                Orders
                            </Link>

                            <p className="cursor-pointer hover:text-black">
                                Logout
                            </p>

                        </div>

                    </div>

                </div>

                {/* CART */}
                <Link to="/cart" className="relative">

                    <img
                        src={assets.cart_icon}
                        className="w-5"
                        alt="Cart"
                    />

                    <p className="absolute -right-1.25 -bottom-1.25 w-4 h-4 text-center leading-4 bg-black text-white rounded-full text-[8px]">
                        {getCartCount()}
                    </p>

                </Link>

                {/* MOBILE MENU */}
                <img
                    onClick={() => setVisible(true)}
                    src={assets.menu_icon}
                    className="w-5 cursor-pointer sm:hidden"
                    alt="Menu"
                />

                {/* MOBILE SIDEBAR */}
                <div
                    className={`fixed top-0 right-0 bottom-0 z-50 overflow-hidden bg-white transition-all duration-300 ${
                        visible ? 'w-full' : 'w-0'
                    }`}
                >

                    <div className="flex flex-col text-gray-600">

                        <div
                            onClick={() => setVisible(false)}
                            className="flex items-center gap-4 p-3 cursor-pointer"
                        >
                            <img
                                src={assets.dropdown_icon}
                                alt="Back"
                                className="h-4 rotate-180"
                            />

                            <p>Back</p>
                        </div>

                        <NavLink
                            onClick={() => setVisible(false)}
                            className="py-2 pl-6 border"
                            to="/"
                        >
                            HOME
                        </NavLink>

                        <NavLink
                            onClick={() => setVisible(false)}
                            className="py-2 pl-6 border"
                            to="/collection"
                        >
                            COLLECTION
                        </NavLink>

                        <NavLink
                            onClick={() => setVisible(false)}
                            className="py-2 pl-6 border"
                            to="/about"
                        >
                            ABOUT
                        </NavLink>

                        <NavLink
                            onClick={() => setVisible(false)}
                            className="py-2 pl-6 border"
                            to="/contact"
                        >
                            CONTACT
                        </NavLink>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Navbar;