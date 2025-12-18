import { AlertCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const steps = [
  {
    number: "1",
    title: "Tuang",
    description: "Tuang 1 sachet (20–22 g) susu kambing bubuk ke dalam gelas.",
  },
  {
    number: "2",
    title: "Tambahkan Air",
    description: "Tambahkan sekitar 130 ml air hangat (bukan air mendidih).",
  },
  {
    number: "3",
    title: "Aduk & Nikmati",
    description: "Aduk hingga larut sempurna dan siap diminum.",
  },
];

const HowToUseSection = () => {
  return (
    <section id="cara" className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Cara Menyajikan
              </h2>
              <p className="text-muted-foreground">
                Mudah dan praktis untuk dinikmati setiap hari
              </p>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {steps.map((step, i) => (
              <AnimatedSection key={i} animation="scale" delay={i * 150}>
                <div className="bg-card rounded-2xl p-6 text-center shadow-sm h-full">
                  <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={450}>
            <div className="bg-accent rounded-2xl p-6 md:p-8">
              <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <AlertCircle className="w-5 h-5 text-primary" />
                Informasi Tambahan
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>Umumnya dikonsumsi 1–2 gelas per hari.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                  <span>
                    Untuk anak kecil, ibu hamil/menyusui, dan penderita penyakit tertentu, 
                    sebaiknya konsultasikan terlebih dahulu dengan tenaga kesehatan.
                  </span>
                </li>
              </ul>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
