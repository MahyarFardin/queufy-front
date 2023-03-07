import Link from "next/link";
import Logo from "../logo/logo";
import { CgProfile } from "react-icons/cg";

export default function Navigation() {
  return (
    <nav className="md:w-[90%] md:h-auto bg-bg-white flex md:flex-row shadow mx-auto items-center justify-between px-6 py-4 rounded-2xl m-4">
      <Logo addon="text-light-blue text-3xl" />
      <div className="w-full h-full flex flex-row justify-start px-6">
        <Link href="#">
          <span className="text-txt-gray title px-10 text-lg hover:text-light-blue duration-700 ease-in-out transition active:text-light-blue">
            کیوفای چیه؟
          </span>
        </Link>
        <Link href="#">
          <span className="text-txt-gray title px-10 text-lg hover:text-light-blue duration-700 ease-in-out transition active:text-light-blue">
            درباره ما
          </span>
        </Link>
        <Link href="#">
          <span className="text-txt-gray title px-10 text-lg hover:text-light-blue duration-700 ease-in-out transition active:text-light-blue">
            ارتباط با ما
          </span>
        </Link>
      </div>
      <CgProfile size={30} className="text-txt-gray" />
    </nav>
  );
}
