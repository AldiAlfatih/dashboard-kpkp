import { Link } from "@tanstack/react-router";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground font-display text-lg font-bold">
            BI
          </div>
          <div className="leading-tight">
            <p className="font-display text-base font-semibold text-foreground">
              Dokumentasi Magang
            </p>
            <p className="text-xs text-muted-foreground">
              KPw Bank Indonesia Sulawesi Selatan · KPKP-KPKW-RIRU
            </p>
          </div>
        </Link>
        <nav className="hidden gap-6 text-sm sm:flex">
          <Link to="/" className="text-foreground/80 transition hover:text-accent">
            Beranda
          </Link>
          <a href="#anggota" className="text-foreground/80 transition hover:text-accent">
            Anggota
          </a>
        </nav>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-border bg-primary/5">
      <div className="mx-auto max-w-6xl px-6 py-8 text-center text-xs text-muted-foreground">
        © {new Date().getFullYear()} Dokumentasi Magang · KPw Bank Indonesia Sulawesi Selatan
        <p className="mt-1 italic">Dipersembahkan dengan motif Lontara Sulawesi Selatan.</p>
      </div>
    </footer>
  );
}
