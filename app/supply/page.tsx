"use client";

import { title, subtitle } from "@/components/primitives";
import {Link, useDisclosure} from "@heroui/react";
import { LogInModal } from "@/components/login";
import { Sign } from "crypto";
import { SignUpModal } from "@/components/signup";


export default function SupplyPage() {
  const { isOpen: isOpenLogin, onOpen: onOpenLogin, onClose: onCloseLogin } = useDisclosure();
  const { isOpen: isOpenSignup, onOpen: onOpenSignup, onClose: onCloseSignup } = useDisclosure();
  const SessionAdvise = () => {
    // Analize localstorage user name and enterprise name
    
    // If user name is null, show a message
    if (localStorage.getItem("logged_name_debug") === null) {
      return (
        <div className={subtitle({})}> 
          Please <button onClick={onOpenLogin} className="text-blue-500">log in</button> or <button onClick={onOpenSignup} className="text-blue-500">sign up</button> up to manage your supply chain.
          <LogInModal isOpen={isOpenLogin} onClose={onCloseLogin} />
          <SignUpModal isOpen={isOpenSignup} onClose={onCloseSignup} />
        </div>
      );
    }
    // If enterprise name is null, show another message
    if (localStorage.getItem("enterprise_name_debug") === null) {
      return (
        <a href="/supply/registration" className="text-blue-500 underline">
          Please, register your enterprise to manage your supply chain.
        </a>
      );
    }

    // If both are not null, show the information
    return (
      <span className={subtitle({})}>
        Welcome, {localStorage.getItem("logged_name_debug")}! You are managing the supply chain of {localStorage.getItem("enterprise_name_debug")}.
      </span>
    );
  };

  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
      <div className="inline-block max-w-xl text-center justify-center">
        <span className={title({ color: "violet" })}>Supply Page&nbsp;</span>
        <br />
      </div>

      <div className="flex gap-3">
        <SessionAdvise />
      </div>

    </section>
  );
}
