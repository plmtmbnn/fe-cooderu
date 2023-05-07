import bootcamp from "../public/assets/laptop-blue.svg";
import mentor from "../public/assets/key-red.svg";
import method from "../public/assets/bank-purple.svg";
import career from "../public/assets/board-green.svg";
import project from "../public/assets/code-yellow.svg";
import community from "../public/assets/people-orange.svg";

// icons payment methods
import gradCap from "../public/graduation-cap.svg";
import moneyBox from "../public/money-box.svg";
import transaction from "../public/transaction.svg";
import handCash from "../public/cash-in-hand.svg";

// img team
import pakHerman from "../public/HermanHandoko.png";
import pakIchwan from "../public/IchwanPeryana.png";
import pakAditya from "../public/AdityaSiregar.png";
import pakAdrian from "../public/AdrianBenhard.png";
import pakPolma from "../public/PolmaTambunan.png";

// img team
import logo1 from "../public/assets/image1.png";
import logo2 from "../public/assets/image2.png";
import logo3 from "../public/assets/image3.png";
import logo4 from "../public/assets/image4.png";
import logo5 from "../public/assets/image5.png";

export const _headerCard = [
  {
    title: "Kurikulum Terbaru",
    desc:
      "Anda akan belajar bersama instruktur yang berpengalaman sehingga memudahkan Anda untuk memahami dengan cepat.",
    color: "#1F4FFD"
  },
  {
    title: "Latihan & Portofolio",
    desc:
      "Anda akan belajar langsung melalui berbagai latihan, studi kasus & proyek nyata yang telah disediakan oleh mitra pilihan kami.",
    color: "#B9EA1B"
  },
  {
    title: "Career Coaching",
    desc:
      "Kami membantu meningkatkan kepercayaan diri Anda dengan membuat resume yang menarik, memberikan tips & trik untuk wawancara.",
    color: "#F37B0C"
  },
  {
    title: "Hiring Partner",
    desc:
      "Kami membantu Anda mendapatkan peran yang Anda sukai dari magang hingga pekerjaan penuh waktu.",
    color: "#EF1EDA"
  }
];

export const _silabusFE = [
  "Introduction HTML",
  "Introduction CSS",
  "Introduction CSS - Layouting",
  "Introduction - Grid & Flex",
  "Introduction JavaScript",
  "Introduction JQuery",
  "Introduction Bootstrap",
  "Introduction React JS",
  "Advanced React JS",
  "React Hook",
  "React UI Framework",
  "Introduction Rest API & Integration",
  "Introduction React Redux & LocalStorage",
  "Implement Form Validation",
  "Belajar Deploy dan Hosting Sendiri",
  "Mengerjakan beberapa Latihan & Project"
];

export const _silabusBE = [
  "Introduction JavaScript Fundamental",
  "Introduction Algorithm",
  "Introduction Class & OOP",
  "Big O and Data Structure",
  "NPM FS Module",
  "Deal with Async",
  "Introduction Express JS",
  "Introduction RDBMS",
  "Introduction ORM (Sequelize)",
  "Introduction JWT Middleware",
  "Introduction NoSQL",
  "Belajar Deploy dan Hosting Sendiri",
  "Mengerjakan beberapa Latihan & Project"
];

export const _whyUs = [
  {
    img: bootcamp,
    title: "Bootcamp 12 minggu",
    desc:
      "Terdapat 3 sesi setiap minggunya, dan seluruhnya dilakukan secara online."
  },
  {
    img: mentor,
    title: "Exclusive mentorship",
    desc: "Rasio 15:1 antara siswa dengan mentor"
  },
  {
    img: method,
    title: "Metode pembayaran yang bervariasi",
    desc:
      "Empat jenis cara bayar tersedia. Bayar lunas, cicilan, paylater dan beasiswa."
  },
  {
    img: career,
    title: "Career coaching",
    desc:
      "Pembinaan karir untuk meningkatkan kepercayaan diri Anda dan mempersiapkan CV dan wawancara Anda."
  },
  {
    img: project,
    title: "Projects & portfolio",
    desc: "Akan banyak tugas dan proyek untuk membangun portofolio Anda."
  },
  {
    img: community,
    title: "Great Community",
    desc: "Very active and dynamic group about career and work."
  }
];

