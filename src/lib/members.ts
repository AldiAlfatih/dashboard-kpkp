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
  photo?: string; // URL or imported asset
  pptUrl?: string; // Public URL to .pptx/.pdf for embedding
  pptTitle?: string;
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
    bio: "Riset, Implementasi, dan Pengembangan Unit pada Divisi RIRU.",
    pptTitle: "Laporan Magang — Muhammad Aldi Alfatih",
    photo: aldiPhoto,
  },
  {
    id: "anggota-4",
    name: "Putri Nur Safna",
    role: "Magang — KPKP",
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
