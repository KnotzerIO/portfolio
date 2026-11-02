import { GithubIcon, LinkedinIcon } from "./icons";

const links = [
  { href: "https://github.com/KnotzerIO", label: "GitHub", Icon: GithubIcon },
  { href: "https://www.linkedin.com/in/knotzer", label: "LinkedIn", Icon: LinkedinIcon },
];

export default function Footer() {
  return (
    <footer className="relative z-10 mt-12 border-t border-white/10 px-4 py-16 text-white">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 text-center">
        <div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            Let&apos;s build something together
          </h2>
          <p className="mx-auto mt-3 max-w-md text-white/70">
            Open for new projects and collaborations. The fastest way to reach
            me is LinkedIn.
          </p>
        </div>
        <ul className="flex flex-wrap justify-center gap-3">
          {links.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 text-sm font-medium text-white/85 transition-colors hover:bg-white/15 hover:text-white"
              >
                <Icon className="h-4 w-4" />
                {label}
              </a>
            </li>
          ))}
        </ul>
        <p className="text-sm text-white/50">
          © {new Date().getFullYear()} Mark Knotzer
        </p>
      </div>
    </footer>
  );
}
