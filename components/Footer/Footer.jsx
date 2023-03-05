import Link from "next/link";
import { AiOutlinePhone, AiOutlineLinkedin, AiOutlineSend, AiOutlineMail } from "react-icons/ai";

export default function Footer() {
  return (
    <footer className="w-full h-auto bg-gradient-to-l from-light-blue to-dark-blue rounded-t-xl  px-6 py-6">
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
      <div className="flex flex-row justify-between items-center px-64 my-10">
        <AiOutlinePhone className="text-bg-white" size={30} />
        <AiOutlineMail className="text-bg-white" size={30} />
        <AiOutlineSend className="text-bg-white" size={30} />
        <AiOutlineLinkedin className="text-bg-white" size={30} />
      </div>
    </footer>
  );
}
