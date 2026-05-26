import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import {
  Plane,
  Star,
  Building2,
  ShieldCheck,
  Hotel,
  UserCheck,
  CreditCard,
  Check,
  ChevronDown,
  X,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

export const Route = createFileRoute("/")({
  component: Index,
});

const HERO_IMG =
  "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?auto=format&fit=crop&w=2000&q=80";
const MADINAH_IMG =
  "https://images.unsplash.com/photo-1592326871020-04f58c1a52f3?q=80";
const AERIAL_MECCA =
  "https://images.unsplash.com/photo-1542816417-0983c9c9ad53?auto=format&fit=crop&w=2000&q=80";
const SUNSET_MADINAH =
  "https://images.unsplash.com/photo-1565793298595-6a879b1d9492?auto=format&fit=crop&w=2000&q=80";

const PACKAGES = [
  {
    name: "Paket Hemat",
    badge: "EKONOMIS",
    duration: "9 Hari 8 Malam",
    price: "Rp 28.000.000",
    image:
      "https://images.unsplash.com/photo-1466442929976-97f336a657be?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Hotel Bintang 3 (±500m dari Masjid)",
      "Visa Umroh Resmi",
      "Muthawif Profesional",
      "Full Catering 3x Sehari",
      "Penerbangan Direct",
    ],
    itinerary: [
      "Hari 1 — Keberangkatan Jakarta menuju Madinah",
      "Hari 2 — City tour Madinah & ziarah Masjid Quba",
      "Hari 3 — Raudhah & Masjid Nabawi",
      "Hari 4 — Perjalanan ke Mekkah, miqat di Bir Ali",
      "Hari 5 — Pelaksanaan Umroh & Thawaf",
      "Hari 6-7 — Ibadah di Masjidil Haram",
      "Hari 8 — Ziarah Jabal Rahmah & Jabal Tsur",
      "Hari 9 — Kepulangan ke Jakarta",
    ],
  },
  {
    name: "Paket Reguler",
    badge: "TERPOPULER",
    duration: "12 Hari 11 Malam",
    price: "Rp 35.000.000",
    image:
      "https://images.unsplash.com/photo-1575225799901-e56c019e9450?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Hotel Bintang 4 (±300m dari Masjid)",
      "Visa Umroh Resmi",
      "Muthawif & Pembimbing Senior",
      "Full Catering Menu Indonesia",
      "City Tour Mekkah & Madinah",
      "Manasik & Perlengkapan",
    ],
    itinerary: [
      "Hari 1 — Manasik akhir & keberangkatan",
      "Hari 2 — Tiba Madinah, check-in hotel",
      "Hari 3-5 — Arbain di Masjid Nabawi & ziarah",
      "Hari 6 — Perjalanan ke Mekkah, Umroh pertama",
      "Hari 7-9 — Ibadah & Umroh sunnah",
      "Hari 10 — City tour Mekkah",
      "Hari 11 — Thawaf Wada'",
      "Hari 12 — Kepulangan ke tanah air",
    ],
  },
  {
    name: "Paket Premium",
    badge: "PREMIUM",
    duration: "15 Hari 14 Malam",
    price: "Rp 45.000.000",
    image:
      "https://images.unsplash.com/photo-1519817650390-64a93db51149?auto=format&fit=crop&w=1200&q=80",
    features: [
      "Hotel Bintang 5 (View Masjid)",
      "Visa Umroh Resmi & Fast Track",
      "Pembimbing Ustadz Senior",
      "Full Catering Premium",
      "Tour Thaif & Jeddah",
      "Bus VIP Ber-AC",
      "Perlengkapan Lengkap Eksklusif",
    ],
    itinerary: [
      "Hari 1 — Pelepasan & keberangkatan VIP",
      "Hari 2-6 — Madinah Arbain + ziarah lengkap",
      "Hari 7 — Perjalanan ke Mekkah & Umroh",
      "Hari 8-12 — Ibadah intensif + Umroh sunnah 3x",
      "Hari 13 — City tour Thaif",
      "Hari 14 — Tour Jeddah & Laut Merah",
      "Hari 15 — Thawaf Wada' & pulang",
    ],
  },
];

const STATS = [
  { icon: Plane, num: 500, suffix: "+", label: "Jamaah Berangkat" },
  { icon: Star, num: 10, suffix: "+", label: "Tahun Pengalaman" },
  { icon: Building2, num: 50, suffix: "+", label: "Paket Tersedia" },
];

