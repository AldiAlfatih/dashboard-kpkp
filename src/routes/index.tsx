import { createFileRoute, Link } from "@tanstack/react-router";
import { MEMBERS, COMBINED } from "@/lib/members";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import heroBi from "@/assets/hero-bi.png";
import lontara from "@/assets/lontara-pattern.jpg";
import group1 from "@/assets/group-1.jpeg";
import group2 from "@/assets/group-2.jpeg";
import group3 from "@/assets/group-3.jpg";

const GROUP_PHOTOS = [
  { src: group1, caption: "Foto Bersama Seluruh Anggota Divisi KPKP" },
  { src: group2, caption: "Foto Gedung KPw Bank Indonesia Sulsel" },
  { src: group3, caption: "Foto Anak Magang KPKP-RIRU-KPKW TW 2 | 2026" },
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

      {/* Immersive Hero */}
      <section className="relative flex min-h-[85vh] items-center justify-center overflow-hidden bg-foreground">
        {/* Background Image with Deep Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src={heroBi}
            alt="Gedung Bank Indonesia"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-[#002B5C]/85" />
          
          {/* Subtle Pattern Overlay */}
          <div
            className="absolute inset-0 opacity-10 mix-blend-overlay"
            style={{ backgroundImage: `url(${lontara})`, backgroundSize: "320px" }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-center">
          <div className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white shadow-sm backdrop-blur-md">
            KPw BI Sulawesi Selatan
          </div>
          <h1 className="mt-8 font-display text-5xl font-bold leading-tight tracking-tight text-white md:text-7xl">
            Dokumentasi Magang
            <span className="mt-2 block text-accent">
              Divisi KPKP-KPKW-RIRU
            </span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 md:text-xl">
            Arsip resmi dan laporan presentasi peserta magang Kantor Perwakilan Bank Indonesia wilayah Sulawesi Selatan.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href="#anggota"
              className="inline-flex h-12 items-center rounded-md bg-accent px-8 text-sm font-bold text-accent-foreground shadow-soft transition hover:-translate-y-0.5 hover:bg-accent/90 hover:shadow-glow"
            >
              Lihat Anggota
            </a>
            <a
              href="#presentasi"
              className="inline-flex h-12 items-center rounded-md border border-white/30 bg-white/5 px-8 text-sm font-semibold text-white backdrop-blur-sm transition hover:-translate-y-0.5 hover:bg-white/15"
            >
              Presentasi Tim
            </a>
          </div>
        </div>
      </section>

      {/* Group photo gallery — Bento Style */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Galeri Tim</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
              Momen Bersama
            </h2>
          </div>
          <div className="grid gap-4 md:grid-cols-3 md:grid-rows-2">
            {GROUP_PHOTOS.map((g, i) => (
              <figure
                key={i}
                className={`group relative overflow-hidden rounded-2xl bg-muted shadow-soft ${
                  i === 0 ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"
                }`}
              >
                <div className="relative h-full w-full pt-[75%] md:pt-0">
                  <img
                    src={g.src}
                    alt={g.caption}
                    loading={i === 0 ? "eager" : "lazy"}
                    className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 transition duration-500 group-hover:opacity-100" />
                  <figcaption className="absolute bottom-0 left-0 p-6 text-sm font-medium text-white md:text-base">
                    {g.caption}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>


      {/* Members - Overlay Style */}
      <section id="anggota" className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-12 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Tim Magang</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            Divisi KPKP-KPKW-RIRU
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {MEMBERS.map((m) => (
            <Link
              key={m.id}
              to="/anggota/$id"
              params={{ id: m.id }}
              className="group relative flex aspect-[3/4] flex-col justify-end overflow-hidden rounded-2xl bg-muted shadow-soft transition duration-500 hover:-translate-y-2 hover:shadow-xl"
            >
              {m.photo ? (
                <img
                  src={m.photo}
                  alt={m.name}
                  className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-110"
                />
              ) : (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-primary/10"
                  style={{
                    backgroundImage: `url(${lontara})`,
                    backgroundSize: "180px",
                    backgroundBlendMode: "multiply"
                  }}
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground shadow-md">
                    {m.name.split(" ").map((p: string) => p[0]).join("").slice(0, 2)}
                  </div>
                </div>
              )}
              {/* Sleek Gradient Overlay */}
              <div className="relative z-10 bg-gradient-to-t from-[#002B5C] via-[#002B5C]/60 to-transparent p-5 pt-20 transition duration-300">
                <h3 className="font-display text-lg font-bold text-white leading-tight">{m.name}</h3>
                <p className="mt-1 text-[11px] font-semibold tracking-wider text-accent uppercase">{m.role}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* PPT showcase - Editorial layout */}
      <section id="presentasi" className="bg-primary/5 py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-16 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Presentasi</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
              Laporan & Materi
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
              Dokumen presentasi masing-masing anggota dan rangkuman gabungan tim. Tersedia dalam format penampil web dan unduhan langsung.
            </p>
          </div>

          {/* Featured: Combined PPT */}
          <Link
            to="/anggota/$id"
            params={{ id: COMBINED.id }}
            className="group mb-12 flex flex-col items-center gap-8 overflow-hidden rounded-[2rem] bg-card p-6 shadow-soft transition duration-500 hover:-translate-y-2 hover:shadow-xl md:flex-row md:p-10"
          >
            <div
              className="flex aspect-video w-full shrink-0 items-center justify-center rounded-2xl md:h-64 md:w-auto md:aspect-[4/3]"
              style={{
                backgroundImage: `linear-gradient(135deg, oklch(0.295 0.099 255.5 / 0.95), oklch(0.380 0.134 256.8 / 0.9)), url(${lontara})`,
                backgroundSize: "cover, 260px",
                backgroundBlendMode: "multiply, normal"
              }}
            >
              <div className="text-center text-white">
                <span className="inline-block rounded-full bg-white/20 px-5 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-sm">
                  Presentasi Utama
                </span>
              </div>
            </div>
            <div className="flex-1 py-4">
              <h3 className="font-display text-2xl font-bold text-foreground md:text-4xl">
                {COMBINED.pptTitle}
              </h3>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                {COMBINED.bio}
              </p>
              <div className="mt-8 flex items-center text-sm font-bold tracking-wider text-primary transition group-hover:text-accent">
                Buka Dokumen →
              </div>
            </div>
          </Link>

          {/* Individual Presentations - clean rows */}
          <div className="grid gap-4 md:grid-cols-2">
            {MEMBERS.map((m) => (
              <Link
                key={m.id}
                to="/anggota/$id"
                params={{ id: m.id }}
                className="group flex items-center gap-5 rounded-2xl bg-card p-4 shadow-sm ring-1 ring-border/50 transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                <div
                  className="flex h-16 w-20 shrink-0 items-center justify-center rounded-xl"
                  style={{
                    backgroundImage: `linear-gradient(135deg, oklch(0.380 0.134 256.8 / 0.92), oklch(0.295 0.099 255.5 / 0.85)), url(${lontara})`,
                    backgroundSize: "cover, 120px",
                    backgroundBlendMode: "multiply, normal"
                  }}
                >
                  <span className="text-white/80">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </span>
                </div>
                <div className="flex-1 overflow-hidden pr-2">
                  <h3 className="truncate font-display text-base font-bold text-foreground">
                    {m.pptTitle}
                  </h3>
                  <p className="mt-1 truncate text-xs font-medium text-muted-foreground uppercase tracking-widest">{m.name}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
