import { Shield, Wind, Heart, Bone, Zap, Smile } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import bgBenefits from "@/assets/bg-benefits.jpg";

const benefits = [
  {
    icon: Shield,
    title: "Mendukung daya tahan tubuh",
    description: "Membantu menjaga sistem imun tetap optimal",
  },
  {
    icon: Wind,
    title: "Membantu menjaga kesehatan pernapasan",
    description: "Mendukung kenyamanan pernapasan sehari-hari",
  },
  {
    icon: Heart,
    title: "Membantu kesehatan lambung dan pencernaan",
    description: "Lebih mudah dicerna dibanding susu sapi",
  },
  {
    icon: Bone,
    title: "Mendukung kekuatan tulang dan gigi",
    description: "Kaya akan kalsium untuk tulang yang sehat",
  },
  {
    icon: Zap,
    title: "Memberi tambahan energi harian",
    description: "Sumber nutrisi untuk aktivitas sehari-hari",
  },
  {
    icon: Smile,
    title: "Membantu kenyamanan pencernaan",
    description: "Cocok untuk yang sensitif terhadap laktosa",
  },
];

const BenefitsSection = () => {
  return (
    <section id="manfaat" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${bgBenefits})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-br from-background/80 via-background/40 to-background/60" />
      <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-background/50" />
      
      <div className="container relative z-10">
        <AnimatedSection>
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Manfaat Rutin Minum Susu Kambing
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Berbagai manfaat yang bisa kamu rasakan dengan konsumsi rutin
            </p>
          </div>
        </AnimatedSection>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <AnimatedSection key={i} delay={i * 100}>
              <div className="glass-card rounded-2xl p-6 h-full group">
                <div className="w-14 h-14 glass rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground">{benefit.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
