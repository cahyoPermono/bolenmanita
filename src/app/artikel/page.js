import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
  title: 'Artikel & Berita - Bolenmanita Surabaya',
  description: 'Baca informasi menarik seputar kuliner Surabaya, tips oleh-oleh, dan cerita di balik dapur Bolenmanita.',
};

export default function ArticlesPage() {
  const articles = [
    {
      slug: 'rekomendasi-oleh-oleh-surabaya',
      title: '5 Alasan Bolen Pisang Jadi Oleh-oleh Wajib Khas Surabaya',
      excerpt: 'Bingung cari oleh-oleh di Surabaya? Simak kenapa Bolen Pisang kini menjadi primadona baru yang wajib dibawa pulang.',
      image: '/bolenmanita/images/bolen-cokelat.png',
      date: '06 Jan 2026',
    },
    {
      slug: 'cara-menyimpan-bolen',
      title: 'Tips Menyimpan Bolen Agar Tetap Renyah & Nikmat',
      excerpt: 'Punya sisa bolen di rumah? Ikuti tips penyimpanan ini agar tekstur kulit pastry tetap crunchy dan isiannya lumer saat dimakan.',
      image: '/bolenmanita/images/bolen-cokelat-keju.png',
      date: '05 Jan 2026',
    }
  ];

  return (
    <main>
      {/* Navbar (Simplified for subpage) */}
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
            <Link href="/" className="btn" style={{ fontSize: '0.9rem', padding: '8px 20px' }}>
              &larr; Kembali
            </Link>
        </div>
      </nav>

      <section className="section" style={{ paddingTop: '150px', minHeight: '100vh' }}>
        <div className="container">
          <div className="text-center mb-6">
            <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>BLOG & ARTIKEL</span>
            <h1 style={{ fontSize: '3rem', margin: '0.5rem 0' }}>Cerita Dapur</h1>
            <p style={{ color: 'var(--color-text-light)' }}>Informasi menarik seputar bolen dan kuliner Surabaya.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
            {articles.map((article) => (
              <Link href={`/artikel/${article.slug}`} key={article.slug} className="article-card">
                <div style={{ 
                  background: 'white', 
                  borderRadius: '20px', 
                  overflow: 'hidden', 
                  boxShadow: 'var(--shadow-sm)',
                  height: '100%',
                  transition: 'transform 0.3s ease'
                }}>
                  <div style={{ position: 'relative', height: '200px', width: '100%' }}>
                    <Image src={article.image} alt={article.title} fill style={{ objectFit: 'cover' }} />
                  </div>
                  <div style={{ padding: '2rem' }}>
                    <span style={{ fontSize: '0.8rem', color: '#888', display: 'block', marginBottom: '0.5rem' }}>{article.date}</span>
                    <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', lineHeight: '1.3' }}>{article.title}</h3>
                    <p style={{ color: 'var(--color-text-light)', fontSize: '0.95rem', lineHeight: '1.6' }}>{article.excerpt}</p>
                    <span style={{ display: 'inline-block', marginTop: '1.5rem', color: 'var(--color-accent)', fontWeight: 'bold' }}>Baca Selengkapnya &rarr;</span>
                  </div>
                </div>
              </Link>
            ))}
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
