import { Link } from "@tanstack/react-router";
import biLogo from "@/assets/BI_Logo.png";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <img src={biLogo} alt="Logo Bank Indonesia" className="h-10 w-auto object-contain" />
          <div className="hidden h-6 w-px bg-border sm:block" />
          <p className="hidden font-display text-base font-semibold text-foreground sm:block">
            Internship Triwulan 2 - 2026
          </p>
        </Link>
        <nav className="hidden gap-6 text-sm sm:flex">
          <Link to="/" className="text-foreground/80 transition hover:text-accent">
            Beranda
          </Link>
          <a href="/#anggota" className="text-foreground/80 transition hover:text-accent">
            Anggota
          </a>
          <Link to="/galeri" className="text-foreground/80 transition hover:text-accent">
            Galeri
          </Link>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-primary/5">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Dokumentasi Magang · KPw Bank Indonesia Sulawesi Selatan
        <p className="mt-1 italic">@Anak Magang KPKP-KPKW-RIRU TW2 - 2026</p>
      </div>
    </footer>
  );
}
