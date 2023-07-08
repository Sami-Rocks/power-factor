import { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "./../../assets/images/logo.svg";
import { navigation } from "./../../helpers/constants";
import SVGs from "../../helpers/SVGs";
import HeaderMobile from "../HeaderMobile";
import { NavHashLink } from "react-router-hash-link";

const Header = () => {
  const [hide, setHide] = useState(true);
  const [active, setActive] = useState(navigation[0]);

  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const close = () => {
    setShowMobileMenu(!showMobileMenu);
  };

  return (
    <header className="bg-white z-100 relative w-full">
      <div className="flex justify-between px-10 md:h-24 h-20 items-center  bg-white w-full z-10 border-b-4 border-primary">
        <Link to={"/"} className="flex items-center">
          <img src={Logo} className="h-10" alt="logo" />
          <p className="font-semibold hidden lg:block">POWER FACTOR LTD</p>
        </Link>

        <nav className="md:block hidden">
          <ul className="flex">
            {navigation?.map((data, index) => (
              <div
                key={data.title}
                onMouseOver={() => {
                  if (data.children) {
                    setHide(false);
                    setActive(data);
                  }
                }}
                onMouseOut={() => setHide(true)}
              >
                <NavHashLink
                  className={`${
                    index === 0 && "border-l-white"
                  } border-l px-8 text-black `}
                  key={data.title}
                  to={data.link}
                >
                  <span className="hover:border-b-primary duration-300 transition ease-in-out hover:border-b-4 hover:text-primary py-9">
                    {data.title}
                  </span>{" "}
                </NavHashLink>
              </div>
            ))}
          </ul>
        </nav>
        <div className="md:block hidden">
          <Link
            to={"/contact"}
            className="text-black font-semibold hover:border-b-primary duration-300 transition ease-in-out hover:border-b-4 hover:text-primary py-9"
          >
            Contact Us
          </Link>
        </div>

        <div className="md:hidden">
          <button onClick={close}>
            {showMobileMenu ? SVGs.close : SVGs.menu}
          </button>
        </div>
      </div>
      <div
        onMouseOver={() => setHide(false)}
        onMouseOut={() => setHide(true)}
        className={`z-20 duration-300 py-10 transition ease-in-out bg-white bg-opacity-90 w-full absolute z-10 hover:block ${
          hide ? "hidden" : "block"
        } `}
      >
        <div className="container flex justify-between flex wrap py-16">
          <div className="w-52 ">
            <h3 className="font-medium">{active.full_title || active.title}</h3>
            {/* <p>
               Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt
               accusamus, ipsam odio at praesentium{" "}
             </p> */}
          </div>
          <div>
            <ul className="flex flex-col gap-x-6 gap-y-4 grid grid-cols-2">
              {active.children &&
                active?.children.map((data) => (
                  <NavHashLink
                    smooth
                    key={data.link}
                    className="hover:text-primary w-fit hover:border-primary border-b border-white"
                    to={data.link}
                  >
                    {data.title}
                  </NavHashLink>
                ))}
            </ul>
          </div>
          <div></div>
          <div></div>
        </div>
      </div>

      <div className={` ${showMobileMenu ? "block md:hidden" : "hidden"} `}>
        <HeaderMobile close={close} />
      </div>
    </header>
  );
};

export default Header;
