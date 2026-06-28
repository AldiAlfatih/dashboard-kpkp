import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { MEMBERS, getMember } from "@/lib/members";
import { SiteHeader, SiteFooter } from "@/components/SiteHeader";
import lontara from "@/assets/lontara-pattern.jpg";

export const Route = createFileRoute("/anggota/$id")({
  head: ({ params }) => {
    const m = getMember(params.id);
    const title = m ? `${m.name} — Dokumentasi Magang BI` : "Anggota tidak ditemukan";
    return {
      meta: [
        { title },
        { name: "description", content: m?.bio ?? "Detail anggota magang." },
        { property: "og:title", content: title },
        { property: "og:description", content: m?.bio ?? "" },
      ],
    };
  },
  loader: ({ params }) => {
    const member = getMember(params.id);
    if (!member) throw notFound();
    return { member };
  },
  notFoundComponent: () => (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="font-display text-3xl font-bold">Anggota tidak ditemukan</h1>
        <Link to="/" className="mt-4 inline-block text-accent underline">
          Kembali ke beranda
        </Link>
      </div>
    </div>
  ),
  component: MemberPage,
});

function MemberPage() {
  const { member } = Route.useLoaderData();
  const embedUrl = member.pptUrl
    ? `https://view.officeapps.live.com/op/embed.aspx?src=${encodeURIComponent(member.pptUrl)}`
    : null;

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <div className="mx-auto max-w-6xl px-6 py-10">
        <Link
          to="/"
          className="text-sm text-muted-foreground transition hover:text-accent"
        >
          ← Kembali ke daftar anggota
        </Link>

        {/* Profile */}
        <section className="mt-6 grid gap-8 md:grid-cols-[260px_1fr] md:items-center">
          <div
            className="relative mx-auto aspect-[3/4] w-full max-w-[260px] overflow-hidden rounded-xl border border-border bg-muted"
            style={{ backgroundImage: `url(${lontara})`, backgroundSize: "180px" }}
          >
            {member.photo ? (
              <img src={member.photo} alt={member.name} className="h-full w-full object-cover" />
            ) : (
              <div className="flex h-full w-full items-center justify-center">
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-3xl font-bold text-primary-foreground shadow-lg">
                  {member.name
                    .split(" ")
                    .map((p: string) => p[0])
                    .join("")
                    .slice(0, 2)}
                </div>
              </div>
            )}
          </div>

          <div>
            <p className="text-xs uppercase tracking-widest text-accent">{member.role}</p>
            <h1 className="mt-2 font-display text-4xl font-bold text-foreground">
              {member.name}
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">
              {member.bio}
            </p>
          </div>
        </section>

        {/* PPT viewer */}
        <section className="mt-12">
          <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
            <div>
              <p className="text-xs uppercase tracking-widest text-accent">Presentasi</p>
              <h2 className="mt-1 font-display text-2xl font-bold text-foreground">
                {member.pptTitle}
              </h2>
            </div>
            {member.pptUrl && (
              <a
                href={member.pptUrl}
                download
                className="inline-flex items-center rounded-md border border-border bg-card px-4 py-2 text-sm font-medium text-foreground transition hover:border-accent hover:text-accent"
              >
                ⬇ Unduh PPT
              </a>
            )}
          </div>

          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
            {embedUrl ? (
              <iframe
                src={embedUrl}
                title={member.pptTitle}
                className="aspect-video w-full"
                frameBorder={0}
                allowFullScreen
              />
            ) : (
              <div
                className="flex aspect-video flex-col items-center justify-center gap-3 p-8 text-center"
                style={{
                  backgroundImage: `linear-gradient(135deg, oklch(0.36 0.07 45 / 0.92), oklch(0.55 0.11 50 / 0.85)), url(${lontara})`,
                  backgroundSize: "cover, 240px",
                }}
              >
                <div className="rounded-full bg-primary-foreground/15 px-4 py-1 text-xs uppercase tracking-widest text-primary-foreground">
                  Pratinjau
                </div>
                <p className="font-display text-2xl font-semibold text-primary-foreground">
                  PPT belum diunggah
                </p>
                <p className="max-w-md text-sm text-primary-foreground/80">
                  Slide presentasi akan tampil di sini setelah berkas .pptx atau .pdf disematkan
                  pada data anggota.
                </p>
              </div>
            )}
          </div>

          <p className="mt-3 text-xs text-muted-foreground">
            Slide ditampilkan menggunakan Office Online Viewer. Tombol unduh tersedia di pojok
            kanan atas viewer.
          </p>
        </section>

        {/* Other members */}
        <section className="mt-16">
          <h3 className="font-display text-lg font-semibold text-foreground">Anggota lainnya</h3>
          <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4">
            {MEMBERS.filter((m) => m.id !== member.id).map((m) => (
              <Link
                key={m.id}
                to="/anggota/$id"
                params={{ id: m.id }}
                className="rounded-lg border border-border bg-card p-4 text-sm transition hover:border-accent hover:text-accent"
              >
                <p className="font-medium text-foreground">{m.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{m.role}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <SiteFooter />
    </div>
  );
}
