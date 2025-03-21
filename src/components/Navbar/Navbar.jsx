import React from "react";

function Navbar() {
  return (
    <header className="bg-gray-50 border-b-2 border-gray-200 px-6 py-3">
      <nav className="flex justify-between w-full items-center">
        <div className="flex text-2xl font-bold items-center">
          <img
            className="mr-1.5 size-10"
            src="/color-wheel-svgrepo-com.svg"
            alt="Page logo"
          />
          ColorPal
        </div>
        <div>
          <a
            className="flex gap-1.5 items-center"
            href="https://www.github.com/casv331/ColorPal"
            rel="noopener"
            target="blank"
          >
            <img
              className="size-8"
              src="/img/SVGs/github.svg"
              alt="Github logo"
            />
            <span className="hidden sm:block">Github</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
