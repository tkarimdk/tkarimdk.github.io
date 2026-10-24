"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Contrast, ArrowUpRight, Menu, X, Command, Search } from "lucide-react";
import { projects, projectSlug } from "./projects";
import { site, navigation } from "./site";
export default function Shell({ children }: { children: React.ReactNode }) {
  const path = usePathname(),
    router = useRouter();
  const [menu, setMenu] = useState(false),
    [theme, setTheme] = useState("dark"),
    [open, setOpen] = useState(false),
    [query, setQuery] = useState(""),
    [selected, setSelected] = useState(0),
    [compact, setCompact] = useState(false);
  const dialog = useRef<HTMLDialogElement>(null),
    input = useRef<HTMLInputElement>(null),
    trigger = useRef<HTMLElement | null>(null);
  useEffect(() => {
    try {
      const saved =
        localStorage.getItem("theme") === "light" ? "light" : "dark";
      setTheme(saved);
      document.documentElement.dataset.theme = saved;
      delete document.documentElement.dataset.architecture;
      localStorage.removeItem("architecture");
    } catch {}
  }, []);
  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 45);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  function close() {
    setOpen(false);
  }
  function launch(element?: HTMLElement) {
    trigger.current = element ?? (document.activeElement as HTMLElement);
    setQuery("");
    setSelected(0);
    setOpen(true);
  }
  useEffect(() => {
    function key(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (dialog.current?.open) setOpen(false);
        else {
          trigger.current = document.activeElement as HTMLElement;
          setQuery("");
          setSelected(0);
          setOpen(true);
        }
      }
    }
    window.addEventListener("keydown", key);
    return () => window.removeEventListener("keydown", key);
  }, []);
  useEffect(() => {
    if (open) {
      dialog.current?.showModal();
      input.current?.focus();
      const old = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = old;
      };
    } else {
      dialog.current?.close();
      trigger.current?.focus();
    }
  }, [open]);
  function toggleTheme() {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.dataset.theme = next;
    try {
      localStorage.setItem("theme", next);
    } catch {}
  }
  const commands = [
    ...navigation.map(([href, label]) => ({
      label: `Go to ${label}`,
      group: "NAVIGATION",
      run: () => router.push(href),
    })),
    ...projects.map((p) => ({
      label: p.name,
      group: "PROJECT",
      run: () => router.push(`/projects/${projectSlug(p)}`),
    })),
    {
      label: "Open GitHub",
      group: "EXTERNAL",
      run: () => {
        window.location.href = site.github;
      },
    },
  ].filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));
  function execute(i: number) {
    const command = commands[i];
    if (command) {
      close();
      command.run();
    }
  }
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header className={`site-header ${compact ? "compact" : ""}`}>
        <Link
          href="/"
          className="brand"
          onClick={() => setMenu(false)}
          aria-label="Tanzimul Karim home"
        >
          <span className="brand-name">Tanzimul Karim<span>.</span></span>
        </Link>
        <nav
          id="main-navigation"
          className={menu ? "open" : ""}
          aria-label="Main navigation"
        >
          {navigation.map(([href, label]) => (
            <Link
              href={href}
              key={href}
              aria-current={
                path === href ||
                (href === "/work" && path.startsWith("/projects/"))
                  ? "page"
                  : undefined
              }
              onClick={() => setMenu(false)}
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-tools">
          <button
            className="icon-button"
            onClick={(e) => launch(e.currentTarget)}
            aria-label="Open command palette"
            title="Search / Ctrl+K"
          >
            <Command size={19} />
          </button>
          <button
            className="icon-button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
          >
            <Contrast size={19} />
          </button>
          <button
            className="icon-button menu-toggle"
            aria-controls="main-navigation"
            aria-expanded={menu}
            aria-label={menu ? "Close navigation" : "Open navigation"}
            onClick={() => setMenu(!menu)}
          >
            {menu ? <X /> : <Menu />}
          </button>
        </div>
      </header>
      <main id="main" tabIndex={-1}>
        {children}
      </main>
      <footer>
        <span>
          &copy; {new Date().getFullYear()} {site.name}
        </span>
        <span className="footer-note">
          SOFTWARE / MACHINE LEARNING / SYSTEMS
        </span>
        <a href={site.github} target="_blank" rel="noreferrer">
          GitHub <ArrowUpRight size={14} />
        </a>
        <a href={site.linkedin} target="_blank" rel="noreferrer">
          LinkedIn <ArrowUpRight size={14} />
        </a>
      </footer>
      <dialog
        ref={dialog}
        className="command-dialog"
        onCancel={(e) => {
          e.preventDefault();
          close();
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        aria-labelledby="command-title"
      >
        <div className="command-top">
          <Search size={19} />
          <h2 id="command-title" className="sr-only">
            Search portfolio commands
          </h2>
          <input
            ref={input}
            placeholder="Search projects, pages, commands..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelected(0);
            }}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") {
                e.preventDefault();
                setSelected((i) => Math.min(i + 1, commands.length - 1));
              }
              if (e.key === "ArrowUp") {
                e.preventDefault();
                setSelected((i) => Math.max(i - 1, 0));
              }
              if (e.key === "Enter") {
                e.preventDefault();
                execute(selected);
              }
            }}
            aria-label="Search commands"
            aria-controls="command-results"
          />
          <button
            onClick={close}
            className="icon-button"
            aria-label="Close commands"
          >
            <X size={17} />
          </button>
        </div>
        <div id="command-results" className="command-results">
          {commands.length ? (
            commands.map((c, i) => (
              <button
                key={c.label}
                className={selected === i ? "selected" : ""}
                onFocus={() => setSelected(i)}
                onClick={() => execute(i)}
                ref={(node) => {
                  if (selected === i)
                    node?.scrollIntoView({ block: "nearest" });
                }}
              >
                <span>{c.label}</span>
                <small>{c.group}</small>
              </button>
            ))
          ) : (
            <p>No matches. Try a project name or Contact.</p>
          )}
        </div>
        <div className="command-footer">
          Arrows navigate / Enter select / Esc close <kbd>Ctrl / Cmd K</kbd>
        </div>
      </dialog>
    </>
  );
}
