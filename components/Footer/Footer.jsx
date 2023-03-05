import Link from "next/link";
import { AiOutlinePhone } from "react-icons/ai";
import { CiMail } from "react-icons/ci";
import { GrSend } from "react-icons/gr";
import { FiLinkedin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="w-full h-auto bg-light-blue rounded-t-xl  px-6 py-3">
      <div className="w-full h-full flex flex-row justify-center my-4">
        <Link href="#">
          <span className="text-bg-white title px-10 text-2xl hover:text-bg-white duration-700 ease-in-out transition active:text-light-blue">
            کیوفای چیه؟
          </span>
        </Link>
        <Link href="#">
          <span className="text-bg-white title px-10 text-2xl hover:text-bg-white duration-700 ease-in-out transition active:text-light-blue">
            درباره ما
          </span>
        </Link>
        <Link href="#">
          <span className="text-bg-white title px-10 text-2xl hover:text-bg-white duration-700 ease-in-out transition active:text-light-blue">
            ارتباط با ما
          </span>
        </Link>
        <Link href="#">
          <span className="text-bg-white title px-10 text-2xl hover:text-bg-white duration-700 ease-in-out transition active:text-light-blue">
            صفحه اصلی
          </span>
        </Link>
      </div>
      <hr className="mx-auto line" />
      <div className="flex flex-row justify-between items-center px-64 my-4">
        <AiOutlinePhone className="text-bg-white" size={30} />
        <CiMail className="text-bg-white" size={30} />
        <GrSend className="text-bg-white" size={30} />
        <FiLinkedin className="text-bg-white" size={30} />
      </div>
    </footer>
  );
}