export const _pricing = [
  {
    title: "Normal",
    out_price: "Rp 8.599.000",
    price: "Rp 7.000.000",
    benefits: [
      "38 pertemuan / 12 minggu",
      "Pelatihan karir & lowongan pekerjaan"
    ],
    special: false
  },
  {
    title: "Early Bird",
    out_price: "Rp 8.599.000",
    price: "Rp 6.500.000",
    benefits: [
      "Harga khusus untuk 5 pendaftar pertama!",
      "38 pertemuan / 12 minggu",
      "Pelatihan karir & lowongan pekerjaan"
    ],
    special: true
  },
  {
    title: "Promo Bestie",
    out_price: "Rp 14.000.000",
    price: "Rp 13.500.000",
    benefits: [
      "Promo pendaftaran 2 orang khusus untuk 4 pendaftar",
      "38 pertemuan / 12 minggu",
      "Pelatihan karir & lowongan pekerjaan"
    ],
    special: false
  }
];

export const _payment = [
  {
    title: "Bayar full/lunas",
    desc:
      "Setelah  melakukan proses pendaftaran, langsung melakukan pembayaran full/lunas.",
    icon: handCash,
    style: "#D05E5E"
  },
  {
    title: "Belajar dulu, bayar nanti",
    desc:
      "Belajar dulu dan bayar setelah Anda menyelesaikan bootcamp 3 bulan bersama Cooderu.",
    icon: transaction,
    style: "#B9EA1B"
  },
  {
    title: "Cicilan",
    desc:
      "Sesuaikan pembayaran Anda agar sesuai dengan rencana pengeluaran Anda.",
    icon: moneyBox,
    style: "#6282F4"
  },
  {
    title: "Beasiswa",
    desc:
      "Dapatkan tunjangan penuh belajar backend dan frontend bersama Cooderu",
    icon: gradCap,
    style: "#FE8D3B"
  }
];

export const _ourTeam = [
  {
    name: "Polma Tambunan",
    desc: "Co-Founder",
    image: pakPolma
  },
  {
    name: "Aditya Siregar",
    desc: "Co-Founder",
    image: pakAditya
  },
  {
    name: "Adrian Benhard",
    desc: "Co-Founder",
    image: pakAdrian
  },
  {
    name: "Herman Handoko",
    desc: "Advisor",
    image: pakHerman
  },
  {
    name: "Ichwan Peryana",
    desc: "Advisor",
    image: pakIchwan
  }
];

export const _almusnus = [
  {
    name: "Daffa",
    almnus: "Alumni Batch I",
    desc:
      "Kuruikulum yang diberikan oleh Cooderu bermanfaat bagi saya karena relevan dengan industri, sehingga lebih mudah untuk diterapkan di tempat kerja."
  },
  {
    name: "Oscar",
    almnus: "Alumni Batch I",
    desc:
      "Mentor berpengalaman dan cepat tanggap sangat membantu saya untuk memahami setiap materi dan menyelesaikan masalah yang saya temui selama mengikuti Bootcamp."
  },
  {
    name: "Stanley",
    almnus: "Alumni Batch I",
    desc:
      "Silabus sangat fokus dan kelas sangat fleksibel, memudahkan saya yang memiliki aktivitas di luar Bootcamp."
  }
];

export const _faq = [
  {
    ask: "Apakah bootcamp ini berbayar?",
    answer:
      "Betul sebesar Rp 7.000.000 (enam juta rupiah). Saat ini baru tersedia metode bayar lunas ya."
  },
  {
    ask: "Apakah bootcamp ini full online?",
    answer:
      "Benar, untuk saat ini tiap pertemuan digelar online pada malam hari."
  },
  {
    ask: "Berapa lama waktu belajar 1 periode bootcamp sampai selesai?",
    answer:
      "1 periode bootcamp digelar selama 12 minggu. Per minggu akan 3 kali pertemuan. 1 pertemuan 2-3 jam."
  },
  {
    ask: "Apakah ada program hiring?",
    answer:
      "Diakhir periode bootcamp akan digelar hiring bersama perusahaan tekonologi (partner Cooderu)"
  }
];

export const _logoPartner = [logo1, logo2, logo4];