const FEATURES = [
  { icon: ShieldCheck, title: "Terdaftar Resmi Kemenag", desc: "Izin penyelenggara PPIU resmi & terpercaya." },
  { icon: Hotel, title: "Hotel Premium Dekat Masjid", desc: "Pilihan hotel bintang 3 hingga 5 di lokasi strategis." },
  { icon: UserCheck, title: "Pembimbing Berpengalaman", desc: "Ustadz & muthawif bersertifikat puluhan tahun." },
  { icon: CreditCard, title: "Cicilan Tanpa Bunga", desc: "Skema pembayaran fleksibel hingga 12 bulan." },
];

const TESTIMONIALS = [
  { name: "H. Ahmad Surya", city: "Jakarta", text: "Pelayanan sangat memuaskan, pembimbing sabar dan ilmunya luas. Insya Allah tahun depan ingin berangkat lagi bersama keluarga." },
  { name: "Hj. Siti Rahmah", city: "Bandung", text: "Hotel dekat dengan masjid, makanan sesuai lidah Indonesia. BBS - Berkah Biqolbun Salim benar-benar profesional dan amanah." },
  { name: "H. Bambang Wijaya", city: "Surabaya", text: "Perjalanan ibadah terasa khusyuk dan tertata. Terima kasih BBS - Berkah Biqolbun Salim, semoga semakin berkah." },
];

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          const dur = 1600;
          const start = performance.now();
          const tick = (t: number) => {
            const p = Math.min((t - start) / dur, 1);
            setN(Math.floor(to * (0.5 - Math.cos(p * Math.PI) / 2)));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [
    { href: "#beranda", label: "Beranda" },
    { href: "#paket", label: "Paket" },
    { href: "#tentang", label: "Tentang Kami" },
    { href: "#kontak", label: "Kontak" },
  ];
  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        backgroundColor: scrolled ? "var(--navy)" : "transparent",
        borderBottom: scrolled ? "1px solid var(--gold)" : "1px solid transparent",
        boxShadow: scrolled ? "0 10px 30px -10px rgba(0,0,0,0.5)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#beranda" className="flex items-center gap-2 font-display text-xl md:text-2xl" style={{ color: "var(--gold)" }}>
          <span className="text-2xl">🕌</span>
          <span className="font-bold tracking-wide">BBS - Berkah Biqolbun Salim</span>
        </a>
        <ul className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-sm uppercase tracking-widest text-white/90 hover:text-[color:var(--gold)] relative group transition-colors"
              >
                {l.label}
                <span className="absolute left-0 -bottom-1 h-px w-0 bg-[color:var(--gold)] group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
        </ul>
        <button
          className="md:hidden text-white p-2"
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <div className="space-y-1.5">
            <span className="block w-6 h-0.5 bg-[color:var(--gold)]" />
            <span className="block w-6 h-0.5 bg-[color:var(--gold)]" />
            <span className="block w-6 h-0.5 bg-[color:var(--gold)]" />
          </div>
        </button>
      </div>
      {open && (
        <div className="md:hidden" style={{ background: "var(--navy)", borderTop: "1px solid var(--gold)" }}>
          <ul className="flex flex-col px-6 py-4 gap-4">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm uppercase tracking-widest"
                  style={{ color: "var(--gold-light)" }}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}

function PackageModal({ pkg, onClose }: { pkg: (typeof PACKAGES)[number]; onClose: () => void }) {
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
    };
  }, []);
  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4"
      style={{ background: "rgba(10,22,40,0.85)" }}
      onClick={onClose}
    >
      <div
        className="relative max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        style={{
          background: "var(--navy)",
          border: "1px solid var(--gold)",
          boxShadow: "0 40px 80px rgba(0,0,0,0.6)",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-[color:var(--gold)] hover:rotate-90 transition-transform">
          <X size={28} />
        </button>
        <div className="p-8 md:p-12 text-white">
          <p className="text-xs tracking-[0.3em] mb-2" style={{ color: "var(--gold)" }}>
            {pkg.badge} · {pkg.duration}
          </p>
          <h3 className="font-display text-3xl md:text-4xl mb-2">{pkg.name}</h3>
          <p className="font-display text-2xl mb-6" style={{ color: "var(--gold)" }}>
            {pkg.price}
          </p>
          <div className="h-px w-full mb-6" style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }} />
          <h4 className="text-sm uppercase tracking-widest mb-4" style={{ color: "var(--gold-light)" }}>Itinerary</h4>
          <ul className="space-y-3 mb-8">
            {pkg.itinerary.map((day, i) => (
              <li key={i} className="flex gap-3 text-sm text-white/85 leading-relaxed">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "var(--gold)" }} />
                {day}
              </li>
            ))}
          </ul>
          <a
            href={`https://wa.me/6281234567890?text=Assalamualaikum,%20saya%20tertarik%20dengan%20${encodeURIComponent(pkg.name)}`}
            target="_blank"
            rel="noreferrer"
            className="btn-gold w-full justify-center"
          >
            Daftar via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}

