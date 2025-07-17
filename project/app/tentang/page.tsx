import React from 'react';
import Image from 'next/image';
import { Award, Users, Globe, Heart } from 'lucide-react';

export default function TentangPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold font-merriweather mb-4">
            Tentang LangsaPost
          </h1>
          <p className="text-xl text-muted-foreground">
            Portal berita online yang menyajikan informasi terkini dan terpercaya
          </p>
        </div>

        {/* Hero Image */}
        <div className="relative aspect-video mb-12 rounded-lg overflow-hidden">
          <Image
            src="https://images.pexels.com/photos/1591056/pexels-photo-1591056.jpeg?auto=compress&cs=tinysrgb&w=1200"
            alt="LangsaPost Newsroom"
            fill
            className="object-cover"
          />
        </div>

        {/* Mission Statement */}
        <section className="mb-12">
          <div className="bg-coral/10 border-l-4 border-coral p-6 rounded-r-lg">
            <h2 className="text-2xl font-bold font-merriweather mb-4">
              Misi Kami
            </h2>
            <p className="text-lg leading-relaxed">
              LangsaPost berkomitmen untuk menyajikan berita yang akurat, berimbang, dan relevan 
              bagi masyarakat Indonesia. Kami percaya bahwa informasi yang berkualitas adalah 
              fondasi dari demokrasi yang sehat dan masyarakat yang cerdas.
            </p>
          </div>
        </section>

        {/* Values */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold font-merriweather mb-8 text-center">
            Nilai-Nilai Kami
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <Award className="h-12 w-12 mx-auto mb-4 text-coral" />
              <h3 className="font-semibold mb-2">Integritas</h3>
              <p className="text-sm text-muted-foreground">
                Kami berkomitmen pada kebenaran dan transparansi dalam setiap laporan
              </p>
            </div>
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <Users className="h-12 w-12 mx-auto mb-4 text-coral" />
              <h3 className="font-semibold mb-2">Independensi</h3>
              <p className="text-sm text-muted-foreground">
                Bebas dari tekanan politik dan kepentingan bisnis tertentu
              </p>
            </div>
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <Globe className="h-12 w-12 mx-auto mb-4 text-coral" />
              <h3 className="font-semibold mb-2">Akurasi</h3>
              <p className="text-sm text-muted-foreground">
                Setiap berita telah melalui proses verifikasi dan fact-checking
              </p>
            </div>
            <div className="text-center p-6 bg-muted/50 rounded-lg">
              <Heart className="h-12 w-12 mx-auto mb-4 text-coral" />
              <h3 className="font-semibold mb-2">Responsibilitas</h3>
              <p className="text-sm text-muted-foreground">
                Bertanggung jawab atas dampak dari setiap konten yang dipublikasikan
              </p>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold font-merriweather mb-6">
            Cerita Kami
          </h2>
          <div className="prose prose-lg max-w-none">
            <p>
              LangsaPost didirikan pada tahun 2020 dengan visi menjadi portal berita online 
              terpercaya yang dapat diakses oleh seluruh masyarakat Indonesia. Berawal dari 
              sekelompok kecil jurnalis berpengalaman, kami telah berkembang menjadi salah 
              satu media digital terkemuka di Indonesia.
            </p>
            <p>
              Dalam perjalanan kami, LangsaPost telah meliput berbagai peristiwa penting 
              yang membentuk perjalanan bangsa. Dari pemilu, bencana alam, hingga prestasi 
              olahraga internasional, kami selalu hadir memberikan informasi yang akurat 
              dan terpercaya.
            </p>
            <p>
              Kami bangga telah menjadi bagian dari perjalanan digital Indonesia dan terus 
              berkomitmen untuk memberikan layanan jurnalisme yang berkualitas tinggi.
            </p>
          </div>
        </section>

        {/* Statistics */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold font-merriweather mb-8 text-center">
            LangsaPost dalam Angka
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-coral mb-2">2.5M+</div>
              <div className="text-sm text-muted-foreground">Pembaca Bulanan</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-coral mb-2">5,000+</div>
              <div className="text-sm text-muted-foreground">Artikel Dipublikasikan</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-coral mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Jurnalis & Editor</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-coral mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Penghargaan</div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold font-merriweather mb-8 text-center">
            Tim Redaksi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                name: 'Ahmad Fauzi',
                role: 'Pemimpin Redaksi',
                image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=300',
                description: 'Berpengalaman 15 tahun dalam jurnalisme, fokus pada ekonomi dan politik.'
              },
              {
                name: 'Siti Nurhaliza',
                role: 'Editor Senior',
                image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300',
                description: 'Spesialis dalam jurnalisme olahraga dengan pengalaman meliput berbagai event internasional.'
              },
              {
                name: 'Dr. Maya Sari',
                role: 'Editor Kesehatan',
                image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=300',
                description: 'Dokter dan jurnalis kesehatan dengan fokus pada kebijakan kesehatan masyarakat.'
              },
            ].map((member, index) => (
              <div key={index} className="text-center bg-muted/50 p-6 rounded-lg">
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover rounded-full"
                  />
                </div>
                <h3 className="font-semibold text-lg">{member.name}</h3>
                <p className="text-coral text-sm mb-2">{member.role}</p>
                <p className="text-sm text-muted-foreground">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center bg-coral/10 p-8 rounded-lg">
          <h2 className="text-2xl font-bold font-merriweather mb-4">
            Hubungi Kami
          </h2>
          <p className="text-muted-foreground mb-6">
            Punya pertanyaan, saran, atau ingin berkolaborasi? Kami siap mendengarkan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/kontak"
              className="inline-flex items-center justify-center px-6 py-3 bg-coral text-white rounded-lg hover:bg-coral/90 transition-colors"
            >
              Kontak Redaksi
            </a>
            <a
              href="mailto:redaksi@langsapost.com"
              className="inline-flex items-center justify-center px-6 py-3 border border-coral text-coral rounded-lg hover:bg-coral/10 transition-colors"
            >
              Email Langsung
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}