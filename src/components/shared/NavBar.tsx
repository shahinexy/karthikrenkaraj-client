"use client";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const pathName = usePathname();

  const navLinks = [
    {
      path: "/",
      name: "Tamplets",
    },
    {
      path: "/cause-shop",
      name: "Cause Shop",
    },
    {
      path: "/user",
      name: "User",
    },
    {
      path: "/setting",
      name: "Setting",
    },
  ];
  return (
    <div className="flex justify-between">
      <div className="">
        <Image src={logo} height={70} width={100} alt="logo" />
      </div>

      <div className="bg-secondary p-3 rounded-full flex justify-center items-center">
        <ul className="space-x-5">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              href={`${link.path}`}
              className={`${
                pathName === `${link.path}`
                  ? "bg-primary text-black px-5 py-2 rounded-3xl"
                  : "text-white"
              } hover:bg-primary hover:text-black px-5 py-2 rounded-3xl duration-300`}
            >
              {link.name}
            </Link>
          ))}
        </ul>
      </div>

      <div className=" flex gap-2 items-center px-5 py-2 rounded-full bg-white">
        <FaRegUserCircle className="text-4xl" />
        <div className="">
          <p className="text-sm">Arik Lee</p>
          <p className="font-medium text-sm">Admin</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
