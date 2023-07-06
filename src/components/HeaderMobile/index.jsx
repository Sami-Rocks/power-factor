/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
import { navigation } from "../../helpers/constants";
import { useId, useState } from "react";
// import Logo from "../../assets/images/logo.svg";
import SVGs from "../../helpers/SVGs";

const HeaderMobile = () => {
  const id = useId();
  // const [ dropdown, setDropdown ] = useState(false)
  return (
    <nav className="bg-primary text-white h-screen fixed w-full z-50 mt-0">
      {/* <div className="flex justify-between px-8 py-4">
        <Link to={"/"} className=" flex items-center">
          <img src={Logo} className="h-14" alt="logo" />
          <p className="text-5xl">POWER FACTOR LTD</p>
        </Link>
        <button>{SVGs.close_white}</button>
      </div> */}
      <ul className="ml-8 my-7 transition-all">
        {navigation.map((el) => (
          <Nav key={el.title + id} el={el} />
        ))}
      </ul>

      <div className="mt-16 flex gap-8 ml-8">
        <button>{SVGs.youtube}</button>
        <button>{SVGs.facebook}</button>
        <button>{SVGs.instagram}</button>
        <button>{SVGs.twitter}</button>
      </div>

      <p className="text-2xl text-white pl-8 mt-10">Power Factor LTD.</p>
    </nav>
  );
};

export default HeaderMobile;

const Nav = ({ el }) => {
  const id = useId();
  const [dropdown, setDropdown] = useState(false);
  return (
    <li className="py-3">
      <button
        onClick={() => setDropdown(!dropdown)}
        className={` ${dropdown ? "text-secondary" : ""} text-3xl`}
      >
        {el.title}
      </button>
      <ul
        className={` ${
          dropdown ? "h-auto opacity-1 " : "h-0 opacity-0 mt-2 h-transition "
        }  transition-all ease-in-out duration-300 ml-5 `}
      >
        {el?.children?.map((element) => (
          <li
            className="text-xl py-1 font-EuclidSquare"
            key={id + element.title}
          >
            <NavLink to={element.link}>{element.title}</NavLink>
          </li>
        ))}
      </ul>
    </li>
  );
};
