import { useState } from "react";
import Links from "./Links";
import { CgMenuLeftAlt, CgCloseO } from "react-icons/cg";

const Navbar = () => {
  const routes = [
    { id: 1, path: "/home", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/services", name: "Services" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/profile", name: "Profile" },
  ];

  const [open, setOpen] = useState(false);
  return (
    <>
    <div className="bg-amber-100">
    <nav className="max-w-screen-2xl mx-auto p-5 flex items-center justify-between">
        <div onClick={()=> setOpen(!open)} className="text-2xl md:hidden">
          {open? <CgCloseO></CgCloseO>:<CgMenuLeftAlt></CgMenuLeftAlt> }
        </div>
      <ul className={`md:flex gap-10 px-20 md:px-5 text-xl py-5 font-bold items-center absolute md:static bg-amber-100 rounded-lg duration-1000
            ${open?'top-16 shadow-xl':'-top-60'}
        `}>
        {routes.map((route) => (
          <Links key={route.id} route={route}></Links>
        ))}
      </ul>
      <button className="btn btn-primary">
        click me
      </button>
    </nav>
    </div>
    </>
  );
};

export default Navbar;
