import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, Droplets } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-background pt-8 pb-16 md:pt-16 md:pb-24">
      <div className="container">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content */}
          <AnimatedSection animation="fade-up">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Susu Kambing Bubuk{" "}
                <span className="text-primary">Halt SPS</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground">
                Susu kambing bubuk praktis untuk bantu jaga pernapasan dan kesehatan keluarga.
              </p>

              {/* Benefits */}
              <ul className="space-y-3">
                {[
                  "Membantu menjaga kenyamanan pernapasan",
                  "Membantu menjaga kesehatan lambung",
                  "Mendukung kesehatan tulang dan sendi",
                ].map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Badges */}
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                  <Droplets className="w-4 h-4" />
                  Tanpa bau kambing
                </span>
                <span className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full text-sm font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  Garansi kualitas
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
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
                Website ini hanya mengarahkan ke marketplace. Pembelian dilakukan langsung di toko pilihan kamu.
              </p>
            </div>
          </AnimatedSection>

          {/* Product Image */}
          <AnimatedSection animation="fade-left" delay={200}>
            <div className="relative">
              <div className="relative bg-accent rounded-3xl p-8 md:p-12">
                <div className="aspect-square bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl flex items-center justify-center animate-float">
                  <div className="text-center space-y-4">
                    <div className="w-32 h-40 md:w-48 md:h-56 bg-primary/20 rounded-xl mx-auto flex items-center justify-center border-2 border-primary/30">
                      <div className="text-center p-4">
                        <p className="text-primary font-bold text-lg md:text-2xl">HALT</p>
                        <p className="text-primary font-bold text-2xl md:text-4xl">SPS</p>
                        <p className="text-xs md:text-sm text-muted-foreground mt-2">Susu Kambing Bubuk</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Box 10 Sachet</p>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-primary/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
