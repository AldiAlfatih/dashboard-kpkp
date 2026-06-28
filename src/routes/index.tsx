import { createFileRoute, Link } from "@tanstack/react-router";
import { MEMBERS, COMBINED } from "@/lib/members";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import heroBi from "@/assets/hero-bi.jpg";
import lontara from "@/assets/lontara-pattern.jpg";
import group1 from "@/assets/group-1.jpg";
import group2 from "@/assets/group-2.jpg";
import group3 from "@/assets/group-3.jpg";

const GROUP_PHOTOS = [
  { src: group1, caption: "Tim magang di depan Kantor Bank Indonesia" },
  { src: group2, caption: "Diskusi internal divisi KPKP-KPKW-RIRU" },
  { src: group3, caption: "Sesi penutupan bersama mentor BI" },
];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dokumentasi Magang — KPw BI Sulawesi Selatan (KPKP-KPKW-RIRU)" },
      {
        name: "description",
        content:
          "Arsip dokumentasi dan presentasi peserta magang Divisi KPKP-KPKW-RIRU, Kantor Perwakilan Bank Indonesia Sulawesi Selatan.",
      },
      { property: "og:title", content: "Dokumentasi Magang — KPw BI Sulawesi Selatan" },
      {
        property: "og:description",
        content: "Foto anggota & presentasi tim magang Divisi KPKP-KPKW-RIRU.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Group photo gallery — di awal tampilan */}
      <section className="border-b border-border bg-primary/5">
        <div className="mx-auto max-w-6xl px-6 py-10">
          <div className="mb-6 text-center">
            <p className="text-xs uppercase tracking-widest text-accent">Galeri Tim</p>
            <h2 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">
              Momen Bersama Tim Magang
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3">
            {GROUP_PHOTOS.map((g, i) => (
              <figure
                key={i}
                className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={g.src}
                    alt={g.caption}
                    width={1200}
                    height={900}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
                </div>
                <figcaption className="px-4 py-3 text-center text-xs text-muted-foreground">
                  {g.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>


      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-[0.08]"
          style={{ backgroundImage: `url(${lontara})`, backgroundSize: "280px" }}
          aria-hidden
        />
        <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs uppercase tracking-widest text-accent">
              Kpw BI Sulawesi Selatan
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
              Dokumentasi Magang
              <span className="block text-accent">Divisi KPKP-KPKW-RIRU</span>
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground">
              Arsip resmi foto anggota dan presentasi laporan magang. Dibalut motif
              <span className="italic"> batik Lontara </span> khas Sulawesi Selatan dalam nuansa
              coklat yang hangat dan elegan.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#anggota"
                className="inline-flex items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
              >
                Lihat Anggota
              </a>
              <a
                href="#presentasi"
                className="inline-flex items-center rounded-md border border-border bg-card px-5 py-2.5 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent"
              >
                Presentasi Tim
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-3 rounded-2xl bg-accent/20 blur-2xl" aria-hidden />
            <div className="relative overflow-hidden rounded-2xl border border-border shadow-xl">
              <img
                src={heroBi}
                alt="Gedung Bank Indonesia"
                width={1600}
                height={900}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Members */}
      <section id="anggota" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-widest text-accent">Tim Magang</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground">
              Anggota Divisi KPKP-KPKW-RIRU
            </h2>
          </div>
          <div className="hidden h-px flex-1 bg-gradient-to-r from-transparent via-border to-transparent sm:block" />
        </div>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-5">
          {MEMBERS.map((m) => (
            <Link
              key={m.id}
              to="/anggota/$id"
              params={{ id: m.id }}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition hover:-translate-y-1 hover:border-accent hover:shadow-lg"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-muted">
                {m.photo ? (
                  <img
                    src={m.photo}
                    alt={m.name}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div
                    className="flex h-full w-full items-center justify-center"
                    style={{
                      backgroundImage: `url(${lontara})`,
                      backgroundSize: "180px",
                    }}
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground shadow-md">
                      {m.name
                        .split(" ")
                        .map((p: string) => p[0])
                        .join("")
                        .slice(0, 2)}
                    </div>
                  </div>
                )}
                <div className="absolute inset-x-0 bottom-0 h-1 bg-accent opacity-0 transition group-hover:opacity-100" />
              </div>
              <div className="p-4">
                <h3 className="font-display text-base font-semibold text-foreground">{m.name}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{m.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PPT showcase */}
      <section id="presentasi" className="border-t border-border bg-primary/5">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <div className="mb-10">
            <p className="text-xs uppercase tracking-widest text-accent">Presentasi</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground">
              Laporan & Materi PPT
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              Lima presentasi individu setiap anggota dan satu presentasi gabungan tim. Klik untuk
              menonton slide langsung di layar atau mengunduh berkasnya.
            </p>
          </div>

          {/* Featured: Combined PPT */}
          <article className="mb-8 overflow-hidden rounded-2xl border-2 border-accent/40 bg-card shadow-md">
            <div className="grid md:grid-cols-[1.2fr_1fr]">
              <div
                className="flex aspect-video items-center justify-center md:aspect-auto"
                style={{
                  backgroundImage: `linear-gradient(135deg, oklch(0.30 0.06 45 / 0.95), oklch(0.55 0.11 50 / 0.9)), url(${lontara})`,
                  backgroundSize: "cover, 260px",
                }}
              >
                <div className="px-6 py-10 text-center text-primary-foreground">
                  <span className="inline-flex items-center rounded-full bg-primary-foreground/15 px-3 py-1 text-[10px] uppercase tracking-[0.3em]">
                    Unggulan
                  </span>
                  <p className="mt-4 font-display text-2xl font-semibold md:text-3xl">
                    {COMBINED.pptTitle}
                  </p>
                  <p className="mt-2 text-sm opacity-80">{COMBINED.role}</p>
                </div>
              </div>
              <div className="flex flex-col justify-between gap-4 p-6">
                <div>
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    Presentasi Gabungan Tim
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{COMBINED.bio}</p>
                </div>
                <Link
                  to="/anggota/$id"
                  params={{ id: COMBINED.id }}
                  className="inline-flex w-fit items-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                >
                  Buka Presentasi Gabungan →
                </Link>
              </div>
            </div>
          </article>

          <div className="mb-4 flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-muted-foreground">
              Presentasi Individu
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>


          <div className="grid gap-6 md:grid-cols-2">
            {MEMBERS.map((m) => (
              <article
                key={m.id}
                className="overflow-hidden rounded-xl border border-border bg-card shadow-sm"
              >
                <div
                  className="flex aspect-video items-center justify-center border-b border-border"
                  style={{
                    backgroundImage: `linear-gradient(135deg, oklch(0.36 0.07 45 / 0.92), oklch(0.55 0.11 50 / 0.85)), url(${lontara})`,
                    backgroundSize: "cover, 220px",
                  }}
                >
                  <div className="text-center text-primary-foreground">
                    <p className="text-xs uppercase tracking-[0.25em] opacity-80">Slide Deck</p>
                    <p className="mt-2 font-display text-xl font-semibold">{m.pptTitle}</p>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 p-4">
                  <div>
                    <h3 className="font-display text-base font-semibold text-foreground">
                      {m.name}
                    </h3>
                    <p className="text-xs text-muted-foreground">{m.role}</p>
                  </div>
                  <Link
                    to="/anggota/$id"
                    params={{ id: m.id }}
                    className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition hover:bg-primary/90"
                  >
                    Buka
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
