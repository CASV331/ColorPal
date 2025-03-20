import React from "react";

function Navbar() {
  return (
    <header className="bg-gray-50 px-6 py-3 border-b-2 border-gray-200">
      <nav className="flex items-center justify-between w-full">
        <div className="flex items-center text-2xl font-bold">
          <img
            className="mr-1.5 size-10"
            src="/color-wheel-svgrepo-com.svg"
            alt="Page logo"
          />
          ColorPal
        </div>
        <div>
          <a
            className="gap-1.5 flex items-center"
            href="https://www.github.com/casv331"
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
