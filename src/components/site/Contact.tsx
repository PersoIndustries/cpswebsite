import { useState } from "react";
import { Instagram, Mail, MapPin, Linkedin, Send } from "lucide-react";
import { profile } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useLang, ui } from "@/lib/i18n";
import { Section } from "./Section";

export function Contact() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(`${t(ui.webSubject)} — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n—\n${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const links = [
    { icon: Linkedin, label: "LinkedIn", value: "carlos-peralta-sorolla", href: profile.linkedin },
    { icon: Send, label: "X / Twitter", value: "@perso_dev", href: profile.x },
    { icon: Instagram, label: "Instagram", value: "@pers0", href: profile.instagram },
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  ];

  return (
    <Section
      id="contacto"
      eyebrow={t(ui.contactEyebrow)}
      title={t(ui.contactTitle)}
      description={t(ui.contactDesc)}
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="surface-card flex items-center gap-4 p-4"
            >
              <span className="grid size-10 place-items-center rounded-lg border border-border bg-accent/40 text-emerald-accent">
                <link.icon className="size-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs uppercase tracking-wider text-muted-foreground">
                  {link.label}
                </span>
                <span className="block truncate text-sm font-medium">{link.value}</span>
              </span>
            </a>
          ))}
          <div className="surface-card flex items-center gap-4 p-4">
            <span className="grid size-10 place-items-center rounded-lg border border-border bg-accent/40 text-blue-accent">
              <MapPin className="size-4" />
            </span>
            <span className="text-sm text-muted-foreground">{t(profile.location)}</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="surface-card space-y-4 p-6" suppressHydrationWarning>
          <div className="space-y-2" suppressHydrationWarning>
            <Label htmlFor="name">{t(ui.formName)}</Label>
            <Input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder={t(ui.formNamePh)}
            />
          </div>
          <div className="space-y-2" suppressHydrationWarning>
            <Label htmlFor="email">{t(ui.formEmail)}</Label>
            <Input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="tu@email.com"
            />
          </div>
          <div className="space-y-2" suppressHydrationWarning>
            <Label htmlFor="message">{t(ui.formMessage)}</Label>
            <Textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={t(ui.formMessagePh)}
            />
          </div>
          <Button type="submit" className="w-full">
            <Send className="size-4" /> {t(ui.formSend)}
          </Button>
        </form>
      </div>
    </Section>
  );
}
