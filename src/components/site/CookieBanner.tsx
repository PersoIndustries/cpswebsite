import { useEffect, useState } from "react";
import { Cookie, X } from "lucide-react";
import { useLang, ui } from "@/lib/i18n";

const STORAGE_KEY = "cookie-consent";

export function CookieBanner() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) !== "accepted") setVisible(true);
  }, []);

  if (!visible) return null;

  const accept = () => {
    localStorage.setItem(STORAGE_KEY, "accepted");
    setVisible(false);
  };

  return (
    <div
      role="dialog"
      aria-label={t(ui.cookieTitle)}
      className="fixed inset-x-0 bottom-0 z-50 flex justify-center p-4"
    >
      <div className="surface-card animate-rise flex w-full max-w-3xl flex-col gap-4 p-5 shadow-lg backdrop-blur sm:flex-row sm:items-center">
        <Cookie className="size-5 shrink-0 text-emerald-accent" />
        <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
          {t(ui.cookieText)}{" "}
          <a
            href="/cookies"
            className="text-foreground underline underline-offset-4 hover:text-emerald-accent"
          >
            {t(ui.cookieMore)}
          </a>
        </p>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={accept}
            className="rounded-lg bg-emerald-accent px-4 py-2 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            {t(ui.cookieAccept)}
          </button>
          <button
            type="button"
            onClick={accept}
            aria-label={t(ui.cookieAccept)}
            className="grid size-9 place-items-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
          >
            <X className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
