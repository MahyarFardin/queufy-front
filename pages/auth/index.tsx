import Logo from "@/components/logo/logo";
import Image from "next/image";
import { useState } from "react";

export default function Auth() {
  const [isSigningIn, setIsSigningIn] = useState(true);

  return (
    /* this is for computer desing */
    <div className="w-screen h-screen">
      {/* this runs if user wants to login */}
      {isSigningIn && (
        <div className="w-full h-full md:grid md:grid-cols-2">
          <div className="bg-bg-white text-center py-10">
            <h3 className="title text-txt-black text-3xl">ورود به حساب کاربری</h3>
            <p className="text-txt-gray">رمز عبورم را فرموش کرده‌ام</p>
          </div>
          <div className="bg-gradient-to-r from-light-blue to-dark-blue">
            <div className="w-auto h-auto text-center py-10">
              <Logo addon="text-6xl" />
              <Image
                className="mx-auto"
                src={"/auth-login.jpg"}
                width={400}
                height={400}
                alt="login image"
              />
              <h3 className="title text-bg-white text-3xl">
                هنوز عضو نشده اید؟
              </h3>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
