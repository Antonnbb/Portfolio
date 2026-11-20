"use client";

import Navbar from "./components/Navbar";
import ProjectCard from "./components/ProjectCard";
import { useState } from "react";

import {
  ArrowUpRight,
  Mail,
  Code2,
  ExternalLink,
  ChevronDown,
} from "lucide-react";

const projects = [
  {
    number: "01",
    name: "Treeni-ohjelma",
    category: "Web-sovellus",
    description:
      "Treenien lisäämiseen ja hallintaan rakennettu web-sovellus, jossa on erillinen backend-palvelin, tietokantayhteys ja käyttöliittymä.",
    technologies: ["JavaScript", "Node.js", "React", "Vite"],
    apis: ["Oma backend REST API"],
    status: "Projektityö (Julkaistu)",
    githubUrl: "https://github.com/Antonnbb/Treeni-ohjelma",
    liveUrl: "https://treeni-ohjelma.onrender.com/",
  },
  {
    number: "02",
    name: "Treenikalenteri",
    category: "Web-sovellus",
    description:
      "Laajempi treenien seurantaan tarkoitettu sovellus, jossa on käyttäjätilit (rekisteröinti ja kirjautuminen), treenien lisäys, koontinäkymä ja analyysi.",
    technologies: ["JavaScript", "Node.js", "React", "Vite"],
    apis: ["Oma backend REST API"],
    status: "Projektityö",
    githubUrl: "https://github.com/Antonnbb/Treenikalenteri",
    liveUrl: "",
  },
  {
    number: "03",
    name: "Nettipeli",
    category: "Web-sovellus",
    description:
      "Selainpohjainen pelisovellus, jossa on useita treeni- ja testitiloja (mm. tähtäys-, reaktio- ja seurantatestit), tulostaulukko, profiili sekä kirjautuminen.",
    technologies: ["JavaScript", "Node.js", "React", "Vite"],
    apis: ["Oma backend REST API"],
    status: "Projektityö",
    githubUrl: "https://github.com/Antonnbb/Nettipeli",
    liveUrl: "",
  },
];

