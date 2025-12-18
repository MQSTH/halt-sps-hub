import AnimatedSection from "@/components/AnimatedSection";

const AboutSection = () => {
  return (
    <section id="tentang" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground text-center mb-8">
              Tentang Susu Kambing Bubuk{" "}
              <span className="text-primary">Halt SPS</span>
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
            <div className="bg-card rounded-2xl shadow-sm overflow-hidden mb-12">
              <div className="bg-primary text-primary-foreground px-6 py-4">
                <h3 className="font-semibold text-lg">Spesifikasi Produk</h3>
              </div>
              <div className="divide-y divide-border">
                {[
                  { label: "Jenis", value: "Susu Kambing Bubuk Halt SPS Reguler" },
                  { label: "Isi box", value: "10 sachet @20–22 g (total ±200–220 g)" },
                  { label: "Takaran saji", value: "1 sachet untuk 1 gelas" },
                  { label: "Klaim rasa", value: "Lembut, tanpa bau kambing menyengat" },
                  { label: "Kualitas", value: "Diproses higienis dengan standar mutu terkontrol" },
                ].map((spec, i) => (
                  <div key={i} className="grid grid-cols-1 md:grid-cols-3 gap-2 px-6 py-4">
                    <span className="font-medium text-foreground">{spec.label}</span>
                    <span className="text-muted-foreground md:col-span-2">{spec.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* About Company */}
          <AnimatedSection delay={200}>
            <div className="bg-accent rounded-2xl p-6 md:p-8">
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
