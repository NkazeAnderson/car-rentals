import React, { useEffect, useState } from "react";
import { contactInfo } from "../constants";
import { FaBars, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "./ui/Logo";
import Container from "./ui/Container";
import NavBarMenu from "./NavBarMenu";
import { FaCircleXmark } from "react-icons/fa6";
import { useLocation } from "react-router";

function NavBar() {
  const [mobileMenuOpen, setmobileMenuOpen] = useState(
    window.screen.width > 500 ? true : false
  );
  const path = useLocation();

  const closeMenu = () => {
    setmobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("resize", (e) => {
      setmobileMenuOpen(window.screen.width > 500 ? true : false);
    });
  }, []);
  useEffect(() => {
    mobileMenuOpen && closeMenu();
  }, [path]);

  return (
    <>
      <div className="bg-gray-900 py-3">
        <Container>
          <div className="flex item-center justify-between text-[12px] font-light">
            <div className=" text-white">
              <p>
                Call now: <b>{contactInfo.phone}</b>
              </p>
              <p>
                Email <b>{contactInfo.email}</b>
              </p>
              <p>
                Address: <b>{contactInfo.address}</b>
              </p>
            </div>
            <div className="flex space-x-5 text-amber-700 text-[18px]">
              <a href="/">
                <FaFacebook />
              </a>
              <a href="/">
                <FaInstagram />
              </a>
              <a href="/">
                <FaTwitter />
              </a>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex  items-center justify-between py-3 relative">
          <Logo />
          <div className="">
            {mobileMenuOpen && (
              <div className=" absolute top-full left-0 w-full lg:top-0 lg:relative z-20">
                <NavBarMenu />
              </div>
            )}
            <div className="lg:hidden" onClick={closeMenu}>
              {mobileMenuOpen ? <FaCircleXmark /> : <FaBars />}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default NavBar;
