import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Tips Menyimpan Bolen Agar Tetap Renyah (Update 2026) | Bolenmanita',
  description: 'Jangan sampai bolen favoritmu basi! Simak cara menyimpan dan menghangatkan bolen pisang agar tetap crunchy dan nikmat berhari-hari.',
  keywords: 'cara simpan bolen, bolen tahan berapa lama, tips menyimpan kue, cara menghangatkan bolen, bolenmanita',
};

export default function ArticlePage2() {
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
           <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', lineHeight: '1.2' }}>Tips Menyimpan Bolen Agar Tetap Renyah & Nikmat</h1>
           <p style={{ color: '#666', marginBottom: '2rem' }}>Ditulis oleh Chef Bolenmanita • 05 Jan 2026</p>
           
           <div style={{ position: 'relative', width: '100%', height: '400px', borderRadius: '20px', overflow: 'hidden', marginBottom: '2rem' }}>
              <Image src="/bolenmanita/images/bolen-cokelat-keju.png" alt="Bolen Pisang Cokelat Keju" fill style={{ objectFit: 'cover' }} />
           </div>

           <div className="article-content" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'var(--color-text-main)' }}>
              <p className="mb-4">
               Salah satu pertanyaan paling sering masuk ke WhatsApp kami adalah: <em>"Min, bolennya tahan berapa hari sih?"</em> atau <em>"Gimana caranya biar bolennya tetep crunchy kalau dimakan besok?"</em>
              </p>
              <p className="mb-4">
                Tenang, Bolenmanita punya tips jitu untuk menjaga kualitas bolen favorit Anda agar tetap prima layaknya baru keluar dari oven.
              </p>

              <h2 style={{ fontSize: '1.8rem', marginTop: '2rem', marginBottom: '1rem' }}>1. Simpan di Suhu Ruang (1-3 Hari)</h2>
              <p className="mb-4">
                Untuk jangka pendek (sehari-hari), cukup simpan bolen di dalam kotaknya di meja makan. Pastikan kotak tertutup rapat agar tidak dihinggapi semut. Hindari paparan sinar matahari langsung yang bisa membuat cokelat di dalamnya meleleh berlebihan atau bolen berjamur lebih cepat.
              </p>

              <h2 style={{ fontSize: '1.8rem', marginTop: '2rem', marginBottom: '1rem' }}>2. Masukkan Kulkas (Hingga 7 Hari)</h2>
              <p className="mb-4">
                Jika Anda ingin menyimpannya lebih lama, kulkas adalah teman terbaik. Masukkan bolen ke dalam wadah kedap udara (seperti Tupperware) sebelum dimasukkan ke kulkas. Suhu dingin akan menjaga pisang agar tidak cepat membusuk.
              </p>
              <p className="mb-4" style={{ background: '#FFF3CD', padding: '1rem', borderRadius: '10px', fontSize: '0.9rem' }}>
                 <strong>Catatan:</strong> Tekstur bolen akan mengeras saat dingin. Ini wajar karena kandungan mentega pada pastry akan memadat.
              </p>

              <h2 style={{ fontSize: '1.8rem', marginTop: '2rem', marginBottom: '1rem' }}>3. Cara Menghangatkan Kembali (Re-heat)</h2>
              <p className="mb-4">
                Ini rahasia agar kembali <strong>CRUNCHY</strong> dan <strong>LUMER</strong>:
              </p>
              <ul style={{ paddingLeft: '2rem', marginBottom: '1rem' }}>
                 <li style={{ marginBottom: '0.5rem' }}><strong>Oven / Air Fryer:</strong> Panaskan pada suhu 150°C selama 3-5 menit. Kulit pastry akan kembali garing seketika!</li>
                 <li style={{ marginBottom: '0.5rem' }}><strong>Teflon:</strong> Gunakan api SANGAT KECIL. Panggang sebentar sambil dibolak-balik. Jangan ditinggal ya, nanti gosong.</li>
                 <li><strong>Microwave:</strong> Kurang disarankan karena akan membuat bolen jadi lembek (chewy), bukan garing. Tapi kalau Anda suka tekstur lembut, silakan hangatkan 20-30 detik saja.</li>
              </ul>

              <div style={{ background: 'var(--color-background)', padding: '2rem', borderRadius: '20px', marginTop: '3rem', textAlign: 'center' }}>
                 <p className="mb-4">Sekarang sudah tahu caranya kan? Yuk, stok Bolenmanita di rumah!</p>
                 <a href="/" className="btn">Pesan Sekarang</a>
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
