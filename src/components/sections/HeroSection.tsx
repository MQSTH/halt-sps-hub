import { Button } from "@/components/ui/button";
import { Check, ShieldCheck, Droplets } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import productBox from "@/assets/product-box.png";
import bgHero from "@/assets/bg-hero.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen pt-24 pb-16 md:pt-28 md:pb-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgHero})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-transparent to-background/50" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
      
      {/* Floating orbs */}
      <div className="absolute top-40 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="container relative z-10">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          {/* Content */}
          <AnimatedSection animation="fade-up">
            <div className="space-y-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight">
                Susu Kambing Bubuk{" "}
                <span className="gradient-text">Halt SPS</span>
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
                    <div className="w-6 h-6 rounded-full glass flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Badges */}
              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium text-foreground">
                  <Droplets className="w-4 h-4 text-primary" />
                  Tanpa bau kambing
                </span>
                <span className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full text-sm font-medium text-foreground">
                  <ShieldCheck className="w-4 h-4 text-primary" />
                  Garansi kualitas
                </span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 pt-4">
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
                Website ini hanya mengarahkan ke marketplace. Pembelian dilakukan langsung di toko pilihan kamu.
              </p>
            </div>
          </AnimatedSection>

          {/* Product Image */}
          <AnimatedSection animation="fade-left" delay={200}>
            <div className="relative">
              <div className="relative glass-card p-4 rounded-3xl overflow-hidden">
                <img 
                  src={productBox} 
                  alt="Halt SPS Susu Kambing Bubuk Box" 
                  className="w-full h-auto object-contain animate-float"
                />
                
                {/* Shimmer effect */}
                <div className="absolute inset-0 animate-shimmer rounded-3xl pointer-events-none" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-primary/10 rounded-full blur-3xl" />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
