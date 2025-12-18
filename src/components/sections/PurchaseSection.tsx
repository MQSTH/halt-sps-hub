import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

const PurchaseSection = () => {
  return (
    <section id="beli" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full mb-6">
            <ShoppingCart className="w-5 h-5" />
            <span className="text-sm font-medium">Belanja Sekarang</span>
          </div>

          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Harga & Tempat Membeli
          </h2>

          <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
            Susu Kambing Bubuk Halt SPS tersedia luas di berbagai marketplace dengan banyak 
            pilihan toko. Kamu bisa memilih seller terdekat dari domisili kamu agar ongkir lebih hemat.
          </p>

          <p className="text-foreground font-medium mb-8">
            Kisaran harga box reguler 10 sachet biasanya berada sekitar{" "}
            <span className="text-primary">Rp35.000–45.000</span> per box, tergantung toko dan promo.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-8">
            <Button asChild variant="cta" size="lg">
              <a href="https://shopee.co.id/search?keyword=halt%20sps" target="_blank" rel="noopener noreferrer">
                Cari di Shopee
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://www.tokopedia.com/search?st=product&q=halt%20sps" target="_blank" rel="noopener noreferrer">
                Cari di Tokopedia
              </a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="https://www.lazada.co.id/tag/susu-halt-sps/" target="_blank" rel="noopener noreferrer">
                Cari di Lazada
              </a>
            </Button>
          </div>

          <p className="text-sm text-muted-foreground">
            Silakan pilih marketplace favoritmu, lalu cari penjual dengan rating dan lokasi yang 
            paling sesuai. Daftar toko dapat berubah sewaktu-waktu.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PurchaseSection;
