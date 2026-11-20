"use client";

import { ArrowUpRight, ExternalLink } from "lucide-react";

export default function ProjectCard({ project }) {
  return (
    <article className="group flex flex-col justify-between rounded-2xl border border-white/[0.08] bg-[#111115] p-7 transition duration-300 hover:-translate-y-1 hover:border-violet-400/40">
      <div>
        <div className="mb-10 flex items-center justify-between">
          <span className="font-mono text-sm text-violet-400">{project.number}</span>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-zinc-400">
            {project.category}
          </span>
        </div>

        <h3 className="text-3xl font-bold">{project.name}</h3>
        <p className="mt-5 leading-7 text-zinc-400">{project.description}</p>

        <div className="mt-7">
          <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
            Käytetyt teknologiat
          </p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md bg-white/[0.06] px-3 py-1.5 text-xs text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {project.apis?.length > 0 && (
          <div className="mt-5">
            <p className="mb-2 text-xs font-medium uppercase tracking-wider text-zinc-500">
              API:t
            </p>
            <div className="flex flex-wrap gap-2">
              {project.apis.map((api) => (
                <span
                  key={api}
                  className="rounded-md border border-violet-400/25 bg-violet-500/10 px-3 py-1.5 text-xs text-violet-200"
                >
                  {api}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-9 flex items-center justify-between border-t border-white/10 pt-5">
        <span className="text-xs text-zinc-500">{project.status}</span>

        <div className="flex items-center gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm text-zinc-300 transition hover:text-white"
            >
              GitHub <ExternalLink size={14} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 text-sm text-violet-300 transition hover:text-white"
            >
              Julkaistu-sivu <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}