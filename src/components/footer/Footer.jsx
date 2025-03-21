import React from "react";

export default function Footer() {
  return (
    <footer className="flex bg-white items-center justify-between p-3">
      <p className="text-lg font-light ml-6">Hecho por Cesar Sandoval</p>
      <a
        className="flex gap-1.5 items-center mr-6"
        href="https://www.github.com/casv331/ColorPal"
        rel="noopener"
        target="blank"
      >
        <img className="size-8" src="/img/SVGs/github.svg" alt="Github logo" />
        <span className="hidden sm:block">Github</span>
      </a>
    </footer>
  );
}
