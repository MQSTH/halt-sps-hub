import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import AnimatedSection from "@/components/AnimatedSection";

const faqs = [
  {
    question: "Apakah susu ini bisa menyembuhkan asma atau TBC?",
    answer:
      "Tidak. Produk ini bukan obat dan tidak dimaksudkan untuk menyembuhkan penyakit. Untuk diagnosis dan pengobatan, tetap konsultasikan ke dokter.",
  },
  {
    question: "Apakah aman untuk anak-anak?",
    answer:
      "Secara umum susu kambing dapat dikonsumsi anak usia di atas 1 tahun, namun sebaiknya konsultasikan terlebih dahulu dengan dokter, terutama bila ada alergi.",
  },
  {
    question: "Benarkah tanpa bau kambing?",
    answer:
      "Formula bubuk Halt SPS dirancang untuk mengurangi bau kambing sehingga rasanya lebih lembut dan nyaman diminum.",
  },
  {
    question: "Bagaimana cara memastikan produk asli?",
    answer:
      "Beli di toko tepercaya, cek ulasan, dan periksa kemasan fisik termasuk label, izin edar, dan tanggal kedaluwarsa.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="py-16 md:py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
                Pertanyaan yang Sering Diajukan
              </h2>
              <p className="text-muted-foreground">
                Temukan jawaban untuk pertanyaan umum seputar produk Halt SPS
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={100}>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, i) => (
                <AccordionItem
                  key={i}
                  value={`item-${i}`}
                  className="glass-card rounded-xl px-6 border-none"
                >
                  <AccordionTrigger className="text-left font-medium text-foreground hover:no-underline py-5">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
