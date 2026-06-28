import luckyPhoto from "@/assets/Lucky Darmawan - KPKP.png";
import nurulPhoto from "@/assets/Nurul Mutmainnah - KPKP.jpeg";
import aldiPhoto from "@/assets/Muhammad Aldi Alfatih - KPKP.png";
import putriPhoto from "@/assets/Putri Nur Safna - RIRU.jpeg";
import ivanPhoto from "@/assets/Ivan Betrandi - KPKW.jpeg";

export type Member = {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo?: string;
  pptUrl?: string;
  pptTitle?: string;
  activities?: { title: string; desc: string }[];
  learningExperience?: string[];
  learningImpact?: string[];
  policyInsight?: { title: string; desc: string; suggestions?: string[] };
  kesanPesan?: string;
};

export const MEMBERS: Member[] = [
  {
    id: "anggota-1",
    name: "Lucky Darmawan",
    role: "Magang — KPKP",
    bio: "Fokus pada Koordinasi dan Pengembangan Komunikasi Publik di KPw BI Sulawesi Selatan.",
    pptTitle: "Laporan Magang — Lucky Darmawan",
    photo: luckyPhoto,
    learningExperience: [
      "Selama mengikuti program magang di Kelompok Perumusan Kebijakan Ekonomi Daerah, saya memperoleh pengalaman yang tidak hanya bersifat administratif, tetapi juga memahami proses perumusan kebijakan ekonomi daerah yang berbasis data dan analisis."
    ],
    learningImpact: [
      "Memiliki pemahaman yang lebih komprehensif mengenai peran Bank Indonesia di daerah.",
      "Meningkatkan kemampuan berpikir kritis dalam menganalisis isu ekonomi regional.",
      "Mampu menghubungkan teori ekonomi pembangunan yang dipelajari di bangku kuliah dengan praktik kebijakan di lapangan.",
      "Memperluas jejaring profesional dengan pegawai Bank Indonesia, pemerintah daerah, akademisi, dan instansi lainnya."
    ],
    activities: [
      { title: "Analisis Isu Ekonomi", desc: "Melakukan kajian kritis terhadap isu-isu ekonomi regional strategis untuk mendukung perumusan kebijakan daerah." },
      { title: "Dukungan Perumusan Kebijakan", desc: "Membantu proses perumusan kebijakan ekonomi daerah yang berbasis pengolahan data dan analisis makroekonomi." },
      { title: "Kajian Teori & Praktik Kebijakan", desc: "Menyusun telaah yang menghubungkan teori ekonomi pembangunan dengan praktik implementasi kebijakan di lapangan." },
      { title: "Administrasi & Koordinasi", desc: "Mendukung tugas-tugas administratif serta memfasilitasi koordinasi dengan pemda, akademisi, dan instansi terkait." }
    ]
  },
  {
    id: "anggota-2",
    name: "Nurul Mutmainnah",
    role: "Magang — KPKP",
    bio: "Mendukung kegiatan Koordinasi dan Pengembangan Kebijakan Wilayah.",
    pptTitle: "Laporan Magang — Nurul Mutmainnah",
    photo: nurulPhoto,
  },
  {
    id: "anggota-3",
    name: "Muhammad Aldi Alfatih",
    role: "Magang — KPKP",
    bio: "Fokus pada data analytics, riset makroekonomi, dan visualisasi data pada Kelompok Perumusan Kebijakan Provinsi (KPKP).",
    pptTitle: "Insight: Muhammad Aldi Alfatih",
    photo: aldiPhoto,
    activities: [
      { title: "Data Cleaning dengan Python", desc: "Membersihkan dan menyiapkan data agar lebih siap digunakan dalam proses analisis." },
      { title: "Dashboard Prognosa Anggaran", desc: "Membantu menyajikan informasi monitoring secara lebih terstruktur melalui visualisasi data Power BI." },
      { title: "Riset Makroekonomi Sulampua", desc: "Mendukung pemahaman awal terhadap kondisi ekonomi wilayah Sulawesi, Maluku, dan Papua." },
      { title: "TOR Komoditas Strategis", desc: "Menyusun kerangka acuan sebagai dasar awal penyusunan catatan kebijakan (policy note)." },
      { title: "Revamping Minisite BI Sulsel", desc: "Mengoptimalkan tampilan dan akses informasi internal melalui perbaikan antarmuka SharePoint." },
      { title: "Kolaborasi Ekonomi Regional", desc: "Berkolaborasi dengan tim internal dan stakeholder untuk mendukung inisiatif pengembangan ekonomi." }
    ],
    learningExperience: [
      "Memahami pentingnya data cleaning sebelum proses analisis dan visualisasi.",
      "Belajar menggunakan Python untuk membantu pengolahan data secara lebih rapi dan efisien.",
      "Memahami bagaimana dashboard Power BI dapat membantu menyajikan informasi secara lebih terstruktur.",
      "Mendapat pemahaman awal tentang analisis makroekonomi dan sektoral di wilayah Sulampua.",
      "Belajar bahwa TOR dan policy note membutuhkan kerangka berpikir yang sistematis, berbasis data, dan relevan dengan kebutuhan daerah.",
      "Memahami bagaimana platform internal seperti SharePoint dapat membantu efisiensi akses informasi."
    ],
    learningImpact: [
      "Menjadi lebih teliti dalam membaca, membersihkan, dan mengolah data.",
      "Lebih percaya diri menggunakan tools seperti Python, Power BI, dan SharePoint dalam konteks kerja profesional.",
      "Lebih memahami hubungan antara data, analisis, visualisasi, dan proses perumusan kebijakan.",
      "Lebih mampu mengubah data menjadi insight yang komunikatif.",
      "Lebih memahami budaya kerja profesional, kolaboratif, dan berbasis ketelitian di lingkungan bank sentral.",
      "Lebih sadar bahwa pekerjaan berbasis data bukan hanya soal angka, tetapi juga tentang bagaimana data dapat mendukung keputusan yang berdampak."
    ],
    policyInsight: {
      title: "Penguatan Perumusan Kebijakan Berbasis Data untuk Stabilitas Ekonomi Regional",
      desc: "Salah satu pembelajaran utama selama magang adalah memahami bagaimana data berperan penting dalam mendukung perumusan kebijakan. Di lingkungan KPw BI Sulawesi Selatan, proses ini dapat terlihat melalui pemantauan data ekonomi daerah, analisis makroekonomi dan sektoral, kajian komoditas strategis, serta penyusunan insight yang mendukung pengembangan ekonomi regional. Melalui pengalaman di unit KPKP, saya memahami bahwa kebijakan yang kuat membutuhkan data yang rapi, analisis yang relevan, dan penyajian informasi yang mudah dipahami.",
      suggestions: [
        "Mini onboarding untuk peserta magang terkait alur kerja unit KPKP.",
        "Dokumentasi singkat terkait tools yang sering digunakan.",
        "Sesi sharing antar peserta magang untuk saling bertukar insight dan pengalaman."
      ]
    }
  },
  {
    id: "anggota-4",
    name: "Putri Nur Safna",
    role: "Magang — RIRU",
    bio: "Mendukung program edukasi kebanksentralan dan komunikasi publik.",
    pptTitle: "Laporan Magang — Putri Nur Safna",
    photo: putriPhoto,
    learningExperience: [
      "Memahami peran strategis Bank Indonesia dalam mendorong investasi daerah dan pertumbuhan ekonomi regional, melalui program yang mendukung peningkatan kemampuan UMKM.",
      "Mengembangkan kemampuan analisis data ekonomi, investasi, serta potensi unggulan daerah sebagai dasar penyusunan keputusan daerah.",
      "Meningkatkan kompetensi dalam penyusunan Presentation Book Q2 menggunakan power point, administrasi, dan penyusunan dokumen arsip."
    ],
    learningImpact: [
      "Memperkuat kemampuan mengolah, memvalidasi, dan menyajikan data secara sistematis dan akurat.",
      "Memahami proses koordinasi lintas instansi seperti Bapanas, dan stakeholder lainnya dalam mendukung pengolaan data dan percepatan realisasi proyek investasi.",
      "Mengasah keterampilan komunikasi profesional, manajemen waktu, problem solving, serta kolaborasi dalam lingkungan kerja yang dinamis."
    ],
    activities: [
      { title: "Presentation Book Q2", desc: "Berkontribusi dalam penyusunan Presentation Book Q2 dan pengarsipan dokumen." },
      { title: "Rekapitulasi Data Pangan", desc: "Mengumpulkan dan merekap data harga serta ketersediaan pangan dari Bapanas dan instansi Ketahanan Pangan sebagai bahan analisis." },
      { title: "Pengolahan Data Inflasi", desc: "Membantu mengolah dan memvalidasi data pangan untuk mendukung penyusunan laporan inflasi dan asesmen ekonomi daerah, seperti mengambil data mentah dari website menggunakan teknik scrapping machine learning." },
      { title: "Bahan Presentasi Pangan", desc: "Menyusun bahan presentasi dan ringkasan informasi terkait perkembangan harga pangan strategis." },
      { title: "Notulensi & Dokumentasi", desc: "Membantu penyusunan notulen dan dokumentasi hasil rapat koordinasi dengan Bapanas, Ketahanan Pangan, dan TPID." },
      { title: "Laporan Komoditas", desc: "Mendukung penyusunan laporan berkala mengenai perkembangan komoditas pangan strategis." },
      { title: "Administrasi & Kearsipan", desc: "Mengarsipkan dokumen, data, dan surat menyurat divisi KPKP-RIRU." },
      { title: "Fasilitasi Rapat Koordinasi", desc: "Membantu menyiapkan bahan pendukung kegiatan koordinasi dan rapat bersama pemangku kepentingan." },
      { title: "Riset Ekonomi Daerah", desc: "Melakukan pencarian data dan referensi sebagai pendukung analisis kondisi pangan dan inflasi daerah." }
    ]
  },
  {
    id: "anggota-5",
    name: "Ivan Betrandi",
    role: "Magang — KPKW",
    bio: "Analisis ekonomi wilayah dan dukungan kebijakan kantor perwakilan.",
    pptTitle: "Laporan Magang — Ivan Betrandi",
    photo: ivanPhoto,
    kesanPesan: "Ini merupakan pengalaman magang dan kerja pertama saya di lingkungan korporat, yang memberikan kesan sangat positif. Kampanye Cinta, Bangga, dan Paham (CBP) Rupiah menjadi salah satu momen yang paling berkesan selama saya berada di BI.",
    learningExperience: [
      "Mengaplikasikan ilmu yang dipelajari selama perkuliahan, seperti web development dan web scraping, secara langsung di dunia kerja.",
      "Memperoleh pengetahuan baru mengenai teknologi dan sistem yang digunakan di KPw Bank Indonesia Sulawesi Selatan.",
      "Mendapatkan pengalaman praktis dan wawasan mendalam mengenai proses pengarsipan dokumen dan persiapan audit."
    ],
    learningImpact: [
      "Berhasil beradaptasi dan meningkatkan kemampuan problem solving setelah sempat merasa kesulitan memahami data, angka, dan istilah ekonomi yang belum familiar.",
      "Memperoleh wawasan baru yang komprehensif mengenai berbagai kebijakan Bank Indonesia di daerah."
    ],
    activities: [
      { title: "Pengembangan & Scraping Web", desc: "Memanfaatkan keahlian teknis perkuliahan untuk mendukung pengumpulan data dan pengembangan sistem informasi." },
      { title: "Pengarsipan & Persiapan Audit", desc: "Membantu proses manajemen dokumen, pengarsipan, serta penyiapan data untuk kebutuhan audit internal." },
      { title: "Kampanye CBP Rupiah", desc: "Turut serta mengobservasi dan mendukung pelaksanaan program edukasi Cinta, Bangga, dan Paham Rupiah." }
    ]
  },
];

export const COMBINED: Member = {
  id: "gabungan",
  name: "Presentasi Gabungan",
  role: "Tim Magang KPKP-KPKW-RIRU",
  bio: "Rangkuman gabungan seluruh kegiatan, capaian, dan refleksi tim magang Divisi KPKP-KPKW-RIRU selama periode magang di KPw BI Sulawesi Selatan.",
  pptTitle: "Laporan Magang — Gabungan Tim",
};

export const ALL_DECKS: Member[] = [...MEMBERS, COMBINED];

export const getMember = (id: string) => ALL_DECKS.find((m) => m.id === id);
