import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: '5 Alasan Bolen Pisang Jadi Oleh-oleh Wajib Khas Surabaya | Bolenmanita',
  description: 'Simak rekomendasi oleh-oleh khas Surabaya paling hits. Bolen pisang dengan kulit crunchy dan isian lumer kini jadi favorit wisatawan.',
  keywords: 'oleh-oleh surabaya, oleh-oleh khas surabaya, bolen surabaya, bolen pisang enak, kuliner surabaya, rekomendasi oleh-oleh',
};

export default function ArticlePage1() {
  return (
    <main>
      {/* Navbar */}
      <nav className="glass" style={{ position: 'fixed', width: '100%', zIndex: 100, padding: '0.5rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '40px', height: '40px', position: 'relative' }}>
                <Image src="/bolenmanita/images/logo.png" alt="Bolen Manita Logo" fill style={{ objectFit: 'contain' }} />
              </div>
              <div style={{ fontWeight: 'bold', fontSize: '1.2rem', fontFamily: 'var(--font-heading)', color: 'var(--color-text-main)' }}>
                BOLEN MANITA
              </div>
            </Link>
            <div style={{ display: 'flex', gap: '1rem' }}>
                <Link href="/artikel" className="btn" style={{ fontSize: '0.9rem', padding: '8px 20px', background: 'transparent', color: 'var(--color-text-main)', border: '1px solid currentColor' }}>
                  Lihat Artikel Lain
                </Link>
                <Link href="/" className="btn" style={{ fontSize: '0.9rem', padding: '8px 20px' }}>
                  Order Sekarang
                </Link>
            </div>
        </div>
      </nav>

      <section className="section" style={{ paddingTop: '120px', minHeight: '100vh', background: 'white' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
           <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: '1.2' }}>5 Alasan Bolen Pisang Jadi Oleh-oleh Wajib Khas Surabaya</h1>
           <p style={{ color: '#666', marginBottom: '2rem' }}>Ditulis oleh Admin Bolenmanita • 06 Jan 2026</p>
           
           <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '20px', overflow: 'hidden', marginBottom: '2rem' }}>
              <Image src="/bolenmanita/images/bolen-cokelat.png" alt="Bolen Pisang Surabaya" fill style={{ objectFit: 'cover' }} />
           </div>

           <div className="article-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-main)' }}>
              <p className="mb-4">
                Surabaya dikenal dengan kekayaan kulinernya. Mulai dari yang pedas menyengat seperti Rujak Cingur, hingga yang manis legit seperti Spikoe. Namun belakangan ini, ada satu primadona baru yang wajib masuk dalam daftar belanjaan wisatawan: <strong>Bolen Pisang</strong>.
              </p>
              <p className="mb-4">
                Kenapa Bolen Pisang, khususnya <em>Bolenmanita</em>, begitu disukai sebagai oleh-oleh khas Surabaya? Berikut alasannya:
              </p>

              <h2 style={{ fontSize: '1.8rem', marginTop: '2rem', marginBottom: '1rem' }}>1. Perpaduan Rasa yang Sempurna</h2>
              <p className="mb-4">
                Bolen bukan sekadar roti. Ia adalah seni memadukan pisang raja yang manis legit dengan kulit pastry yang renyah dan gurih (crunchy). Ditambah lelehan cokelat atau keju di dalamnya, setiap gigitan memberikan sensasi "meledak" di mulut.
              </p>

              <h2 style={{ fontSize: '1.8rem', marginTop: '2rem', marginBottom: '1rem' }}>2. Tahan Lama Tanpa Pengawet</h2>
              <p className="mb-4">
                Salah satu syarat oleh-oleh yang baik adalah ketahanannya. Bolenmanita bisa bertahan 3-4 hari di suhu ruang dan hingga 1 minggu di kulkas, membuatnya aman dibawa perjalanan jauh keluar kota, baik naik kereta maupun pesawat.
              </p>

              <h2 style={{ fontSize: '1.8rem', marginTop: '2rem', marginBottom: '1rem' }}>3. Kemasan Premium dan Aman</h2>
              <p className="mb-4">
                Oleh-oleh seringkali juga menjadi hantaran untuk kerabat atau rekan kerja. Kemasan Bolenmanita didesain elegan dan kokoh, sehingga kue di dalamnya tidak mudah hancur dan tetap terlihat berkelas saat diberikan.
              </p>

              <h2 style={{ fontSize: '1.8rem', marginTop: '2rem', marginBottom: '1rem' }}>4. Varian Rasa Kekinian</h2>
              <p className="mb-4">
                Bosan dengan rasa original? Di Surabaya Utara, kami berinovasi dengan varian Cokelat Keju (Cokju), Sosis (Savory), dan masih banyak lagi. Cocok untuk semua lidah, dari anak-anak hingga orang dewasa.
              </p>

              <h2 style={{ fontSize: '1.8rem', marginTop: '2rem', marginBottom: '1rem' }}>5. Mudah Didapatkan</h2>
              <p className="mb-4">
                Zaman sekarang, cari oleh-oleh tidak perlu macet-macetan. Cukup pesan via WhatsApp, Bolenmanita siap dikirim ke hotel, terminal, atau stasiun Anda. Praktis, kan?
              </p>

              <div style={{ background: 'var(--color-background)', padding: '2rem', borderRadius: '20px', marginTop: '3rem', textAlign: 'center' }}>
                 <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Sudah Siap Membawa Pulang Kelezatan Ini?</h3>
                 <p className="mb-4">Jangan sampai pulang dari Surabaya dengan tangan kosong.</p>
                 <a href="/" className="btn">Pesan Bolenmanita Sekarang</a>
              </div>
           </div>
        </div>
      </section>

       <footer style={{ backgroundColor: 'var(--color-accent)', color: 'white', padding: '2rem 0', marginTop: '0' }}>
         <div className="container text-center">
            <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>&copy; {new Date().getFullYear()} Bolen Manita. Surabaya Utara.</p>
         </div>
      </footer>
    </main>
  );
}
