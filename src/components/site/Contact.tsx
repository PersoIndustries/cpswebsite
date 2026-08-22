import { useState } from "react";
import { Mail, MapPin, MessageCircle, Phone, Linkedin, Send } from "lucide-react";
import { profile } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Section } from "./Section";

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const subject = encodeURIComponent(`Contacto web — ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n—\n${form.name} (${form.email})`);
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const links = [
    { icon: Linkedin, label: "LinkedIn", value: "carlos-peralta-sorolla", href: profile.linkedin },
    { icon: MessageCircle, label: "X / Twitter", value: "@perso_dev", href: profile.x },
    { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
    { icon: Phone, label: "Teléfono", value: profile.phone, href: `tel:${profile.phoneRaw}` },
  ];

  return (
    <Section
      id="contacto"
      eyebrow="Contacto"
      title="Redes Sociales & Contacto"
      description="Hablemos de producto, juegos, agricultura o IA. Respondo rápido."
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
            <span className="text-sm text-muted-foreground">{profile.location}</span>
          </div>
          <Button asChild variant="outline" className="w-full">
            <a
              href={`https://wa.me/${profile.phoneRaw.replace("+", "")}`}
              target="_blank"
              rel="noreferrer"
            >
              <MessageCircle className="size-4" /> Escríbeme por WhatsApp
            </a>
          </Button>
        </div>

        <form onSubmit={handleSubmit} className="surface-card space-y-4 p-6">
          <div className="space-y-2">
            <Label htmlFor="name">Nombre</Label>
            <Input
              id="name"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              placeholder="Tu nombre"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              required
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              placeholder="tu@email.com"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Mensaje</Label>
            <Textarea
              id="message"
              required
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder="Cuéntame en qué puedo ayudarte…"
            />
          </div>
          <Button type="submit" className="w-full">
            <Send className="size-4" /> Enviar mensaje
          </Button>
        </form>
      </div>
    </Section>
  );
}
