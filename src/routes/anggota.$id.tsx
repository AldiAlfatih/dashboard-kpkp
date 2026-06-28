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

        {/* Profile Header */}
        <section className="relative mt-8 overflow-hidden rounded-3xl bg-card shadow-soft ring-1 ring-border/50">
          <div className="grid md:grid-cols-[320px_1fr]">
            <div
              className="relative aspect-[4/5] overflow-hidden bg-muted md:aspect-auto md:h-full"
              style={{ backgroundImage: `url(${lontara})`, backgroundSize: "180px" }}
            >
              {member.photo ? (
                <img src={member.photo} alt={member.name} className="absolute inset-0 h-full w-full object-cover" />
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

            <div className="flex flex-col justify-center p-8 md:p-12">
              <p className="text-xs font-bold uppercase tracking-widest text-primary">{member.role}</p>
              <h1 className="mt-3 font-display text-4xl font-bold leading-tight text-foreground md:text-5xl">
                {member.name}
              </h1>
              <div className="my-6 h-px w-12 bg-accent" />
              <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                {member.bio}
              </p>
            </div>
          </div>
        </section>

        {/* Insight Viewer */}
        <section className="mt-16">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-primary">Kontribusi Tim</p>
              <h2 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">
                Insight & Pembelajaran
              </h2>
            </div>
          </div>

          {member.activities && member.activities.length > 0 ? (
            <div className="space-y-16">
              <div>
                <div className="mb-6 flex items-center gap-4">
                  <h3 className="font-display text-xl font-bold text-foreground">Aktivitas Utama</h3>
                  <div className="h-px flex-1 bg-border/80" />
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {member.activities.map((act, i) => (
                    <div key={i} className="rounded-2xl bg-card p-5 shadow-sm ring-1 ring-border/50 transition hover:-translate-y-1 hover:shadow-md">
                      <h4 className="font-display text-sm font-bold text-foreground">{act.title}</h4>
                      <p className="mt-2 text-xs text-muted-foreground">{act.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                {member.learningExperience && (
                  <div className="rounded-[2rem] bg-card p-8 shadow-soft">
                    <h3 className="font-display text-xl font-bold text-foreground mb-6">Learning Experience</h3>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      {member.learningExperience.map((exp, i) => (
                        <li key={i} className="flex gap-3"><span className="text-primary">✦</span> {exp}</li>
                      ))}
                    </ul>
                  </div>
                )}
                {member.learningImpact && (
                  <div className="rounded-[2rem] bg-primary p-8 text-primary-foreground shadow-soft">
                    <h3 className="font-display text-xl font-bold mb-6">Learning Impact</h3>
                    <ul className="space-y-3 text-sm text-primary-foreground/90">
                      {member.learningImpact.map((imp, i) => (
                        <li key={i} className="flex gap-3"><span className="text-accent">✦</span> {imp}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {member.policyInsight && (
                <div className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-12">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Insight Kebijakan</p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-foreground md:text-3xl">
                    {member.policyInsight.title}
                  </h3>
                  <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                    {member.policyInsight.desc}
                  </p>
                  {member.policyInsight.suggestions && (
                    <>
                      <div className="my-8 h-px w-full bg-border" />
                      <h4 className="font-display text-lg font-bold text-foreground">Saran Improvement</h4>
                      <div className="mt-4 grid gap-3 sm:grid-cols-2">
                        {member.policyInsight.suggestions.map((sug, i) => (
                          <div key={i} className="flex items-start gap-3 rounded-xl bg-muted/50 p-4 text-sm text-muted-foreground">
                            <span className="mt-0.5 text-primary">☑</span> {sug}
                          </div>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              )}
            </div>
          ) : (
            <div className="overflow-hidden rounded-2xl bg-card shadow-soft ring-1 ring-border/50">
              {embedUrl ? (
                <iframe
                  src={embedUrl}
                  title={`Insight ${member.name}`}
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
                    Insight belum tersedia
                  </p>
                  <p className="max-w-md text-sm text-primary-foreground/80">
                    Ringkasan kontribusi dan <i>learning experience</i> {member.name} akan ditampilkan di sini.
                  </p>
                </div>
              )}
            </div>
          )}

          <p className="mt-8 text-xs text-muted-foreground">
            Halaman ini memuat ringkasan pembelajaran individu yang menjadi bagian dari dokumen utama Learning Insight Kelompok.
          </p>
        </section>

        {/* Other members */}
        <section className="mt-24 border-t border-border/50 pt-16">
          <div className="mb-8 text-center">
            <h3 className="font-display text-2xl font-bold text-foreground">Jelajahi Anggota Lain</h3>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {MEMBERS.filter((m) => m.id !== member.id).map((m) => (
              <Link
                key={m.id}
                to="/anggota/$id"
                params={{ id: m.id }}
                className="group flex flex-col items-center gap-4 rounded-2xl p-4 transition duration-300 hover:bg-muted/50"
              >
                <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-transparent transition duration-300 group-hover:ring-accent">
                  {m.photo ? (
                    <img src={m.photo} alt={m.name} className="h-full w-full object-cover" />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-primary/10 text-lg font-bold text-primary">
                      {m.name.split(" ").map((p) => p[0]).join("").slice(0, 2)}
                    </div>
                  )}
                </div>
                <div className="text-center">
                  <p className="font-display text-sm font-bold text-foreground transition group-hover:text-primary">{m.name}</p>
                  <p className="mt-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">{m.role}</p>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <SiteFooter />
    </div>
  );
}
