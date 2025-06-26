"use client";

import { Button } from "@/components/ui/button";
import { navigation } from "@/lib/config";
import { Menu, X } from "lucide-react";
import React, { useState } from "react";
import ThemeToggle from "./theme-toggle";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const router = useRouter();
  const pathName = usePathname();
  const isRoot = pathName === "/" && typeof window !== "undefined";

  return (
    <header className="fixed top-0 w-full z-50 glass-effect">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* logo section  */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-primary/80 rounded-lg flex items-center justify-center">
              <span className="text-white text-sm font-bold">W</span>
            </div>
            <span className="text-xl font-bold gradient-text">WorkSpace</span>
          </div>

          {/* desktop navigation  */}
          {isRoot && (
            <nav className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  href={item.href}
                  key={item.name}
                  className="text-muted-foreground "
                >
                  {item.name}
                </a>
              ))}
            </nav>
          )}

          {/* desktop action button   */}
          {isRoot && (
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <Button variant="ghost" onClick={() => router.push("/signin")}>
                Sign In
              </Button>
              <Button onClick={() => router.push("/signin")}>
                Get Started
              </Button>
            </div>
          )}

          {/* mobile menu and theme toggle button   */}
          {isRoot && (
            <div className="flex md:hidden items-center space-x-2">
              <ThemeToggle />
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          )}
        </div>

        {/* navigation for phone  */}
        {isOpen && isRoot && (
          <div className="md:hidden border-t border-border/50">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  href={item.href}
                  key={item.name}
                  className="block px-3 py-2 text-muted-foreground hover:text-foreground transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2 space-y-2">
                <Button
                  className="w-full"
                  onClick={() => router.push("/signin")}
                >
                  Sign In
                </Button>
                <Button
                  className="w-full"
                  onClick={() => router.push("/signin")}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
