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
      "Selama mengikuti program magang di Kelompok Perumusan Kebijakan Ekonomi Daerah, saya memperoleh pengalaman yang tidak hanya bersifat administratif, tetapi juga memahami proses perumusan kebijakan ekonomi daerah yang berbasis data dan analisis.",
      "Memahami proses penyusunan kajian ekonomi regional sebagai dasar pengambilan kebijakan Bank Indonesia.",
      "Mempelajari bagaimana data ekonomi dikumpulkan, divalidasi, dan dianalisis sebelum digunakan sebagai rekomendasi kebijakan.",
      "Mengikuti Focus Group Discussion (FGD), rapat koordinasi, serta diskusi dengan pemerintah daerah dan stakeholder terkait.",
      "Mengembangkan kemampuan analisis data, komunikasi profesional, dan kerja tim."
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
    name: "Nurul Mutmainna",
    role: "Magang — KPKP",
    bio: "Mendukung kegiatan Koordinasi dan Pengembangan Kebijakan Wilayah.",
    pptTitle: "Laporan Magang — Nurul Mutmainna",
    photo: nurulPhoto,
    learningExperience: [
      "Mendapatkan pengalaman berharga sebagai pengalaman pertama terjun dan merasakan langsung dunia kerja profesional.",
      "Mempelajari proses penyusunan kebijakan, termasuk penyusunan Terms of Reference (ToR) penelitian mengenai komoditas kakao.",
      "Meningkatkan kemampuan riset data melalui eksplorasi berbagai sumber informasi dan website baru seperti PIHPS.",
      "Mempelajari sistem pengarsipan dokumen menggunakan portal internal Bank Indonesia (BIRMS).",
      "Meningkatkan keterampilan editing dan visualisasi data dalam pembuatan bahan presentasi dan grafik."
    ],
    learningImpact: [
      "Membentuk analytical mindset dengan lebih memahami bagaimana proses penyusunan kebijakan di Bank Indonesia dilakukan.",
      "Melatih manajemen waktu, ketelitian, serta kecepatan bekerja dalam menyelesaikan tugas-tugas profesional.",
      "Menumbuhkan semangat belajar dan rasa percaya diri yang tinggi dalam menghadapi tantangan baru di dunia kerja."
    ],
    activities: [
      { title: "Penyusunan ToR Kebijakan", desc: "Membantu penyusunan Terms of Reference (ToR) penelitian mengenai komoditas kakao di Sulampua." },
      { title: "Eksplorasi Sumber Data", desc: "Mencari berbagai data di berbagai website yang sebelumnya belum pernah dieksplor (Contoh: PIHPS)." },
      { title: "Partisipasi Event KPKP", desc: "Berkesempatan mengikuti High Level Meeting Tim Pengendalian Inflasi Daerah (HLM TPID), FGD, dll." },
      { title: "Pengarsipan (BIRMS)", desc: "Melakukan arsip dokumen menggunakan portal internal Bank Indonesia yakni BIRMS." },
      { title: "Pembuatan Materi & Editing", desc: "Membantu membuat bahan presentasi, grafik, sekaligus menambah informasi dari bahan materi." }
    ]
  },
  {
    id: "anggota-3",
    name: "Muhammad Aldi Alfatih",
    role: "Magang — KPKP",
    bio: "Fokus pada data analytics, riset makroekonomi, dan visualisasi data pada Kelompok Perumusan Kebijakan Provinsi (KPKP).",
    pptTitle: "Insight: Muhammad Aldi Alfatih",
    photo: aldiPhoto,
    activities: [
      { title: "Data Cleaning (Python)", desc: "Mengolah dan cleaning data menggunakan Python." },
      { title: "Dashboard Power BI", desc: "Membuat dashboard Power BI untuk mendukung monitoring informasi secara lebih terstruktur." },
      { title: "Penyusunan TOR", desc: "Membantu menyusun TOR komoditas strategis melalui pencarian data dan referensi pendukung sebagai dasar awal policy note." },
      { title: "Optimasi SharePoint", desc: "Mengoptimalkan Minisite BI Sulsel berbasis SharePoint." },
      { title: "Pengarsipan", desc: "Memahami terkait alur dan proses pengarsipan." }
    ],
    learningExperience: [
      "Mengolah dan cleaning data menggunakan Python.",
      "Membuat dashboard Power BI untuk mendukung monitoring informasi secara lebih terstruktur.",
      "Membantu menyusun TOR komoditas strategis melalui pencarian data dan referensi pendukung sebagai dasar awal policy note.",
      "Mengoptimalkan Minisite BI Sulsel berbasis SharePoint.",
      "Memahami terkait alur dan proses pengarsipan."
    ],
    learningImpact: [
      "Lebih Teliti Mengolah Data: pengalaman data cleaning menggunakan Python membuat saya lebih teliti dalam membaca, membersihkan, dan menyiapkan data sebelum dianalisis.",
      "Mampu Menyajikan Data Lebih Informatif: Melalui dashboard Power BI, saya belajar mengubah data menjadi visualisasi yang lebih terstruktur, mudah dipahami, dan komunikatif.",
      "Lebih Adaptif dengan Tools Profesional: Pengalaman menggunakan Python, Power BI, dan SharePoint meningkatkan kepercayaan diri saya dalam memanfaatkan tools digital di lingkungan kerja profesional.",
      "Memahami Analisis Ekonomi Regional: Riset makroekonomi dan sektoral wilayah Sulampua membuat saya lebih memahami bagaimana data digunakan untuk membaca kondisi ekonomi daerah.",
      "Memahami Dasar Penyusunan Policy Note: Penyusunan TOR komoditas strategis memberi saya pemahaman bahwa kebijakan membutuhkan dasar kajian, data, dan kerangka berpikir yang sistematis.",
      "Memahami pentingnya komunikasi dan koordinasi kerja: Melalui proses kerja di KPKP, saya belajar bahwa analisis ekonomi daerah tidak hanya membutuhkan data, tetapi juga komunikasi, koordinasi, dan ketelitian."
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
      "Berkontribusi dalam penyusunan Presentation Book Q2 dan pengarsipan dokumen.",
      "Mengumpulkan dan merekap data harga serta ketersediaan pangan dari Bapanas dan instansi Ketahanan Pangan sebagai bahan analisis.",
      "Membantu mengolah dan memvalidasi data pangan untuk mendukung penyusunan laporan inflasi dan asesmen ekonomi daerah, seperti mengambil data mentah dari website menggunakan teknik scrapping machine learning.",
      "Menyusun bahan presentasi dan ringkasan informasi terkait perkembangan harga pangan strategis.",
      "Membantu penyusunan notulen dan dokumentasi hasil rapat koordinasi dengan Bapanas, Ketahanan Pangan, dan TPID.",
      "Mendukung penyusunan laporan berkala mengenai perkembangan komoditas pangan strategis.",
      "Mengarsipkan dokumen, data, dan surat menyurat divisi KPKP-RIRU.",
      "Membantu menyiapkan bahan pendukung kegiatan koordinasi dan rapat bersama pemangku kepentingan.",
      "Melakukan pencarian data dan referensi sebagai pendukung analisis kondisi pangan dan inflasi daerah."
    ],
    learningImpact: [
      "Menjadi jauh lebih memahami peran strategis Bank Indonesia dalam mendorong investasi daerah dan pertumbuhan ekonomi regional, melalui program yang mendukung peningkatan kemampuan UMKM.",
      "Mengembangkan kemampuan analisis data ekonomi, investasi, serta potensi unggulan daerah sebagai dasar penyusunan keputusan daerah.",
      "Meningkatkan kompetensi dalam penyusunan Presentation Book Q2 menggunakan power point, administrasi, dan penyusunan dokumen arsip.",
      "Memperkuat kemampuan saya dalam mengolah, memvalidasi, dan menyajikan data secara sistematis dan akurat.",
      "Memahami proses koordinasi lintas instansi seperti bapanas, dan stakeholder lainnya dalam mendukung pengolaan data dan percepatan realisasi proyek investasi.",
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
    learningExperience: [
      "Merupakan magang pertama dan merasakan bekerja di lingkungan korporat",
      "Semua ilmu yang dipelajari selama perkuliahan seperti web development dan scraping web dipakai selama magang",
      "Memperoleh pengetahuan baru mengenai teknologi yang digunakan di KPw Bank Indonesia Sulawesi Selatan",
      "Mendapatkan pengalaman baru dalam proses pengarsipan dokumen dan persiapan audit"
    ],
    learningImpact: [
      "Sempat merasa kesulitan karena harus memahami data, angka, dan istilah yang belum familiar",
      "Lingkungan kerja di Bank Indonesia memberikan kesan yang sangat positif",
      "Kampanye Cinta, Bangga, dan Paham (CBP) Rupiah menjadi salah satu hal yang berkesan selama magang",
      "Memperoleh wawasan baru mengenai beberapa kebijakan Bank Indonesia"
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
