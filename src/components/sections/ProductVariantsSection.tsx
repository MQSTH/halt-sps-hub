import { Package } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const variants = [
  {
    name: "SPS Regular Box 10 Sachet @22g",
    content: "10 sachet x 22 g (±220 g)",
    composition: "Susu kambing bubuk sekitar 20% + gula + krimer nabati + maltodekstrin",
    price: "sekitar Rp37.000–42.500 per box",
    popular: true,
  },
  {
    name: "SPS Regular Pack / Renceng isi 10 Sachet @22g",
    content: "10 sachet x 22 g, kemasan gantung",
    composition: "Sama seperti varian box",
    price: "sekitar Rp38.000",
    popular: false,
  },
  {
    name: "Halt SPS Silver-20",
    content: "Pouch ±200 g",
    composition: "Varian ekonomis dengan kandungan susu kambing bubuk sekitar 20%",
    price: "sekitar Rp35.000–40.000",
    popular: false,
  },
  {
    name: "Halt SPS Gold-30",
    content: "Pouch ±200 g",
    composition: "Varian premium dengan susu kambing bubuk sekitar 30%",
    price: "sekitar Rp60.000–70.000",
    popular: false,
    badge: "Premium",
  },
  {
    name: "SPS Regular Pouch 110g / 220g / 440g",
    content: "Netto: 110 g, 220 g, 440 g",
    composition: "Komposisi sama seperti Regular",
    price: "±Rp20.000, Rp30.000, Rp60.000",
    popular: false,
  },
  {
    name: "SPS Coklat Pouch 250g",
    content: "Netto 250 g",
    composition: "Varian rasa coklat",
    price: "sekitar Rp40.000",
    popular: false,
    badge: "Rasa Coklat",
  },
];

const ProductVariantsSection = () => {
  return (
    <section id="varian" className="py-16 md:py-24 bg-background">
      <div className="container">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Varian Produk <span className="text-primary">Halt SPS</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Pilih varian yang paling sesuai dengan kebutuhan dan budget kamu
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {variants.map((variant, i) => (
            <AnimatedSection key={i} delay={i * 80}>
              <div
                className={`relative bg-card rounded-2xl p-6 border-2 transition-all duration-300 hover:shadow-lg h-full ${
                  variant.popular ? "border-primary" : "border-transparent shadow-sm"
                }`}
              >
                {variant.popular && (
                  <div className="absolute -top-3 left-6 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    Populer
                  </div>
                )}
                {variant.badge && !variant.popular && (
                  <div className="absolute -top-3 left-6 bg-accent text-accent-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {variant.badge}
                  </div>
                )}

                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center flex-shrink-0">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground leading-tight">{variant.name}</h3>
                </div>

                <div className="space-y-3">
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Isi</span>
                    <p className="text-sm text-foreground">{variant.content}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Komposisi</span>
                    <p className="text-sm text-foreground">{variant.composition}</p>
                  </div>
                  <div className="pt-3 border-t border-border">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Kisaran Harga</span>
                    <p className="text-lg font-semibold text-primary">{variant.price}</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={500}>
          <p className="text-sm text-muted-foreground text-center mt-8">
            Harga di atas adalah kisaran berdasarkan penjualan online dan dapat berubah sewaktu-waktu tergantung toko dan promo.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ProductVariantsSection;
