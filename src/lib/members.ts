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
        "Penyediaan template dashboard atau data summary agar proses analisis lebih konsisten.",
        "Mini onboarding untuk peserta magang terkait alur kerja unit KPKP.",
        "Dokumentasi singkat terkait tools yang sering digunakan, seperti Python, Power BI, dan SharePoint.",
        "Sesi sharing antar peserta magang untuk saling bertukar insight dan pengalaman.",
        "Standarisasi folder atau dokumentasi kerja agar peserta magang berikutnya lebih mudah memahami alur tugas."
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
  },
  {
    id: "anggota-5",
    name: "Ivan Betrandi",
    role: "Magang — KPKW",
    bio: "Analisis ekonomi wilayah dan dukungan kebijakan kantor perwakilan.",
    pptTitle: "Laporan Magang — Ivan Betrandi",
    photo: ivanPhoto,
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
