"use client";

import { title, subtitle } from "@/components/primitives";
import {Link} from "@heroui/react";

export default function SupplyPage() {
  const SessionAdvise = () => {
    // Analize localstorage user name and enterprise name
    
    // If user name is null, show a message
    if (localStorage.getItem("logged_name_debug") === null) {
      return (
        <div className={subtitle({})}> 
          Please log in or sign up to manage your supply chain.
        </div>
      );
    }
    // If enterprise name is null, show another message
    if (localStorage.getItem("enterprise_name_debug") === null) {
      return (
        <a>
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
