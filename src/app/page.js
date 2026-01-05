import Image from 'next/image';

export default function Home() {
  return (
    <main>
      {/* Navbar/Header */}
      <nav className="glass" style={{ position: 'fixed', width: '100%', zIndex: 100, padding: '0.5rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>

            <div style={{ fontWeight: 'bold', fontSize: '1.5rem', fontFamily: 'var(--font-heading)' }}>
              BOLEN MANITA
            </div>
          </div>
          <a href="https://wa.me/6282233064655" className="btn" target="_blank" rel="noopener noreferrer">
            Order Now
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container hero-grid">
          <div className="fade-in-up hero-content">
            <span className="hero-tagline">Premium Taste • Khas Surabaya</span>
            <h1 style={{ fontSize: '4rem', margin: '0.5rem 0', color: 'var(--color-text-main)' }}>
              Enak, Lumer, <br/> & Crunchy
            </h1>
            <p className="mb-4" style={{ fontSize: '1.2rem', color: 'var(--color-text-light)', lineHeight: '1.6' }}>
              Rasakan sensasi kelezatan Bolen Pisang premium khas Surabaya dengan kulit pastry yang renyah berlapis-lapis dan isian yang melimpah. Dibuat dengan cinta untuk memanjakan lidah Anda.
            </p>
            <div className="hero-buttons">
              <a href="#menu" className="btn">Lihat Menu</a>
              <a href="https://wa.me/6282233064655" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '12px 32px', border: '2px solid var(--color-text-main)', borderRadius: '50px', fontWeight: '600' }}>
                 WhatsApp
              </a>
            </div>
            
            <div style={{ marginTop: '3rem', display: 'flex', gap: '2rem', justifyContent: 'inherit' }}>
               <div>
                 <h3 style={{ fontSize: '2rem', color: 'var(--color-accent)' }}>100%</h3>
                 <p style={{ fontSize: '0.9rem' }}>Fresh Ingredients</p>
               </div>
               <div>
                  <h3 style={{ fontSize: '2rem', color: 'var(--color-accent)' }}>5+</h3>
                  <p style={{ fontSize: '0.9rem' }}>Varian Rasa</p>
               </div>
            </div>
          </div>
          <div className="fade-in-up" style={{ animationDelay: '0.2s', position: 'relative' }}>
             {/* Main Hero Image */}
             <div style={{ position: 'relative', width: '100%', height: '500px', borderRadius: '20px', overflow: 'hidden', boxShadow: 'var(--shadow-lg)' }}>
                 <Image 
                   src="/images/bolen-cokelat.png" 
                   alt="Bolen Cokelat Lumer" 
                   fill 
                   style={{ objectFit: 'cover' }}
                   priority
                 />
             </div>
             {/* Floating Badge - Hidden on Mobile */}
             <div className="glass mobile-hidden" style={{ position: 'absolute', bottom: '30px', left: '-20px', padding: '1rem', borderRadius: '15px', boxShadow: 'var(--shadow-md)' }}>
                <p style={{ fontWeight: 'bold', color: 'var(--color-accent)' }}>✨ Best Seller</p>
                <p>Bolen Cokelat</p>
             </div>
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="section">
        <div className="container">
          <div className="text-center mb-6">
             <span style={{ color: 'var(--color-accent)', fontWeight: 'bold', textTransform: 'uppercase' }}>Our Menu</span>
             <h2 style={{ fontSize: '3rem', margin: '0.5rem 0' }}>Varian Favorit</h2>
             <p style={{ maxWidth: '600px', margin: '0 auto', color: 'var(--color-text-light)' }}>
               Pilih varian favoritmu, tersedia dalam kemasan isi 10 pcs dan 6 pcs. Cocok untuk teman ngopi atau oleh-oleh.
             </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            <ProductCard 
              title="Bolen Cokelat" 
              price10="47k" 
              price6="28k"
              desc="Perpaduan pisang manis dan cokelat lumer yang melimpah."
              image="/images/bolen-cokelat.png"
            />
            <ProductCard 
              title="Bolen Cokelat Keju" 
              price10="47k" 
              price6="28k" 
              desc="Mix rasa cokelat manis dan keju gurih dalam satu gigitan."
              image="/images/bolen-cokelat-keju.png" // We need to ensure we map correct images
            />
             <ProductCard 
              title="Bolen Cokelat Sosis" 
              price10="49k" 
              price6="30k" 
              desc="Kombinasi unik manisnya cokelat dan gurihnya sosis."
              image="/images/bolen-cokelat-sosis.png"
            />
             <ProductCard 
              title="Bolen Sosis" 
              price10="50k" 
              price6="30k" 
              desc="Full savory! Pisang (optional) dan sosis premium."
              image="/images/bolen-sosis.png"
            />
             <ProductCard 
              title="Bolen Premium Cokju" 
              price10="55k" 
              price6="35k" 
              desc="Extra filling cokelat dan keju, lebih lumer lebih puas."
              image="/images/bolen-premium-cokju.png"
              isPremium
            />
          </div>
        </div>
      </section>

      {/* How to Order Section */}
      <section className="section" style={{ background: 'white' }}>
        <div className="container">
          <div className="text-center mb-6">
             <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>CARA PESAN</span>
             <h2 style={{ fontSize: '2.5rem' }}>Mudah & Cepat</h2>
          </div>
          <div className="steps-grid">
             <div className="step-card">
               <div className="step-number">1</div>
               <h3>Pilih Menu</h3>
               <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>Lihat daftar menu di atas dan pilih varian favoritmu.</p>
             </div>
             <div className="step-card">
               <div className="step-number">2</div>
               <h3>Chat WhatsApp</h3>
               <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>Klik tombol pesan, otomatis terhubung ke admin.</p>
             </div>
             <div className="step-card">
               <div className="step-number">3</div>
               <h3>Pembayaran</h3>
               <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>Lakukan pembayaran via Transfer Bank / QRIS.</p>
             </div>
             <div className="step-card">
               <div className="step-number">4</div>
               <h3>Pengiriman</h3>
               <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>Pesanan diproses dan dikirim ke alamatmu.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section">
         <div className="container">
            <div className="text-center mb-6">
               <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>TESTIMONI</span>
               <h2 style={{ fontSize: '2.5rem' }}>Kata Mereka</h2>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
               <div className="testimonial-card">
                  <div className="quote-icon">❝</div>
                  <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                    "Bolennya enak banget, anak-anak suka buat bekal sekolah. Lumer cokelatnya gak pelit!"
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                     <div style={{ width: '40px', height: '40px', background: '#ddd', borderRadius: '50%' }}></div>
                     <div>
                        <strong>Bunda Arka</strong>
                        <p style={{ fontSize: '0.8rem', color: '#666' }}>Ibu Rumah Tangga</p>
                     </div>
                  </div>
               </div>
               <div className="testimonial-card">
                  <div className="quote-icon">❝</div>
                  <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                    "Pas banget buat suguhan arisan, teman-teman pada nanyain beli di mana. Recommended!"
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                     <div style={{ width: '40px', height: '40px', background: '#ddd', borderRadius: '50%' }}></div>
                     <div>
                        <strong>Mama Dinda</strong>
                        <p style={{ fontSize: '0.8rem', color: '#666' }}>Wiraswasta</p>
                     </div>
                  </div>
               </div>
               <div className="testimonial-card">
                  <div className="quote-icon">❝</div>
                  <p style={{ fontStyle: 'italic', marginBottom: '1rem' }}>
                    "Kemasan rapi, rasanya premium, cocok buat oleh-oleh keluarga di luar kota."
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                     <div style={{ width: '40px', height: '40px', background: '#ddd', borderRadius: '50%' }}></div>
                     <div>
                        <strong>Ibu Santoso</strong>
                        <p style={{ fontSize: '0.8rem', color: '#666' }}>Pegawai Swasta</p>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* FAQ Section */}
      <section className="section" style={{ background: 'white' }}>
         <div className="container" style={{ maxWidth: '800px' }}>
            <div className="text-center mb-6">
               <span style={{ color: 'var(--color-accent)', fontWeight: 'bold' }}>FAQ</span>
               <h2 style={{ fontSize: '2.5rem' }}>Sering Ditanyakan</h2>
            </div>
            
            <div className="faq-item">
               <div className="faq-question">
                 Bolennya tahan berapa lama?
               </div>
               <div className="faq-answer">
                 Bolenmanita tahan 3-4 hari di suhu ruang dan bisa sampai 1 minggu jika disimpan di dalam kulkas. Hangatkan sebentar di oven/teflon agar kembali renyah.
               </div>
            </div>
            <div className="faq-item">
               <div className="faq-question">
                 Apakah ada minimal order?
               </div>
               <div className="faq-answer">
                 Tidak ada minimal order. Beli 1 box pun kami layani dengan senang hati.
               </div>
            </div>
            <div className="faq-item">
               <div className="faq-question">
                 Bisa kirim ke luar kota?
               </div>
               <div className="faq-answer">
                 Bisa banget! Kami menggunakan ekspedisi Next Day atau Paxel untuk memastikan bolen sampai dengan aman dan tetap fresh.
               </div>
            </div>
         </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/6282233064655" className="floating-wa" target="_blank" rel="noopener noreferrer" aria-label="Chat WhatsApp">
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.463 1.065 2.876 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      </a>

      {/* Info / Footer Section */}
      <footer style={{ backgroundColor: 'var(--color-accent)', color: 'white', padding: '3rem 0', marginTop: '4rem' }}>
         <div className="container text-center">
            <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-secondary)' }}>Bolen Manita</h2>
            <p className="mb-2">Enak - Lumer - Crunchy</p>
            <p className="mb-4" style={{ fontSize: '0.9rem', opacity: 0.9 }}>📍 Surabaya Utara, Jawa Timur</p>
            <a href="https://wa.me/6282233064655" className="btn" style={{ backgroundColor: 'white', color: 'var(--color-accent)', border: 'none' }}>
              Hubungi Kami via WhatsApp
            </a>
            <p style={{ marginTop: '2rem', opacity: 0.8, fontSize: '0.8rem' }}>&copy; {new Date().getFullYear()} Bolen Manita. All rights reserved.</p>
         </div>
      </footer>
    </main>
  );
}

