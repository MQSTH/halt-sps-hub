import { Button } from "@/components/ui/button";
import { Phone, MessageCircle } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const ContactSection = () => {
  return (
    <section id="kontak" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full mb-6">
              <Phone className="w-5 h-5" />
              <span className="text-sm font-medium">Hubungi Kami</span>
            </div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Kontak Sales Resmi
            </h2>

            <p className="text-muted-foreground mb-6">
              Untuk informasi kemitraan atau pembelian dalam jumlah besar, kamu bisa menghubungi 
              sales resmi Halt SPS:
            </p>
          </AnimatedSection>

          <AnimatedSection delay={150}>
            <div className="bg-secondary rounded-2xl p-6 md:p-8 mb-6">
              <p className="text-lg font-semibold text-foreground mb-4">
                WhatsApp/Telp: <span className="text-primary">0857-1009-2826</span>
              </p>
              <Button asChild variant="whatsapp" size="lg">
                <a href="https://wa.me/6285710092826" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Chat via WhatsApp
                </a>
              </Button>
            </div>

            <p className="text-sm text-muted-foreground">
              Nomor ini adalah kontak sales resmi pusat. Untuk pembelian ecer, silakan gunakan 
              marketplace favorit kamu.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
