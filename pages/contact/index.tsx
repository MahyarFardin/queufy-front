import Footer from "@/components/Footer/Footer";
import Navigation from "@/components/Navigation/Nav";
import Input from "@/components/input/Input";
import TextBox from "@/components/textbox/TextBox";
import Image from "next/image";
import Button from "@/components/button/Button";

export default function Contact() {
  return (
    <div className="w-screen h-screen">
      <Navigation />
      <form className="w-full h-full p-6 grid grid-cols-2">
        <div className="w-full h-full">
          <Image
            className="mx-auto"
            width={600}
            height={600}
            src={"/auth-login.png"}
            alt="تصویر ارتباط با ما"
          />
        </div>
        <div className="w-full h-full flex flex-col items-center px-44">
          <div className="h-ful w-full flex flex-row items-center">
            <Input text="نام" />
            <Input text="موضوع" />
          </div>
          <Input text="ایمیل" type="email" />
          <TextBox text="پیام" />
        </div>
        <Button text="ارسال"/>
      </form>
      <Footer />
    </div>
  );
}
