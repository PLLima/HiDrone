"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";
import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { link as linkStyles } from "@heroui/theme";
import NextLink from "next/link";
import clsx from "clsx";
import { useEffect, useState } from "react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon, Logo } from "@/components/icons";
import { LogInModal } from "./login";
import { SignUpModal } from "./signup";

import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  useDisclosure,
} from "@heroui/react";

export const Navbar = () => {
  const [loggedName, setLoggedName] = useState<string | null>(null);
  const [loggedRole, setLoggedRole] = useState<"client" | "supplier" | null>(null);

  const {
    isOpen: isOpenLogin,
    onOpen: onOpenLogin,
    onClose: onCloseLogin,
  } = useDisclosure();
  const {
    isOpen: isOpenSignup,
    onOpen: onOpenSignup,
    onClose: onCloseSignup,
  } = useDisclosure();

  useEffect(() => {
    const storedName = localStorage.getItem("logged_name_debug");
    const storedRole = localStorage.getItem("logged_role_debug");
    setLoggedName(storedName);
    if (storedRole === "client" || storedRole === "supplier") {
      setLoggedRole(storedRole);
    } else {
      setLoggedRole(null);
    }
  }, []);

  return (
    <HeroUINavbar maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink className="flex justify-start items-center gap-2" href="/">
            <Logo />
            <p className="font-bold text-inherit">HIDRONE</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex basis-1/5 sm:basis-full" justify="end">
        <NavbarItem className="hidden sm:flex gap-2">
          <Link isExternal aria-label="Github" href={siteConfig.links.github}>
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex items-center gap-4">
          {loggedName ? (
            <Dropdown backdrop="blur">
              <DropdownTrigger>
                <Button variant="bordered">{loggedName}</Button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Static Actions" variant="faded">
                {loggedRole && (
                  <DropdownItem
                    key="order_history"
                    onPress={() => {
                      if (loggedRole === "supplier") {
                        window.location.href = "/order";
                      } else {
                        window.location.href = "/order_history";
                      }
                    }}
                  >
                    Order History
                  </DropdownItem>
                )}

                <DropdownItem
                  key="logout"
                  className="text-danger"
                  color="danger"
                  onPress={() => {
                    localStorage.removeItem("logged_name_debug");
                    localStorage.removeItem("logged_email_debug");
                    localStorage.removeItem("cnpj_debug");
                    localStorage.removeItem("logged_role_debug");
                    setLoggedName(null);
                    setLoggedRole(null);
                    window.location.reload();
                  }}
                >
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          ) : (
            <div className="flex gap-2">
              <Button
                onPress={onOpenLogin}
                variant="light"
              >
                Log in
              </Button>
              <LogInModal isOpen={isOpenLogin} onClose={onCloseLogin} />
              <Button variant="ghost" color="primary" onPress={onOpenSignup}>
                Sign up
              </Button>
              <SignUpModal isOpen={isOpenSignup} onClose={onCloseSignup} />
            </div>
          )}
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <Link isExternal aria-label="Github" href={siteConfig.links.github}>
          <GithubIcon className="text-default-500" />
        </Link>
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item.label}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                    ? "danger"
                    : "foreground"
                }
                href="#"
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
