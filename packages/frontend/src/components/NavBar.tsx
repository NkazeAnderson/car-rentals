import { useContext, useEffect, useState } from "react";
import { FaBars, FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "./ui/Logo";
import Container from "./ui/Container";
import NavBarMenu from "./NavBarMenu";
import { FaCircleXmark } from "react-icons/fa6";
import { useLocation } from "react-router";
import { AppContext, appContextT } from "./contextProviders/AppContextProvider";
import ContactDetails from "./ContactDetails";
import { contactInfo } from "common/src";

function NavBar() {
  const [mobileMenuOpen, setmobileMenuOpen] = useState(
    window.screen.width > 500 ? true : false
  );
  const path = useLocation();

  const closeMenu = () => {
    setmobileMenuOpen(!mobileMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("resize", () => {
      setmobileMenuOpen(window.screen.width > 500 ? true : false);
      console.log(window.screen.width);
    });
  }, []);
  useEffect(() => {
    mobileMenuOpen && window.screen.width < 500 && closeMenu();
  }, [path]);

  const { user } = useContext(AppContext) as appContextT;

  return (
    <>
      <div className="bg-gray-900 py-3">
        <Container>
          <div className="flex item-center justify-between  font-light">
            <ContactDetails />
            <div className="flex space-x-5 text-amber-700 ">
              <a href={contactInfo.facebook}>
                <FaFacebook style={{ fontSize: 28 }} />
              </a>
              <a href={contactInfo.instagram}>
                <FaInstagram style={{ fontSize: 28 }} />
              </a>
              <a href={contactInfo.twitter}>
                <FaTwitter style={{ fontSize: 28 }} />
              </a>
            </div>
          </div>
        </Container>
      </div>

      <Container>
        <div className="flex  items-center justify-between py-3 relative">
          <Logo />
          {user && (
            <p className="italic text-gray-400 text-sm hidden lg:block">
              {user?.email}
            </p>
          )}
          <div className="">
            {mobileMenuOpen && (
              <div className=" absolute top-full left-0 w-full lg:top-0 lg:relative z-20">
                <NavBarMenu user={user} />
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
