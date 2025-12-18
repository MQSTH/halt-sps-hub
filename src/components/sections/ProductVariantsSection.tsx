import AnimatedSection from "@/components/AnimatedSection";
import productBox from "@/assets/product-box.png";
import productSachet from "@/assets/product-sachet.png";
import productPouch from "@/assets/product-pouch.png";
import bgProducts from "@/assets/bg-products.jpg";

const variants = [
  {
    name: "SPS Regular Box 10 Sachet @22g",
    content: "10 sachet x 22 g (±220 g)",
    composition: "Susu kambing bubuk sekitar 20% + gula + krimer nabati + maltodekstrin",
    price: "sekitar Rp37.000–42.500 per box",
    popular: true,
    image: productBox,
  },
  {
    name: "SPS Regular Pack / Renceng isi 10 Sachet @22g",
    content: "10 sachet x 22 g, kemasan gantung",
    composition: "Sama seperti varian box",
    price: "sekitar Rp38.000",
    popular: false,
    image: productSachet,
  },
  {
    name: "Halt SPS Silver-20",
    content: "Pouch ±200 g",
    composition: "Varian ekonomis dengan kandungan susu kambing bubuk sekitar 20%",
    price: "sekitar Rp35.000–40.000",
    popular: false,
    image: productPouch,
  },
  {
    name: "Halt SPS Gold-30",
    content: "Pouch ±200 g",
    composition: "Varian premium dengan susu kambing bubuk sekitar 30%",
    price: "sekitar Rp60.000–70.000",
    popular: false,
    badge: "Premium",
    image: productPouch,
  },
  {
    name: "SPS Regular Pouch 110g / 220g / 440g",
    content: "Netto: 110 g, 220 g, 440 g",
    composition: "Komposisi sama seperti Regular",
    price: "±Rp20.000, Rp30.000, Rp60.000",
    popular: false,
    image: productPouch,
  },
  {
    name: "SPS Coklat Pouch 250g",
    content: "Netto 250 g",
    composition: "Varian rasa coklat",
    price: "sekitar Rp40.000",
    popular: false,
    badge: "Rasa Coklat",
    image: productPouch,
  },
];

const ProductVariantsSection = () => {
  return (
    <section id="varian" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgProducts})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/30 to-background/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/40" />
      
      <div className="container relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Varian Produk <span className="gradient-text">Halt SPS</span>
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
                className={`relative glass-card rounded-2xl overflow-hidden h-full ${
                  variant.popular ? "ring-2 ring-primary/50" : ""
                }`}
              >
                {variant.popular && (
                  <div className="absolute top-4 left-4 z-10 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full shadow-lg">
                    Populer
                  </div>
                )}
                {variant.badge && !variant.popular && (
                  <div className="absolute top-4 left-4 z-10 glass text-foreground text-xs font-semibold px-3 py-1 rounded-full">
                    {variant.badge}
                  </div>
                )}

                {/* Product Image */}
                <div className="aspect-square glass-subtle p-4 flex items-center justify-center">
                  <img 
                    src={variant.image} 
                    alt={variant.name}
                    className="w-full h-full object-contain transition-transform duration-500 hover:scale-110"
                  />
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="font-semibold text-foreground leading-tight">{variant.name}</h3>
                  
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Isi</span>
                    <p className="text-sm text-foreground">{variant.content}</p>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Komposisi</span>
                    <p className="text-sm text-foreground">{variant.composition}</p>
                  </div>
                  <div className="pt-3 border-t border-border/30">
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">Kisaran Harga</span>
                    <p className="text-lg font-semibold gradient-text">{variant.price}</p>
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
