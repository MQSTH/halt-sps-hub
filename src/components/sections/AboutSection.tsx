import AnimatedSection from "@/components/AnimatedSection";
import bgHero from "@/assets/bg-hero.jpg";

const AboutSection = () => {
  return (
    <section id="tentang" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${bgHero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/90" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-8">
              Tentang Susu Kambing Bubuk{" "}
              <span className="gradient-text">Halt SPS</span>
            </h2>

            <p className="text-muted-foreground text-center mb-12 max-w-3xl mx-auto leading-relaxed">
              Halt SPS adalah susu kambing bubuk yang dibuat dari susu kambing etawa pilihan. 
              Tersedia dalam bentuk box sachet, pack/renceng, dan pouch dengan berbagai ukuran. 
              Varian reguler mengandung sekitar 15–20% susu kambing bubuk dengan kombinasi gula 
              dan krimer nabati, sehingga rasanya lebih ringan dan tanpa bau kambing menyengat.
            </p>
          </AnimatedSection>

          {/* Specification Table */}
          <AnimatedSection delay={100}>
            <div className="glass-card rounded-2xl overflow-hidden mb-12">
              <div className="bg-primary/90 backdrop-blur-sm text-primary-foreground px-6 py-4">
                <h3 className="font-semibold text-lg">Spesifikasi Produk</h3>
              </div>
              <div className="divide-y divide-border/50">
                {[
                  { label: "Jenis", value: "Susu Kambing Bubuk Halt SPS Reguler" },
                  { label: "Isi box", value: "10 sachet @20–22 g (total ±200–220 g)" },
                  { label: "Takaran saji", value: "1 sachet untuk 1 gelas" },
                  { label: "Klaim rasa", value: "Lembut, tanpa bau kambing menyengat" },
                  { label: "Kualitas", value: "Diproses higienis dengan standar mutu terkontrol" },
                ].map((spec, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-2 px-6 py-4 hover:bg-primary/5 transition-colors">
                    <span className="font-medium text-foreground">{spec.label}</span>
                    <span className="text-muted-foreground md:col-span-2">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* About Company */}
          <AnimatedSection delay={200}>
            <div className="glass-card rounded-2xl p-6 md:p-8">
              <h3 className="font-semibold text-lg text-foreground mb-3">Tentang Perusahaan</h3>
              <p className="text-muted-foreground leading-relaxed">
                Susu Kambing Bubuk Halt SPS didistribusikan oleh sebuah CV yang berlokasi di 
                Tangerang, Banten, Indonesia. Melalui jaringan reseller dan toko online, produk 
                ini dipasarkan ke berbagai wilayah di Indonesia.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
