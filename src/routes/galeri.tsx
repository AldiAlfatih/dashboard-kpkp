import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { GALLERY_IMAGES } from "@/lib/gallery";

export const Route = createFileRoute("/galeri")({
  head: () => ({
    meta: [
      { title: "Galeri Foto — Dokumentasi Magang BI" },
    ],
  }),
  component: GaleriPage,
});

function GaleriPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h1 className="font-display text-4xl font-bold text-foreground">Galeri Dokumentasi</h1>
            <p className="mt-2 text-muted-foreground">Kumpulan momen kegiatan selama program magang di KPw BI Sulawesi Selatan.</p>
          </div>
          <Link to="/" className="inline-flex h-10 items-center justify-center rounded-full bg-primary/10 px-5 text-sm font-semibold text-primary transition hover:bg-primary hover:text-primary-foreground">
            ← Kembali ke Beranda
          </Link>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
          {GALLERY_IMAGES.map((img, i) => (
            <a
              key={i}
              href={`/dokumentasi/${img}`}
              target="_blank"
              rel="noreferrer"
              className="group overflow-hidden rounded-xl bg-muted shadow-sm ring-1 ring-border/50"
            >
              <img
                src={`/dokumentasi/${img}`}
                alt={`Dokumentasi ${i + 1}`}
                loading="lazy"
                className="aspect-square h-full w-full object-cover transition duration-500 group-hover:scale-110"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
