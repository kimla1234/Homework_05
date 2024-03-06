"use client";

import { Button, Navbar } from "flowbite-react";

function Component() {
  return (
    <Navbar className="flex  justify-center item-center">
      <Navbar.Brand href="">
        <img
          src="src/assets/logo.jpeg"
          className="mr-3 h-10 sm:h-24"
          alt="Flowbite React Logo"
        />
        <span className="self-center  text-xl font-semibold dark:text-white">
          Fresh Food
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
export default Component;
