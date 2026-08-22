import { useEffect, useState } from "react";
import { Menu, Moon, Sun, X } from "lucide-react";
import { nav, profile } from "@/data/site";
import { Button } from "@/components/ui/button";
import { useLang, ui } from "@/lib/i18n";
import { cn } from "@/lib/utils";

function useTheme() {
  const [dark, setDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const isDark = stored ? stored === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggle = () => {
    setDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      return next;
    });
  };

  return { dark, toggle };
}

export function Header() {
  const { dark, toggle } = useTheme();
  const { lang, setLang, t } = useLang();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "border-b border-border bg-background/80 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-5 py-3.5 sm:px-8">
        <a href="#inicio" className="group flex items-center gap-2.5">
          <span className="grid size-8 place-items-center rounded-lg bg-gradient-to-br from-emerald-accent to-blue-accent text-sm font-bold text-background transition-transform duration-300 group-hover:rotate-6 group-hover:scale-110">
            CP
          </span>
          <span className="text-sm font-semibold tracking-tight sm:text-base">{profile.name}</span>
        </a>

        <nav className="hidden items-center gap-0.5 xl:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative rounded-md px-2.5 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground after:absolute after:inset-x-2.5 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-emerald-accent after:transition-transform hover:after:scale-x-100"
            >
              {t(item.label)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <div className="flex items-center rounded-lg border border-border p-0.5 text-xs font-semibold">
            {(["es", "en"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className={cn(
                  "rounded-md px-2 py-1 uppercase transition-colors",
                  lang === code
                    ? "bg-emerald-accent/15 text-emerald-accent"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {code}
              </button>
            ))}
          </div>
          <Button variant="ghost" size="icon" onClick={toggle} aria-label={t(ui.toggleTheme)}>
            {dark ? <Sun className="size-4" /> : <Moon className="size-4" />}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="xl:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={t(ui.openMenu)}
            aria-expanded={open}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </Button>
        </div>
      </div>

      {open ? (
        <nav className="animate-rise max-h-[70vh] overflow-y-auto border-t border-border bg-background/95 px-5 py-3 backdrop-blur-xl xl:hidden">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {t(item.label)}
            </a>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
