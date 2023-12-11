import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
}

interface MobileNavLinkProps {
  href: string;
  children: React.ReactNode;
}

export function Navbar() {
  return (
    <div className="flex md:items-center justify-between p-4">
      {/* Logo or brand */}
      <div className="mb-4 md:mb-0">
        <a href="/" className="text-lg font-medium text-black">
          Your Logo
        </a>
      </div>

      {/* Mobile Menu Trigger */}
      <div className="md:hidden">
        <SheetDemo />
      </div>

      {/* Navigation Links */}
      <nav className="hidden md:flex space-x-4">
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About Us</NavLink>
        <NavLink href="/features">Features</NavLink>
        <NavLink href="/contact">Contact Us</NavLink>
      </nav>
    </div>
  );
}

// NavLink component for each navigation item
function NavLink({ href, children }: NavLinkProps) {
  return (
    <a
      href={href}
      className="text-gray-700 hover:text-black transition duration-300"
    >
      {children}
    </a>
  );
}

// SheetDemo component for the mobile menu
function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Menu</Button>
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
