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
            className="absolute inset-0 opacity-[0.03] mix-blend-overlay"
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

      {/* Tentang Magang & Fokus Utama */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Tentang Program</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
            Magang di KPw BI Sulawesi Selatan
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground">
            Program magang ini dilaksanakan di Kantor Perwakilan Bank Indonesia Provinsi Sulawesi Selatan, dengan penempatan pada <strong>Kelompok Perumusan Kebijakan Provinsi (KPKP)</strong>. Fokus utama kegiatan mencakup <em>data analytics</em>, <em>data cleaning</em> menggunakan Python, pengembangan <em>dashboard</em> Power BI, serta riset data makroekonomi untuk mendukung perumusan kebijakan.
          </p>
          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-semibold text-primary">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            06 April – 30 Juni 2026 (Triwulan II)
          </div>
        </div>
        
        {/* Aktivitas & Output Utama */}
        <div className="mx-auto mt-16 grid max-w-6xl gap-6 px-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { title: "Pengolahan & Analisis Data", desc: "Membersihkan dan menstrukturkan data mentah untuk mendukung analisis kebijakan yang presisi." },
            { title: "Pengembangan Dashboard", desc: "Merancang visualisasi data interaktif untuk mempermudah pemantauan indikator kinerja dan anggaran." },
            { title: "Riset Ekonomi Regional", desc: "Menganalisis dinamika makroekonomi wilayah untuk mendukung perumusan rekomendasi kebijakan." },
            { title: "Edukasi & Komunikasi", desc: "Mendukung pelaksanaan edukasi kebanksentralan serta mengoptimalkan strategi komunikasi publik." }
          ].map((item, i) => (
            <div key={i} className="rounded-2xl bg-card p-6 shadow-sm ring-1 ring-border/50 transition duration-300 hover:-translate-y-1 hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <span className="font-display font-bold">{i + 1}</span>
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Learning Experience & Impact */}
      <section className="bg-primary/5 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[2rem] bg-card p-8 shadow-soft md:p-10">
              <h3 className="font-display text-2xl font-bold text-foreground">Learning Experience</h3>
              <ul className="mt-6 space-y-4 text-sm text-muted-foreground md:text-base">
                <li className="flex gap-3"><span className="text-primary">✦</span> Terlibat langsung dalam alur kerja profesional di institusi bank sentral.</li>
                <li className="flex gap-3"><span className="text-primary">✦</span> Memahami pentingnya data yang terstruktur dalam perumusan kebijakan daerah.</li>
                <li className="flex gap-3"><span className="text-primary">✦</span> Belajar menyajikan hasil analisis kompleks ke dalam bentuk komunikasi publik yang ringkas.</li>
                <li className="flex gap-3"><span className="text-primary">✦</span> Mengembangkan kemampuan koordinasi dan kolaborasi lintas fungsi (KPKP, KPKW, RIRU).</li>
              </ul>
            </div>
            <div className="rounded-[2rem] bg-primary p-8 text-primary-foreground shadow-soft md:p-10">
              <h3 className="font-display text-2xl font-bold">Learning Impact</h3>
              <ul className="mt-6 space-y-4 text-sm text-primary-foreground/90 md:text-base">
                <li className="flex gap-3"><span className="text-accent">✦</span> Peningkatan ketelitian, <i>analytical thinking</i>, dan <i>problem solving</i>.</li>
                <li className="flex gap-3"><span className="text-accent">✦</span> Lebih adaptif dalam menggunakan berbagai perangkat analisis dan instrumen riset.</li>
                <li className="flex gap-3"><span className="text-accent">✦</span> Kesadaran tinggi akan pentingnya integritas, kedisiplinan, dan profesionalisme kerja.</li>
                <li className="flex gap-3"><span className="text-accent">✦</span> Memperluas pemahaman makroekonomi regional yang berdampak pada masyarakat luas.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BI Policy Insight & Suggestion */}
      <section className="bg-background py-24">
        <div className="mx-auto max-w-5xl px-6">
          <div className="mb-12 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Insight Kebijakan</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
              Dukungan Analisis untuk Pertumbuhan Regional
            </h2>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-soft md:p-12">
            <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
              Selama program magang ini, tim berkesempatan memahami langsung operasional berbagai kebijakan Bank Indonesia, mulai dari pengendalian inflasi daerah, riset ekonomi makro sektoral, hingga komunikasi dan edukasi kebanksentralan. Proses kolaborasi lintas kelompok ini menyadarkan kami bahwa setiap kebijakan publik harus didukung oleh pengolahan data yang kuat, komunikasi yang efektif, dan kolaborasi sinergis antar pemangku kepentingan untuk mencapai stabilitas ekonomi regional yang berkelanjutan.
            </p>
            <div className="my-8 h-px w-full bg-border" />
            <h3 className="font-display text-xl font-bold text-foreground">Saran Improvement</h3>
            <p className="mt-2 text-sm text-muted-foreground">Sebagai masukan konstruktif untuk memfasilitasi program magang yang lebih optimal di masa mendatang:</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-xl bg-muted/50 p-4 text-sm">
                <span className="mt-0.5 text-primary">☑</span> Modul <i>onboarding</i> terpusat untuk memperkenalkan struktur dan alur kerja masing-masing kelompok secara ringkas.
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-muted/50 p-4 text-sm">
                <span className="mt-0.5 text-primary">☑</span> Sesi <i>knowledge sharing</i> berkala antar anak magang lintas fungsi/kelompok.
              </div>
              <div className="flex items-start gap-3 rounded-xl bg-muted/50 p-4 text-sm">
                <span className="mt-0.5 text-primary">☑</span> Penyediaan bank data atau <i>knowledge base</i> ringan berisi panduan standar <i>tools</i> esensial bagi unit operasional teknis.
              </div>
            </div>
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
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary">Output Magang</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-foreground md:text-4xl">
              Learning Insight & Laporan
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground">
              Dokumentasi akhir pembelajaran tim berupa analisis kebijakan, saran improvement, dan evaluasi pengalaman selama di KPw BI Sulawesi Selatan.
            </p>
          </div>

          {/* Learning Insight Tim */}
          <Link
            to="/anggota/$id"
            params={{ id: COMBINED.id }}
            className="group mb-6 flex flex-col items-center gap-8 overflow-hidden rounded-[2rem] bg-card p-6 shadow-soft transition duration-500 hover:-translate-y-2 hover:shadow-xl md:flex-row md:p-10"
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
                  Dokumen Utama
                </span>
              </div>
            </div>
            <div className="flex-1 py-4">
              <h3 className="font-display text-2xl font-bold text-foreground md:text-4xl">
                Learning Insight Tim
              </h3>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                Tayangan kelompok berisi Learning Experience, Learning Impact, saran improvement, serta insight kebijakan Bank Indonesia yang relevan dengan unit kerja Divisi KPKP-KPKW-RIRU.
              </p>
              <div className="mt-8 flex items-center text-sm font-bold tracking-wider text-primary transition group-hover:text-accent">
                Buka Dokumen →
              </div>
            </div>
          </Link>

          {/* Laporan Dokumentasi Magang */}
          <div className="group mb-16 flex flex-col items-center gap-8 overflow-hidden rounded-[2rem] bg-card p-6 shadow-soft transition duration-500 hover:-translate-y-2 hover:shadow-xl md:flex-row md:p-10">
            <div
              className="flex aspect-video w-full shrink-0 items-center justify-center rounded-2xl md:h-64 md:w-auto md:aspect-[4/3]"
              style={{
                backgroundImage: `linear-gradient(135deg, oklch(0.380 0.134 256.8 / 0.92), oklch(0.295 0.099 255.5 / 0.85)), url(${lontara})`,
                backgroundSize: "cover, 260px",
                backgroundBlendMode: "multiply, normal"
              }}
            >
              <div className="text-center text-white">
                <span className="inline-block rounded-full bg-white/20 px-5 py-1.5 text-[10px] font-bold uppercase tracking-[0.3em] backdrop-blur-sm">
                  Laporan
                </span>
              </div>
            </div>
            <div className="flex-1 py-4">
              <h3 className="font-display text-2xl font-bold text-foreground md:text-4xl">
                Dokumentasi Magang
              </h3>
              <p className="mt-6 text-sm leading-relaxed text-muted-foreground md:text-base">
                Dokumentasi ringkas kegiatan, pembelajaran, dan output selama program magang di KPw BI Sulawesi Selatan.
              </p>
              <div className="mt-8 flex items-center text-sm font-bold tracking-wider text-muted-foreground">
                (Akan ditambahkan)
              </div>
            </div>
          </div>

          <div className="mb-6 flex items-center gap-4">
            <h3 className="font-display text-xl font-bold text-foreground">Insight Anggota Tim</h3>
            <div className="h-px flex-1 bg-border/80" />
          </div>
          <p className="mb-8 text-sm text-muted-foreground">
            Ringkasan kontribusi dan pembelajaran masing-masing anggota yang menjadi bagian dari Learning Insight kelompok.
          </p>

          {/* Individual Insights - clean rows */}
          <div className="mb-16 grid gap-4 md:grid-cols-2">
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
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </span>
                </div>
                <div className="flex-1 overflow-hidden pr-2">
                  <h3 className="truncate font-display text-base font-bold text-foreground">
                    Insight: {m.name}
                  </h3>
                  <p className="mt-1 truncate text-xs font-medium text-muted-foreground uppercase tracking-widest">{m.role}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="mb-6 flex items-center gap-4">
            <h3 className="font-display text-xl font-bold text-foreground">Video Testimoni</h3>
            <div className="h-px flex-1 bg-border/80" />
          </div>
          <p className="mb-8 text-sm text-muted-foreground">
            Tautan menuju video testimoni masing-masing peserta magang jika sudah tersedia.
          </p>

          {/* Video Testimonials */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {MEMBERS.map((m) => (
              <div
                key={`vid-${m.id}`}
                className="group flex flex-col overflow-hidden rounded-2xl bg-card shadow-sm ring-1 ring-border/50 transition hover:shadow-md"
              >
                <div className="flex aspect-video items-center justify-center bg-muted">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-background shadow-sm">
                    <svg className="h-5 w-5 text-muted-foreground/60 ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                </div>
                <div className="p-4">
                  <h4 className="font-display text-sm font-bold text-foreground">Testimoni {m.name}</h4>
                  <p className="mt-1 text-xs text-muted-foreground">(Akan ditambahkan setelah finalisasi)</p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    <span className="rounded-md bg-accent/10 px-2 py-1 text-[10px] font-bold text-accent">#DiSetiapMaknaIndonesia</span>
                    <span className="rounded-md bg-accent/10 px-2 py-1 text-[10px] font-bold text-accent">#DedikasiUntukNegeri</span>
                    <span className="rounded-md bg-accent/10 px-2 py-1 text-[10px] font-bold text-accent">#MagangdiBISulsel</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Closing */}
      <section className="bg-primary py-24 text-center text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6">
          <h2 className="font-display text-3xl font-bold md:text-4xl">Terima Kasih</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/90 md:text-xl">
            Terima kasih kepada <strong>Kantor Perwakilan Bank Indonesia Provinsi Sulawesi Selatan</strong>, khususnya unit <strong>KPKP</strong>, atas kesempatan, bimbingan, dan pengalaman berharga selama program magang. Pengalaman ini menjadi ruang belajar penting untuk memahami bagaimana data, analisis, dan kebijakan saling terhubung dalam mendukung perekonomian daerah.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
