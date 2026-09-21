import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logoVibe from "@/assets/logo-vibe-treinador.png";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { href: "/#top", label: "Início" },
    { href: "/#sobre", label: "Sobre" },
    { href: "/#metodologia", label: "Metodologia" },
    { href: "/#servicos", label: "Serviços" },
    { href: "/#planos", label: "Planos" },
    { href: "/#resultados", label: "Resultados" },
    { href: "/regras", label: "Regras" },
    { href: "/#contato", label: "Contato" },
  ];

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/#top" className="flex items-center" onClick={() => setOpen(false)} aria-label="Victor Belichar - Treinador">
          <img src={logoVibe} alt="Victor Belichar Treinador" className="h-[30px] md:h-9 w-auto object-contain" />
        </a>
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-muted-foreground hover:text-foreground transition-colors">
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="/#contato"
          className="hidden md:inline-flex items-center bg-brand-red text-primary-foreground px-4 py-2 rounded-md text-sm font-semibold hover:opacity-90 transition shadow-red"
        >
          Quero treinar
        </a>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-md border border-border text-foreground hover:border-brand-red hover:text-brand-red transition"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-md transition-[max-height] duration-300 ${
          open ? "max-h-[80vh]" : "max-h-0"
        }`}
      >
        <nav className="px-6 py-6 flex flex-col gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="py-3 text-base font-medium text-muted-foreground hover:text-brand-red border-b border-border/50"
            >
              {l.label}
            </a>
          ))}
          <a
            href="/#contato"
            onClick={() => setOpen(false)}
            className="mt-5 inline-flex items-center justify-center bg-brand-red text-primary-foreground px-5 py-3 rounded-md text-sm font-bold tracking-wide shadow-red"
          >
            QUERO TREINAR
          </a>
        </nav>
      </div>
    </header>
  );
}
