"use client";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
} from "@nextui-org/navbar";

import NextLink from "next/link";

import { ThemeSwitch } from "@/components/theme-switch";
import { SearchIcon } from "./icons";
import { Link, Image, Input, Button } from "@nextui-org/react";
// import { } from "@nextui-org/react";
import {
  ChevronDown,
  Heart,
  KeyboardMusic,
  Package,
  ShoppingCartIcon,
  UserCircle2Icon,
} from "lucide-react";
export const Navbar = () => {
  return (
    <NextUINavbar maxWidth="xl" position="sticky">
      <NavbarBrand className="w-full" as={Link} href={"/"}>
        <h1 className="tracking-tight flex items-center font-semibold from-[#FF1CF7] to-[#b249f8] text-xl leading-9 bg-clip-text text-transparent bg-gradient-to-b mr-3">
          <KeyboardMusic className="mr-3" color="#b249f8" /> BitBiltz
        </h1>
      </NavbarBrand>
      <Input
        classNames={{
          base: "max-w-full h-10",
          mainWrapper: "h-full",
          input: "text-small",
          inputWrapper:
            "h-full w-full hidden md:block font-normal text-default-500 bg-default-400/20 dark:bg-default-500/20 rounded-md",
        }}
        placeholder="Type to search..."
        size="md"
        startContent={<SearchIcon size={18} />}
        type="search"
      />
      <NavbarContent className="gap-0" justify="end">
        <Button
          variant="light"
          className="font-semibold rounded-md"
          as={Link}
          href="/auth/login"
        >
          <UserCircle2Icon size={22} strokeWidth={1.5} />
          Login
        </Button>
        <Button
          variant="light"
          className="font-semibold rounded-md"
          as={Link}
          href="/admin"
        >
          Admin
        </Button>
        <Button
          href="#"
          as={Link}
          variant="light"
          className="rounded-md font-semibold"
        >
          <ShoppingCartIcon size={22} strokeWidth={1.5} />
          Cart
        </Button>
        <ThemeSwitch className="ml-2" />
      </NavbarContent>
    </NextUINavbar>
  );
};
