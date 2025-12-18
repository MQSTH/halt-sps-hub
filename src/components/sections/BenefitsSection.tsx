import { Shield, Wind, Heart, Bone, Zap, Smile } from "lucide-react";

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
    <section id="manfaat" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Manfaat Rutin Minum Susu Kambing
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Berbagai manfaat yang bisa kamu rasakan dengan konsumsi rutin
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="bg-card rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-accent rounded-xl flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{benefit.title}</h3>
              <p className="text-sm text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