function ProductCard({ title, price10, price6, desc, image, isPremium }) {
  return (
    <div style={{ 
      backgroundColor: 'white', 
      borderRadius: '20px', 
      overflow: 'hidden', 
      boxShadow: 'var(--shadow-sm)', 
      transition: 'transform 0.3s ease',
      position: 'relative',
      border: isPremium ? '2px solid var(--color-primary)' : 'none'
    }}
    className="product-card"
    >
      {isPremium && (
        <div style={{ position: 'absolute', top: '10px', right: '10px', background: 'var(--color-primary)', color: 'white', padding: '5px 10px', borderRadius: '10px', fontSize: '0.8rem', fontWeight: 'bold', zIndex: 10 }}>
          PREMIUM
        </div>
      )}
      <div style={{ position: 'relative', height: '250px', width: '100%' }}>
        <Image src={image} alt={title} fill style={{ objectFit: 'cover' }} />
      </div>
      <div style={{ padding: '1.5rem' }}>
        <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem', marginBottom: '1.5rem', minHeight: '3em' }}>{desc}</p>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', background: 'var(--color-background)', padding: '1rem', borderRadius: '10px' }}>
           <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed #ccc', paddingBottom: '0.5rem' }}>
             <span>10 Pcs</span>
             <span style={{ fontWeight: 'bold', color: 'var(--color-accent)' }}>{price10}</span>
           </div>
           <div style={{ display: 'flex', justifyContent: 'space-between' }}>
             <span>6 Pcs</span>
             <span style={{ fontWeight: 'bold', color: 'var(--color-accent)' }}>{price6}</span>
           </div>
        </div>
      </div>
    </div>
  )
}
