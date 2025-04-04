"use client";
import { ChevronsDown, Github, Menu, Code, Smartphone, ShoppingCart, BarChart, Database, ArrowRight, PhoneCall } from "lucide-react";  // Import icons
import React from "react";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { Separator } from "../ui/separator";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "../ui/navigation-menu";
import { Button } from "../ui/button";
import Link from "next/link";
import Image from "next/image";
import { ToggleTheme } from "./toogle-theme";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"; 
import { FaWhatsapp } from "react-icons/fa";

interface RouteProps {
  href: string;
  label: string;
}

interface ServiceProps {
  title: string;
  href: string;
  icon: React.ElementType;  // Add icon type to the service props
}

const routeList: RouteProps[] = [
  {
    href: "#testimonials",
    label: "Testimonials",
  },
  {
    href: "/team",
    label: "Team",
  },
  {
    href: "/about",
    label: "About Us",
  },
  {
    href: "/carrer",
    label: "Carrers",
  },
];

// Updated service list with titles, hrefs, and icons
const serviceList: ServiceProps[] = [
  {
    title: "WEB DEVELOPMENT",
    href: "/web",
    icon: Code,  // Using the 'Code' icon for Web Development
  },
  {
    title: "APP DEVELOPMENT",
    href: "/apps",
    icon: Smartphone,  // Using the 'Smartphone' icon for App Development
  },
  {
    title: "E-COMMERCE",
    href: "/ecom",
    icon: ShoppingCart,  // Using the 'ShoppingCart' icon for E-Commerce
  },
  {
    title: "DIGITAL MARKETING",
    href: "/digital",
    icon: BarChart,  // Using the 'BarChart' icon for Digital Marketing
  },
  {
    title: "DATA ENTRY",
    href: "/data",
    icon: Database,  // Using the 'Database' icon for Data Entry
  },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <header className="shadow-inner bg-opacity-15 w-[90%] md:w-[70%] lg:w-[75%] lg:max-w-screen-xl top-5 mx-auto sticky border border-secondary z-40 rounded-2xl flex justify-between items-center p-2 bg-card">
      <Link href="/" className="font-bold text-lg flex items-center">
        <ChevronsDown  className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
        Triset
      </Link>
      
      {/* Mobile Navbar */}
      <div className="flex items-center lg:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Menu
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer lg:hidden"
            />
          </SheetTrigger>

          <SheetContent
            side="left"
            className="flex flex-col justify-between rounded-tr-2xl rounded-br-2xl bg-card border-secondary"
          >
            <div>
              <SheetHeader className="mb-4 ml-4">
                <SheetTitle className="flex items-center">
                  <Link href="/" className="flex items-center">
                    <ChevronsDown className="bg-gradient-to-tr border-secondary from-primary via-primary/70 to-primary rounded-lg w-9 h-9 mr-2 border text-white" />
                    Triset
                  </Link>
                </SheetTitle>
              </SheetHeader>

              {/* Services Accordion for Mobile */}
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="services">
                  <AccordionTrigger className="px-4 py-2 no-underline hover:no-underline text-lg hover:text-muted-foreground font-normal">
                    Services
                  </AccordionTrigger>
                  <AccordionContent className="flex flex-col gap-2">
                    {serviceList.map(({ title, href, icon: Icon }) => (
                      <Button
                        key={title}
                        onClick={() => setIsOpen(false)}
                        asChild
                        variant="ghost"
                        className="justify-start text-base"
                      >
                        <Link href={href} className="no-underline hover:no-underline flex items-center gap-2">
                         
                          {title}
                        </Link>
                      </Button>
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              <div className="flex flex-col gap-2">
                {routeList.map(({ href, label }) => (
                  <Button
                    key={href}
                    onClick={() => setIsOpen(false)}
                    asChild
                    variant="ghost"
                    className="justify-start text-base"
                  >
                    <Link href={href}>{label}</Link>
                  </Button>
                ))}
              </div>

            </div>

            <SheetFooter className="flex-col sm:flex-col justify-start items-start">
              <Separator className="mb-2" />
              <ToggleTheme />
            </SheetFooter>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navbar */}
      <NavigationMenu className="hidden lg:block mx-auto">
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-card text-base">
              Services
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid w-[600px] grid-cols-2 gap-5 p-4">
                <Image
                  src="https://avatars.githubusercontent.com/u/75042455?v=4"
                  alt="RadixLogo"
                  className="h-full w-full rounded-md object-cover"
                  width={600}
                  height={600}
                />
                <ul className="flex flex-col gap-2">
                  {serviceList.map(({ title, href, icon: Icon }) => (
                    <li key={title} className="rounded-md p-3 text-sm hover:bg-muted flex items-center gap-2">
                      <Icon className="w-5 h-5" />
                      <Link href={href} className="text-foreground">
                        <p className="mb-1 font-semibold leading-none">{title}</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            {routeList.map(({ href, label }) => (
              <NavigationMenuLink key={href} asChild>
                <Link href={href} className="text-base px-2">
                  {label}
                </Link>
              </NavigationMenuLink>
            ))}
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>

      <div className="hidden lg:flex">
      <Button asChild className="mr-4 font-bold group/arrow">
              <Link
                href="https://wa.me/919848814614?text=Hi%2C%20I'm%20interested%20in%20booking%20a%20demo%20with%20your%20team."
                target="_blank"
              >
                Book a demo now 🚀
                <ArrowRight className="size-5 ml-2 group-hover/arrow:translate-x-1 transition-transform" />
              </Link>
            </Button>
        <ToggleTheme />

        <Button asChild size="sm" variant="ghost" aria-label="View on GitHub">
        <Link
                href="https://wa.me/919848814614?text=Hi%2C%20I'm%20interested%20in%20booking%20a%20demo%20with%20your%20team."
                target="_blank"
              >
            <FaWhatsapp className="size-5" />
          </Link>
        </Button>
      </div>
    </header>
  );
};
