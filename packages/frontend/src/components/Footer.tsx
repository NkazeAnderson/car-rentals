import Logo from "./ui/Logo";
import { Link } from "react-router";
import ContactDetails from "./ContactDetails";

function Footer() {
  return (
    <div className="py-14 bg-black text-slate-300 px-5">
      <div className="flex flex-col lg:flex-row justify-between text-[12px] space-y-4 lg:space-x-4">
        <div className="flex-1">
          <Logo />
        </div>
        <div className="flex space-x-4 lg:flex-[2]">
          <div className="flex-1  border-slate-300 border-t p-2">
            <p>
              <Link to={"/"}>Home</Link>
            </p>
            <p>
              <Link to={"/services"}>Service</Link>
            </p>
            <p>
              <Link to={"/about-us"}>About Us</Link>
            </p>
          </div>
          <div className="flex-1 border-slate-300 border-t p-2">
            <p>
              <Link to={"/categories"}>Catetgories</Link>
            </p>
            <p>
              <Link to={"/login"}>Login</Link>
            </p>
            <p>
              <Link to={"/contact-us"}>Contact Us</Link>
            </p>
            <p>
              <Link to={"/Privacy"}>Privacy</Link>
            </p>
          </div>
        </div>
        <div className="flex-1 border-slate-300 border-t p-2">
          <ContactDetails />
        </div>
      </div>
    </div>
  );
}

export default Footer;