function Index() {
  useReveal();
  const [modalPkg, setModalPkg] = useState<(typeof PACKAGES)[number] | null>(null);

  return (
    <div style={{ background: "var(--white)" }}>
      <Navbar />

      {/* HERO */}
      <section
        id="beranda"
        className="parallax relative min-h-screen flex items-center justify-center text-center px-6"
        style={{ backgroundImage: `url(${HERO_IMG})` }}
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(10,22,40,0.4) 0%, rgba(10,22,40,0.65) 50%, rgba(10,22,40,0.9) 100%)",
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="gold-divider text-xs tracking-[0.4em] uppercase">BBS - Berkah Biqolbun Salim</span>
          </div>
          <p
            className="font-arabic text-3xl md:text-5xl mb-6"
            style={{ color: "var(--gold)", animation: "fadeUp 1s 0.2s both" }}
          >
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>
          <h1
            className="font-display text-white text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6"
            style={{ animation: "fadeUp 1s 0.5s both" }}
          >
            Perjalanan Suci<br />
            <span style={{ color: "var(--gold-light)" }}>Menuju Tanah Haram</span>
          </h1>
          <p
            className="text-white/80 text-lg md:text-xl mb-10 font-light tracking-wide max-w-2xl mx-auto"
            style={{ animation: "fadeUp 1s 0.8s both" }}
          >
            Umroh & Wisata Religi dengan Pelayanan Premium, Pembimbing Berpengalaman, dan Pengalaman Spiritual yang Tak Terlupakan.
          </p>
          <div style={{ animation: "fadeUp 1s 1.1s both" }}>
            <a href="#paket" className="btn-gold">Lihat Paket Kami</a>
          </div>
        </div>
        <a
          href="#about-strip"
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[color:var(--gold)] z-10 bounce-arrow"
          aria-label="Scroll down"
        >
          <ChevronDown size={36} />
        </a>
      </section>

      {/* ABOUT STRIP */}
      <section
        id="about-strip"
        className="parallax relative py-24 px-6"
        style={{ backgroundImage: `url(${MADINAH_IMG})` }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(10,22,40,0.85)" }} />
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {STATS.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={i} className="text-center reveal" style={{ transitionDelay: `${i * 120}ms` }}>
                  <div className="flex justify-center mb-4">
                    <Icon size={48} style={{ color: "var(--gold)" }} strokeWidth={1.2} />
                  </div>
                  <div className="font-display text-5xl md:text-6xl font-bold mb-2" style={{ color: "var(--gold-light)" }}>
                    <CountUp to={s.num} suffix={s.suffix} />
                  </div>
                  <p className="text-white/80 tracking-widest text-sm uppercase">{s.label}</p>
                  <div className="mx-auto mt-4 h-px w-16" style={{ background: "var(--gold)" }} />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PACKAGES */}
      <section id="paket" className="py-24 px-6" style={{ background: "var(--white)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-xs uppercase tracking-[0.4em] mb-3" style={{ color: "var(--gold)" }}>
              Pilihan Terbaik
            </p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--navy)" }}>
              Paket Umroh Pilihan
            </h2>
            <div className="flex justify-center items-center gap-3 mt-4">
              <span className="block h-px w-12" style={{ background: "var(--gold)" }} />
              <span className="text-2xl" style={{ color: "var(--gold)" }}>✦</span>
              <span className="block h-px w-12" style={{ background: "var(--gold)" }} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PACKAGES.map((p, i) => (
              <article key={p.name} className="pkg-card relative flex flex-col reveal" style={{ transitionDelay: `${i * 120}ms` }}>
                <div className="relative h-56 overflow-hidden">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover" loading="lazy" />
                  <div
                    className="absolute top-4 right-4 px-3 py-1.5 text-[10px] tracking-[0.2em] font-bold"
                    style={{ background: "var(--gold)", color: "var(--navy)" }}
                  >
                    {p.badge}
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="font-display text-2xl font-bold mb-2">{p.name}</h3>
                  <span
                    className="inline-block self-start text-xs px-3 py-1 mb-4 tracking-wider"
                    style={{ border: "1px solid var(--gold)", color: "var(--gold-light)" }}
                  >
                    {p.duration}
                  </span>
                  <ul className="space-y-2 mb-6 flex-1">
                    {p.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-white/85">
                        <Check size={16} style={{ color: "var(--gold)" }} className="mt-0.5 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-5">
                    <p className="text-xs uppercase tracking-wider text-white/60 mb-1">Mulai dari</p>
                    <p className="font-display text-3xl font-bold" style={{ color: "var(--gold)" }}>
                      {p.price}
                    </p>
                  </div>
                  <button onClick={() => setModalPkg(p)} className="btn-outline-gold w-full">
                    Lihat Detail
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* QUOTE PARALLAX */}
      <section
        className="parallax relative py-32 px-6"
        style={{ backgroundImage: `url(${AERIAL_MECCA})` }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(10,22,40,0.85)" }} />
        <div className="relative z-10 max-w-4xl mx-auto text-center reveal">
          <div className="h-px w-32 mx-auto mb-10" style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }} />
          <p className="font-arabic text-3xl md:text-5xl leading-loose mb-8" style={{ color: "var(--gold)" }}>
            وَأَذِّن فِي النَّاسِ بِالْحَجِّ يَأْتُوكَ رِجَالًا
          </p>
          <p className="italic text-white/85 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
            "Dan serulah manusia untuk mengerjakan haji, niscaya mereka akan datang kepadamu dengan berjalan kaki..."
          </p>
          <p className="text-sm mt-4 tracking-widest uppercase" style={{ color: "var(--gold-light)" }}>
            QS. Al-Hajj : 27
          </p>
          <div className="h-px w-32 mx-auto mt-10" style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }} />
        </div>
      </section>

      {/* WHY US */}
      <section id="tentang" className="py-24 px-6" style={{ background: "var(--navy)" }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-xs uppercase tracking-[0.4em] mb-3" style={{ color: "var(--gold)" }}>Why Choose Us</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">Mengapa Memilih Kami</h2>
            <div className="flex justify-center items-center gap-3 mt-4">
              <span className="block h-px w-12" style={{ background: "var(--gold)" }} />
              <span className="text-2xl" style={{ color: "var(--gold)" }}>✦</span>
              <span className="block h-px w-12" style={{ background: "var(--gold)" }} />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <div key={f.title} className="feature-box p-8 text-center reveal" style={{ transitionDelay: `${i * 100}ms` }}>
                  <div className="flex justify-center mb-5">
                    <div className="p-4 rounded-full" style={{ border: "1px solid var(--gold)" }}>
                      <Icon size={32} style={{ color: "var(--gold)" }} strokeWidth={1.3} />
                    </div>
                  </div>
                  <h3 className="font-display text-xl text-white mb-3">{f.title}</h3>
                  <p className="text-white/70 text-sm leading-relaxed">{f.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section
        className="parallax relative py-24 px-6"
        style={{ backgroundImage: `url(${SUNSET_MADINAH})` }}
      >
        <div className="absolute inset-0" style={{ background: "rgba(10,22,40,0.85)" }} />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-16 reveal">
            <p className="text-xs uppercase tracking-[0.4em] mb-3" style={{ color: "var(--gold)" }}>Testimonial</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ color: "var(--gold-light)" }}>
              Kata Mereka
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <div key={t.name} className="bg-white p-8 reveal" style={{ transitionDelay: `${i * 120}ms`, color: "var(--navy)" }}>
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, k) => (
                    <Star key={k} size={18} style={{ color: "var(--gold)" }} fill="var(--gold)" />
                  ))}
                </div>
                <p className="italic leading-relaxed mb-6 text-sm">"{t.text}"</p>
                <div className="h-px w-12 mb-3" style={{ background: "var(--gold)" }} />
                <p className="font-display font-bold">{t.name}</p>
                <p className="text-xs uppercase tracking-widest opacity-60">{t.city}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="kontak" className="islamic-pattern py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="reveal mb-12">
            <p className="text-xs uppercase tracking-[0.4em] mb-3" style={{ color: "var(--gold)" }}>Kontak Kami</p>
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ color: "var(--navy)" }}>
              Hubungi Kami
            </h2>
            <p className="text-base md:text-lg max-w-2xl mx-auto" style={{ color: "var(--royal-blue)" }}>
              Konsultasi gratis, daftar sekarang dan wujudkan impian ibadah Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto reveal">
            <a
              href="https://wa.me/6281234567890?text=Assalamualaikum,%20saya%20ingin%20info%20paket%20umroh"
              target="_blank"
              rel="noreferrer"
              className="wa-btn relative overflow-hidden text-white p-6 rounded-md flex items-center gap-4 text-left transition-transform hover:-translate-y-1"
            >
              <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              <div>
                <p className="font-display text-xl font-bold">Chat WhatsApp</p>
                <p className="text-sm opacity-90">+62 812-3456-7890</p>
              </div>
            </a>
            <a
              href="https://instagram.com/bbs.berkahbiqolbinsalim"
              target="_blank"
              rel="noreferrer"
              className="ig-btn relative overflow-hidden text-white p-6 rounded-md flex items-center gap-4 text-left transition-transform hover:-translate-y-1"
            >
              <svg width="44" height="44" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98C.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
              <div>
                <p className="font-display text-xl font-bold">Follow Instagram</p>
                <p className="text-sm opacity-90">@bbs.berkahbiqolbinsalim</p>
              </div>
            </a>
          </div>

          <div
            className="mt-12 max-w-2xl mx-auto p-8 bg-white reveal text-left"
            style={{ border: "1px solid var(--gold)" }}
          >
            <h3 className="font-display text-xl mb-4" style={{ color: "var(--navy)" }}>
              Kantor Pusat
            </h3>
            <div className="space-y-3 text-sm" style={{ color: "var(--royal-blue)" }}>
              <p className="flex gap-3"><MapPin size={18} style={{ color: "var(--gold)" }} className="flex-shrink-0 mt-0.5" /> Jl. Imam Bonjol No. 88, Menteng, Jakarta Pusat 10310</p>
              <p className="flex gap-3"><Phone size={18} style={{ color: "var(--gold)" }} className="flex-shrink-0 mt-0.5" /> (021) 1234-5678 / +62 812-3456-7890</p>
              <p className="flex gap-3"><Mail size={18} style={{ color: "var(--gold)" }} className="flex-shrink-0 mt-0.5" /> info@berkahbiqolbinsalim.com</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "var(--navy)" }} className="pt-16 pb-8 px-6 text-white/80">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="font-display text-2xl font-bold mb-3" style={{ color: "var(--gold)" }}>
                🕌 BBS - Berkah Biqolbun Salim
              </div>
              <p className="font-arabic text-xl mb-3" style={{ color: "var(--gold-light)" }}>
                لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ
              </p>
              <p className="text-sm leading-relaxed text-white/60">
                Mitra perjalanan suci Anda. Terdaftar resmi & berpengalaman lebih dari satu dekade melayani jamaah Indonesia.
              </p>
            </div>
            <div>
              <h4 className="font-display text-sm uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>Quick Links</h4>
              <ul className="space-y-2 text-sm">
                {["Beranda", "Paket", "Tentang Kami", "Kontak"].map((l) => (
                  <li key={l}>
                    <a href={`#${l.toLowerCase().split(" ")[0]}`} className="hover:text-[color:var(--gold)] transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display text-sm uppercase tracking-widest mb-4" style={{ color: "var(--gold)" }}>Ikuti Kami</h4>
              <div className="flex gap-3">
                {["IG", "FB", "YT", "TT"].map((s) => (
                  <a key={s} href="#" className="w-10 h-10 flex items-center justify-center text-xs" style={{ border: "1px solid var(--gold)", color: "var(--gold)" }}>
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, var(--gold), transparent)" }} />
          <p className="text-center text-xs mt-6 text-white/50 tracking-wider">
            © {new Date().getFullYear()} BBS - Berkah Biqolbun Salim. All Rights Reserved · Barakallahu fiikum.
          </p>
        </div>
      </footer>

      {modalPkg && <PackageModal pkg={modalPkg} onClose={() => setModalPkg(null)} />}
    </div>
  );
}
