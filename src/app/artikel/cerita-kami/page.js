import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Cerita Bolenmanita: Dari Dapur Sederhana ke Seluruh Indonesia',
  description: 'Inilah kisah perjalanan Bolenmanita. Berawal dari resep warisan di Surabaya Utara, kini melayani ribuan pelanggan dengan komitmen rasa dan kualitas.',
  keywords: 'sejarah bolenmanita, tentang kami, profil usaha, umkm surabaya, bolen pisang premium',
};

export default function StoryPage() {
  return (
    <main>
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
           <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: '1.2' }}>Dari Dapur Sederhana, <br/>Menghangatkan Keluarga Indonesia</h1>
           <p style={{ color: '#666', marginBottom: '2rem' }}>Kisah Perjalanan Bolenmanita</p>
           
           <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '20px', overflow: 'hidden', marginBottom: '2rem' }}>
              <Image src="/bolenmanita/images/bolen-premium-cokju.png" alt="Produksi Bolenmanita" fill style={{ objectFit: 'cover' }} />
           </div>

           <div className="article-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-main)' }}>
              <p className="mb-4">
                Semua bermula dari sebuah dapur kecil di kawasan Surabaya Utara. Aroma manis pisang raja dan gurihnya mentega yang dipanggang setiap pagi menjadi alarm alami bagi tetangga sekitar. Itulah awal mula <strong>Bolenmanita</strong> lahir—bukan dari pabrik besar, tapi dari tangan seorang ibu yang ingin memberikan camilan terbaik untuk keluarganya.
              </p>

              <h2 style={{ fontSize: '1.8rem', marginTop: '2rem', marginBottom: '1rem' }}>Resep Warisan & Komitmen Rasa</h2>
              <p className="mb-4">
                Kami percaya, makanan yang enak tidak pernah bohong. Kuncinya sederhana: <strong>Bahan Premium</strong>. Kami menolak menggunakan pengawet buatan atau pemanis murahan. Bagi kami, setiap gigitan harus memberikan rasa "asli"—pisang yang matang pohon, cokelat yang benar-benar cokelat, dan keju yang melimpah.
              </p>

              <h2 style={{ fontSize: '1.8rem', marginTop: '2rem', marginBottom: '1rem' }}>Lebih dari Sekadar Oleh-oleh</h2>
              <p className="mb-4">
                Awalnya, kami hanya melayani pesanan tetangga dan kerabat. Namun, kabar tentang "bolen lumer dari Surabaya Utara" mulai menyebar dari mulut ke mulut. Pesanan mulai datang dari Sidoarjo, Gresik, hingga luar pulau.
              </p>
              <p className="mb-4">
                Kini, Bolenmanita bukan lagi sekadar camilan sore. Ia telah menjadi bagian dari momen-momen istimewa Anda: hantaran lamaran, oleh-oleh mudik, hingga teman meeting di kantor.
              </p>

              <h2 style={{ fontSize: '1.8rem', marginTop: '2rem', marginBottom: '1rem' }}>Mimpi Kami: Melayani Indonesia</h2>
              <p className="mb-4">
                Meskipun kami tumbuh, satu hal yang tidak berubah: <strong>Kehangatan</strong>. Kami ingin setiap kotak yang Anda terima rasanya sama seperti saat pertama kali kami membuatnya di dapur kecil kami. Dengan dukungan ekspedisi modern, kini Bolenmanita siap dikirim ke seluruh penjuru Indonesia.
              </p>

              <div style={{ background: 'var(--color-background)', padding: '2rem', borderRadius: '20px', marginTop: '3rem', textAlign: 'center' }}>
                 <p className="mb-4">Terima kasih telah menjadi bagian dari perjalanan kami.</p>
                 <a href="/" className="btn">Pesan Kehangatan Sekarang</a>
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
