"use client";
import logo from "../../../public/images/logo.png";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaRegUserCircle } from "react-icons/fa";
import { HiMenuAlt1 } from "react-icons/hi";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

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
    <div className="flex justify-between items-center gap-3 relative z-40">
      {/* small device menu */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <HiMenuAlt1 className="text-2xl cursor-pointer text-secondary" />
          </SheetTrigger>
          <SheetContent side="left" className=" bg-secondary ">
            <SheetHeader>
              <SheetTitle className="text-lg">Navigation</SheetTitle>
            </SheetHeader>
            <nav className="mt-5">
              <ul className="space-y-2 flex flex-col z-40">
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
            </nav>
            <SheetClose asChild>
              <Button variant="outline" className="mt-5 w-full">
                Close
              </Button>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </div>

      <div className="md:w-32 w-20">
        <Image src={logo} height={70} width={100} alt="logo" />
      </div>

      {/* larg device menu  */}
      <div className="bg-secondary px-3 py-4 rounded-full md:flex hidden justify-center items-center">
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

      <div className=" flex gap-2 items-center md:px-4 px-2 md:py-2 py-[2px] rounded-full bg-white">
        <FaRegUserCircle className="md:text-4xl text-2xl rounded-full" />
        <div className="">
          <p className="text-sm">Arik Lee</p>
          <p className="font-medium text-sm">Admin</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
