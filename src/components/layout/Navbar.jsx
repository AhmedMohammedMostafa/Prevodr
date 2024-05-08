"use client"
import React from "react";
import { useState } from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button,DropdownItem,DropdownTrigger,Dropdown,DropdownMenu} from "@nextui-org/react";
import { AiOutlineArrowDown  } from "react-icons/ai";
import { DesktopIcon,MobileIcon,StarIcon,BulpIcon,LaptopIcon,HomeIcon, ArchiveIcon, ServerIcon, UsersIcon, ToolIcon, PlaneIcon, TicketIcon, BackpackIcon } from "@/svgs/Icons";
import Home from "@/app/page";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    "Projects",
    "Services",
    "About",
    "Hire us!",
  ];

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll isBordered>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit">Prevodr.</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-5" justify="center">
      <NavbarItem>
          <Link color="foreground" href="/" className="hover:text-primary-500">
          <div className="flex gap-1 flex-row justify-center items-center">
<HomeIcon className="h-4 w-4" fill={'#0065D6'}/>
            Home
          </div>
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="/projects" className="hover:text-primary-500">
          <div className="flex gap-1 flex-row justify-center items-center">
<ArchiveIcon className="h-4 w-4" fill={'#0065D6'}/>
            Projects
          </div>
          </Link>
        </NavbarItem>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent hover:text-primary-500"
                endContent={<AiOutlineArrowDown/>}
                radius="sm"
                variant="light"
              >
                <div className="flex gap-1 flex-row justify-center items-center">
<ServerIcon className="h-4 w-4" fill={'#0065D6'}/>
            Services
          </div>
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="web"
              href="/services/web-development"
              description="Create a website that scales with your business."
              startContent={<DesktopIcon color="#0065D6" size="2em"/>}
            >
              Website Development
            </DropdownItem>
            <DropdownItem
              key="app"
              href="/services/app-development"
              description="Build a mobile app that your users will love."
              startContent={<MobileIcon color="#0065D6" size="2em"/>}
            >
              App Development
            </DropdownItem>
            <DropdownItem
              key="software"
              href="/services/software-development"
              description="Develop custom software that meets your unique needs for your company."
              startContent={<LaptopIcon color="#0065D6" size="2em"/>}
            >
              Software Development
            </DropdownItem>
            <DropdownItem
              key="branding"
              href="/services/branding"
              description="Create a brand identity that stands out from the competition."
              startContent={<StarIcon color="#0065D6" size="2em"/>}
            >
              Branding
            </DropdownItem>
          
            
          </DropdownMenu>
        </Dropdown>
        <Dropdown>
          <NavbarItem>
            <DropdownTrigger>
              <Button
                disableRipple
                className="p-0 bg-transparent data-[hover=true]:bg-transparent hover:text-primary-500"
                endContent={<AiOutlineArrowDown/>}
                radius="sm"
                variant="light"
              >
                <div className="flex gap-1 flex-row justify-center items-center">
<ToolIcon className="h-4 w-4" fill={'#0065D6'}/>
            Tools
          </div>
              </Button>
            </DropdownTrigger>
          </NavbarItem>
          <DropdownMenu
            aria-label="ACME features"
            className="w-[340px]"
            itemClasses={{
              base: "gap-4",
            }}
          >
            <DropdownItem
              key="travelportal"
              href="/saas/travel-portal"
              description="The perfect SaaS for your Travel Agency Company."
              startContent={<PlaneIcon color="#0065D6" size="2em"/>}
            >
              Travel Portal
            </DropdownItem>
            <DropdownItem
              key="ticketing"
              href="/saas/ticketing-system"
              description="The perfect SaaS to sell tickets."
              startContent={<TicketIcon color="#0065D6" size="2em"/>}
            >
              Ticketing System
            </DropdownItem>
        
            <DropdownItem
              key="local4all"
              href="/saas/local4all"
              description="A website that contains all the local brands in Egypt."
              startContent={<BackpackIcon color="#0065D6" size="2em"/>}
            >
              Local4All
            </DropdownItem>
          
            
          </DropdownMenu>
        </Dropdown>
        <NavbarItem>
          <Link color="foreground" href="/about" className="hover:text-primary-500">
          <div className="flex gap-1 flex-row justify-center items-center">
<UsersIcon className="h-4 w-4" fill={'#0065D6'}/>
            About
          </div>
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        
        <NavbarItem>
          <Button as={Link} color="primary" href="/hire" variant="shadow" size="md" startContent={<BulpIcon fill="white"/>}  radius="small" fullWidth={true}>
            Hire us!
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 1 ? "foreground" : index === menuItems.length - 1 ? "blue" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
