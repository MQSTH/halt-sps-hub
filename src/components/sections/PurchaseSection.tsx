import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import bgProducts from "@/assets/bg-products.jpg";

const PurchaseSection = () => {
  return (
    <section id="beli" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${bgProducts})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-background/90" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-6">
              <ShoppingCart className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-foreground">Belanja Sekarang</span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Harga & Tempat Membeli
            </h2>

            <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
              Susu Kambing Bubuk Halt SPS tersedia luas di berbagai marketplace dengan banyak 
              pilihan toko. Kamu bisa memilih seller terdekat dari domisili kamu agar ongkir lebih hemat.
            </p>

            <div className="glass-card rounded-2xl p-6 md:p-8 mb-8 inline-block">
              <p className="text-foreground font-medium">
                Kisaran harga box reguler 10 sachet biasanya berada sekitar{" "}
                <span className="gradient-text font-bold text-xl">Rp35.000–45.000</span> per box
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
              <Button asChild variant="cta" size="lg" className="shadow-xl shadow-primary/30">
                <a href="https://shopee.co.id/search?keyword=halt%20sps" target="_blank" rel="noopener noreferrer">
                  Cari di Shopee
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="glass border-primary/30 hover:bg-primary/10">
                <a href="https://www.tokopedia.com/search?st=product&q=halt%20sps" target="_blank" rel="noopener noreferrer">
                  Cari di Tokopedia
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="glass border-primary/30 hover:bg-primary/10">
                <a href="https://www.lazada.co.id/tag/susu-halt-sps/" target="_blank" rel="noopener noreferrer">
                  Cari di Lazada
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Silakan pilih marketplace favoritmu, lalu cari penjual dengan rating dan lokasi yang 
              paling sesuai. Daftar toko dapat berubah sewaktu-waktu.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default PurchaseSection;
