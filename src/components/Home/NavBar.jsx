import { Skull,  Menu, X } from 'lucide-react';
import { NavItems } from '../../constants';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const[mobileNavOpen, setMobileNavOpen] = useState(false);

    const toggleNavbar = () => {
        setMobileNavOpen(!mobileNavOpen);
    }

    return (
        <div className="relative flex justify-between items-center">
            <div className="flex gap-2 ml-5 items-center">
                <Skull size={45} />
                <h1 className="text-2xl">Skulduggery Pleasant</h1>
            </div>

            <div className="mt-2">
                <ul className="hidden lg:flex gap-10 mr-5">
                    {NavItems.map((item, index) => (
                        <li key={index} className="flex gap-2 bg-slate-800 p-5 rounded-md hover:bg-amber-500">
                            {item.icon}
                            <Link to={item.href} onClick={() => setMobileNavOpen(false)}>{item.label}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="lg:hidden flex gap-10 mr-5">
                <button onClick={toggleNavbar}>
                    {mobileNavOpen ? <X size={30} /> : <Menu size={30} />}
                </button>
            </div>

            {mobileNavOpen && (
                <div className="absolute top-full w-full align-middle mt-5 z-50">
                    <ul className="flex flex-col text-center">
                        {NavItems.map((item, index) => (
                            <li key={index} className="flex gap-2 bg-slate-800 p-5 hover:bg-amber-500">
                            {item.icon}
                            <Link to={item.href} onClick={() => setMobileNavOpen(false)}>{item.label}</Link>
                        </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default NavBar