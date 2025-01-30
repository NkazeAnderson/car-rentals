import { Link, useLocation } from "react-router";

function NavLinks({ path, text }: { path: string; text: string }) {
  const { pathname } = useLocation();

  return (
    <Link
      className={`p-3 capitalize hover:bg-orange-500  border-gray-800 border-y-2 lg:border-y-0 ${
        pathname === path ? "bg-orange-600 text-white" : " text-black"
      }`}
      to={path}
    >
      {text}
    </Link>
  );
}

export default NavLinks;
