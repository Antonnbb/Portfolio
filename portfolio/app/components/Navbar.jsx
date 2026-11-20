"use client";

import { useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { href: "#minusta", label: "Minusta" },
  { href: "#projektit", label: "Projektit" },
  { href: "#osaaminen", label: "Osaaminen" },
  { href: "#yhteystiedot", label: "Yhteystiedot" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/[0.07] bg-[#09090b]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <a href="#home" className="text-xl font-bold tracking-tight">
          AK<span className="text-violet-400">.</span>
        </a>

        {/* Työpöytänavigaatio */}
        <nav className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA-painike + mobiilivalikon nappi */}
        <div className="flex items-center gap-3">
          <a
            href="#yhteystiedot"
            className="hidden items-center gap-1 rounded-full border border-violet-400/40 px-5 py-2.5 text-sm transition hover:bg-violet-500/10 sm:inline-flex"
          >
            Ota yhteyttä <ArrowUpRight size={15} />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Sulje valikko" : "Avaa valikko"}
            aria-expanded={menuOpen}
            className="inline-flex items-center justify-center rounded-lg border border-white/10 p-2.5 text-zinc-300 transition hover:bg-white/5 hover:text-white md:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobiilivalikko */}
      {menuOpen && (
        <div className="border-t border-white/[0.07] bg-[#09090b]/95 px-6 py-6 md:hidden">
          <nav className="flex flex-col space-y-4 text-base text-zinc-300">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="transition hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#yhteystiedot"
              onClick={() => setMenuOpen(false)}
              className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-violet-400/40 px-5 py-2.5 text-sm text-white transition hover:bg-violet-500/10"
            >
              Ota yhteyttä <ArrowUpRight size={15} />
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}