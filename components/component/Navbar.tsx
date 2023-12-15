"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Link from "next/link";
import Logo from "@/public/assets/Logo.png";
import Image from "next/image";
import { CiMenuBurger } from "react-icons/ci";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function Navbar() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsSticky(scrollPosition > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed flex w-full items-center justify-between`}
      style={{
        backgroundColor: isSticky ? "white" : "rgba(255, 255, 255, 0.4)",
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <div className="mb-4 md:mb-0 flex items-center space-x-4 justify-center">
        <Link href="/" className="text-lg font-medium text-black">
          <Image src={Logo} alt="Logo" width={200} height={200} />
        </Link>
        <nav className="hidden md:flex space-x-4">
          <NavLink href="/">Home</NavLink>
          <NavLink href="/about">About Us</NavLink>
          <NavLink href="/features">Features</NavLink>
          <NavLink href="/contact">Contact Us</NavLink>
        </nav>
      </div>

      <div className="md:hidden">
        <SheetDemo />
      </div>

      <div className="hidden md:flex space-x-4"></div>
    </div>
  );
}

function NavLink({ href, children }: NavLinkProps) {
  return (
    <Link
      href={href}
      className="text-gray-700 hover:text-black transition duration-300"
    >
      {children}
    </Link>
  );
}

function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <CiMenuBurger
          style={{ color: "black", fontSize: "2rem", marginRight: "1rem" }}
        />
      </SheetTrigger>
      <SheetContent>
        <nav className="py-4">
          <MobileNavLink href="/">Home</MobileNavLink>
          <MobileNavLink href="/about">About Us</MobileNavLink>
          <MobileNavLink href="/features">Features</MobileNavLink>
          <MobileNavLink href="/contact">Contact Us</MobileNavLink>
        </nav>
      </SheetContent>
    </Sheet>
  );
}

// MobileNavLink component for each mobile navigation item
function MobileNavLink({ href, children }: MobileNavLinkProps) {
  return (
    <a
      href={href}
      className="block py-2 text-gray-700 hover:text-black transition duration-300"
    >
      {children}
    </a>
  );
}