const skills = [
  { name: "JavaScript", type: "Ohjelmointikieli" },
  { name: "TypeScript", type: "Ohjelmointikieli" },
  { name: "HTML & CSS", type: "Web-kehitys" },
  { name: "React", type: "Kirjasto" },
  { name: "Next.js", type: "Framework" },
  { name: "Tailwind CSS", type: "CSS-framework" },
  { name: "Node.js", type: "Backend" },
  { name: "Express", type: "Backend" },
  { name: "Supabase", type: "Tietokanta" },
  { name: "MySQL", type: "Tietokanta" },
  { name: "REST API", type: "Rajapinnat" },
  { name: "Git & GitHub", type: "Työkalut" },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#09090b] text-white selection:bg-violet-500/30">
      <Navbar />

      {/* ETUSIVU */}
      <section
        id="home"
        className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24"
      >
        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-violet-600/10 blur-[140px]" />
        <div className="pointer-events-none absolute -left-40 bottom-0 h-[400px] w-[400px] rounded-full bg-blue-600/[0.08] blur-[130px]" />

        <div className="relative mx-auto w-full max-w-6xl py-24">
          <div className="mb-8 flex items-center gap-3">
            <span className="h-px w-10 bg-violet-400" />
            <span className="text-sm font-medium tracking-[0.2em] text-violet-300">
              WEB-KEHITTÄJÄ
            </span>
          </div>

          <h1 className="max-w-4xl text-5xl font-bold leading-[1.12] tracking-tight sm:text-7xl lg:text-8xl">
            Hei, olen
            <br />
            <span className="bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
              Anton Kiili.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-zinc-400 sm:text-xl">
            Olen web-kehitystä opiskeleva ohjelmistokehittäjä Ammattiopisto Gradiassa, Jyväskylässä.
            Tykkään rakentaa verkkosivuja ja sovelluksia
            sekä kehittää osaamistani uusien teknologioiden parissa.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#projektit"
              className="rounded-lg bg-violet-600 px-7 py-4 text-sm font-semibold transition hover:bg-violet-500"
            >
              Tutustu projekteihini <ArrowUpRight className="ml-2 inline" size={17} />
            </a>
            <a
              href="#yhteystiedot"
              className="rounded-lg border border-white/10 px-7 py-4 text-sm font-semibold transition hover:border-white/30 hover:bg-white/5"
            >
              Ota yhteyttä
            </a>
          </div>

          <div className="mt-20 flex flex-wrap gap-8 border-t border-white/10 pt-8">
            <div>
              <p className="text-2xl font-bold">React</p>
              <p className="mt-1 text-sm text-zinc-500">Frontend</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Next.js</p>
              <p className="mt-1 text-sm text-zinc-500">Web-kehitys</p>
            </div>
            <div>
              <p className="text-2xl font-bold">Node.js</p>
              <p className="mt-1 text-sm text-zinc-500">Backend</p>
            </div>
          </div>

          <a href="#minusta" className="mt-16 inline-flex items-center gap-2 text-sm text-zinc-500 transition hover:text-white">
            Vieritä alaspäin <ChevronDown size={16} />
          </a>
        </div>
      </section>

      {/* MINUSTA */}
      <section id="minusta" className="border-t border-white/[0.07] px-6 py-28">
        <div className="mx-auto grid max-w-6xl gap-16 md:grid-cols-2">
          <div>
            <p className="mb-4 text-sm font-semibold tracking-widest text-violet-400">01 / MINUSTA</p>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Tutustu minuun<span className="text-violet-400">.</span>
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-zinc-400">
            <p>
              Olen web-kehitystä opiskeleva ohjelmistokehittäjä, jota
              kiinnostaa erityisesti verkkosivustojen ja sovellusten
              suunnittelu sekä toteutus.
            </p>
            <p>
              Opintojeni ja omien projektieni kautta olen päässyt
              työskentelemään monipuolisesti frontend- ja backend-kehityksen,
              tietokantojen sekä API-rajapintojen parissa.
            </p>
            <p>
              Haluan jatkuvasti oppia uutta, kehittää omaa osaamistani
              ja päästä toteuttamaan käytännön projekteja.
            </p>
          </div>
        </div>
      </section>

      {/* PROJEKTIT */}
      <section id="projektit" className="border-t border-white/[0.07] bg-[#0d0d11] px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold tracking-widest text-violet-400">02 / PROJEKTIT</p>
          <div className="mb-14 flex flex-wrap items-end justify-between gap-5">
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Mitä olen tehnyt<span className="text-violet-400">.</span>
            </h2>
            <p className="max-w-sm text-sm leading-6 text-zinc-500">
              Tutustu projekteihini ja niiden toteutuksessa käyttämiini teknologioihin.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <ProjectCard key={project.number} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* OSAAMINEN */}
      <section id="osaaminen" className="border-t border-white/[0.07] px-6 py-28">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm font-semibold tracking-widest text-violet-400">03 / OSAAMINEN</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Teknologiat ja työkalut<span className="text-violet-400">.</span>
          </h2>
          <p className="mt-5 max-w-xl leading-7 text-zinc-400">
            Näiden teknologioiden parissa olen työskennellyt opintojeni ja omien projektieni aikana.
          </p>

          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <div key={skill.name} className="flex items-center gap-4 rounded-xl border border-white/[0.08] bg-white/[0.02] p-5 transition hover:border-violet-400/40">
                <div className="rounded-lg bg-violet-500/10 p-3 text-violet-300">
                  <Code2 size={20} />
                </div>
                <div>
                  <p className="font-semibold">{skill.name}</p>
                  <p className="mt-1 text-xs text-zinc-500">{skill.type}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* YHTEYSTIEDOT */}
      <section id="yhteystiedot" className="border-t border-white/[0.07] px-6 py-28">
        <div className="mx-auto max-w-6xl text-center">
          <p className="mb-4 text-sm font-semibold tracking-widest text-violet-400">04 / YHTEYSTIEDOT</p>
          <h2 className="text-4xl font-bold tracking-tight sm:text-6xl">
            Tehdään jotain <span className="text-violet-400">hienoa.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-lg leading-7 text-zinc-400">
            Olen kiinnostunut uusista mahdollisuuksista, projekteista
            ja yhteistyöstä. Ota rohkeasti yhteyttä!
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a href="mailto:antonok.kiili@gmail.com" className="flex items-center gap-2 rounded-lg bg-violet-600 px-6 py-4 text-sm font-semibold transition hover:bg-violet-500">
              <Mail size={17} /> Lähetä sähköpostia
            </a>
            <a href="https://github.com/Antonnbb" target="_blank" rel="noreferrer" className="flex items-center gap-2 rounded-lg border border-white/10 px-6 py-4 text-sm font-semibold transition hover:bg-white/5">
              <Code2 size={18} /> GitHub <ExternalLink size={14} />
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/[0.07] px-6 py-8">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 text-sm text-zinc-500">
          <p>© 2026 Anton Kiili. Kaikki oikeudet pidätetään.</p>
          <a href="#home" className="transition hover:text-white">Takaisin ylös ↑</a>
        </div>
      </footer>
    </main>
  );
}