import Logo from "@/components/logo/logo";
import Image from "next/image";
import { useState } from "react";
import Button from "../../components/button/Button";
import Input from "../../components/input/Input";
import { FiMap, FiMail } from "react-icons/fi";
import { BiLockAlt, BiLockOpenAlt } from "react-icons/bi";
import { BsPerson } from "react-icons/bs";
import { RxPerson } from "react-icons/rx";
import { AiOutlinePhone } from "react-icons/ai";
import { TbMapPin } from "react-icons/tb";
import { useSelector, useDispatch } from "react-redux";
import { login, logout, shift } from "../../redux/user/userSlicer";
import { RootState } from "../../redux/store";

export default function Auth() {
  const [isSigningIn, setIsSigningIn] = useState(true);
  const dispatch = useDispatch();
  const selector = useSelector((user: RootState) => user.user.userOrOwner);
  const theme = selector
    ? ["bg-light-blue text-bg-white", "bg-white text-txt-gray"]
    : ["bg-white text-txt-gray", "bg-light-blue text-bg-white"];
  return (
    /* this is for computer desing */
    <div className="w-screen h-screen">
      {/* this runs if user wants to login */}
      {isSigningIn && (
        <div className="w-full h-full md:grid md:grid-cols-2">
          <div className="bg-bg-white text-center py-10">
            <h3 className="title text-txt-black text-3xl my-20">
              ورود به حساب کاربری
            </h3>
            <div className="w-full h-auto my-11">
              <Input text="ایمیل">
                <FiMail size={20} />
              </Input>
            </div>
            <div className="w-full h-auto my-11">
              <Input text="رمز عبور" type="password">
                <BiLockAlt size={20} />
              </Input>
            </div>
            <Button
              text="ورود"
              style="w-72 h-9 font-bold text-xl bg-gradient-to-r from-light-blue to-dark-blue"
              act={() => setIsSigningIn((current) => !current)}
            />
            <p className="mt-3 text-txt-gray cursor-pointer">
              رمز عبورم را فرموش کرده‌ام
            </p>
          </div>
          <div className="bg-gradient-to-r from-light-blue to-dark-blue">
            <div className="w-auto h-auto text-center py-10">
              <Logo addon="text-6xl" />
              <Image
                className="mx-auto"
                src={"/auth-login.png"}
                width={400}
                height={400}
                alt="login image"
              />
              <h3 className="title text-bg-white text-3xl">
                هنوز عضو نشده اید؟
              </h3>
              <div className="w-full h-auto mt-2">
                <Button
                  text={"ثبت نام"}
                  style={"w-36 h-8 text-xl"}
                  act={() => setIsSigningIn((current) => !current)}
                />
              </div>
            </div>
          </div>
        </div>
      )}

      {/* this runs if user wants to sign in */}
      {!isSigningIn && (
        <div className="w-full h-full md:grid md:grid-cols-2">
          <div className="bg-gradient-to-r from-light-blue to-dark-blue">
            <div className="w-auto h-auto text-center py-5">
              <Logo addon="text-6xl" />
              <Image
                className="mx-auto"
                src={"/auth-login.png"}
                width={400}
                height={400}
                alt="login image"
              />
              <h3 className="title text-bg-white text-3xl">
                از قبل حساب دارید؟
              </h3>
              <Button
                text="ورود"
                style="w-36 h-9 my-6 font-bold text-xl"
                act={() => setIsSigningIn((current) => !current)}
              />
            </div>
          </div>
          <div className="bg-bg-white text-center py-10">
            <h3 className="title text-txt-black text-3xl">ثبت‌نام</h3>
            <div className="w-auto h-auto grid grid-cols-2 mx-48 title text-2xl my-9 border-2 border-txt-gray rounded-md overflow-hidden">
              <button
                onClick={() =>
                  dispatch(shift({ name: "userOrOwner", data: !selector }))
                }
                className={`w-full h-10 px-4 rounded-md duration-300 shadow ${theme[0]}`}
              >
                کاربر
              </button>
              <button
                onClick={() =>
                  dispatch(shift({ name: "userOrOwner", data: !selector }))
                }
                className={`w-full h-10 px-4 rounded-md duration-300 shadow ${theme[1]}`}
              >
                صاحب شغل
              </button>
            </div>
            <div className="w-full h-[55%] grid gap-2 px-16 md:grid-cols-2">
              <Input text="نام">
                <RxPerson size={20} />
              </Input>
              <Input text="نام خانوادگی">
                <BsPerson size={20} />
              </Input>
              <Input text="استان">
                <FiMap size={20} />
              </Input>
              <Input text="شهر">
                <TbMapPin size={20} />
              </Input>
              <Input text="ایمیل">
                <FiMail size={20} />
              </Input>
              <Input text="شماره تلفن">
                <AiOutlinePhone size={20} />
              </Input>
              <Input text="رمز عبور">
                <BiLockAlt size={20} />
              </Input>
              <Input text="تایید رمز" type="password">
                <BiLockOpenAlt size={20} />
              </Input>
            </div>
            <Button
              text="ثبت نام"
              style="w-72 h-12 my-11 font-bold text-xl bg-gradient-to-r from-light-blue to-dark-blue"
              act={() => setIsSigningIn((current) => !current)}
            />
          </div>
        </div>
      )}
    </div>
  );
}
