import React, { useState } from 'react';
import { FaRegMoon } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    )
    const element = document.documentElement;//hhtml element

    React.useEffect(() => {
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            element.classList.remove("dark");
            localStorage.setItem("theme", "light")

        }

    }, [theme])

    return (
        <div className='relative'>
            {theme === "dark" ?
                <FaRegMoon
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    className='w-8 h-8 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 ' />
                : <IoSunnyOutline
                    onClick={() => setTheme(theme === "light" ? "dark" : "light")}
                    className='w-8 h-8 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 right-0 z-10 ${theme === "dark"? "opacity-100"}' />
            }
        </div>
    )
}

export default DarkMode