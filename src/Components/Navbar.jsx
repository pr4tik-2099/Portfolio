import react from 'react';
import { FiMenu, FiX, } from 'react-icons/fi';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState, useEffect } from 'react';


function Navbar() {
    const [active, setActive] = useState("");
    const[isOpen, setIsOpen] = useState(false);
    const [scroll, setScroll] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScroll(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);

    },[])
    const handleMenu = (secId) => {
        setActive(secId);
        setIsOpen(false);

        const section = document.getElementById(secId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    
   
    const menuItems = [
        { id: "about", label: "About" },
        { id: "education", label: "Education" },
        { id: "skills", label: "Skills" },
        { id: "work", label: "Work" },
        { id: "contact", label: "Contact" },
    ]
    return (
        <>
            <nav className={`fixed h-18 top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${scroll ? "bg-gray-900 bg-opacity-50 backdrop-blur-md shadow-md" : "bg-transparent"}`}>
                <div className='text-white py-5 flex justify-between items-center -ml-30'>
                    <span className="text-purple-800 text-xl cursor-pointer">
                        <img src="./src/assets/letter-p.png" alt="Logo" className="h-10 w-10 inline-block mr-2 hover:scale-110 duration-400" />
                    </span>
                </div>

                <div>
                    <ul className="hidden md:flex space-x-20 justify-center items-center text-white font-medium -mt-15">
                        {menuItems.map((item)=>(
                           
                                <li key={item.id} className="hover:text-green-400 cursor-pointer font-semibold hover:text-shadow-md text-lg hover:scale-110 duration-400">
                                    <button onClick={() => handleMenu(item.id)}>
                                        {item.label}
                                    </button>
                                </li>
                        ))}
                    </ul>
                   
                    {/* <div className="md:hidden">
                        {
                            isOpen ?(
                            <FiMenu className="text-3xl cursor-pointer hover:text-green-500"
                            onClick={() => setIsOpen(true)}/>
                            ):(
                            <FiX className="text-3xl cursor-pointer hover:text-red-500"
                            onClick={() => setIsOpen(false)}/>
                            )
                        }

                    </div>    */}
                </div>

            </nav>
        </>
    );
}

export default Navbar;