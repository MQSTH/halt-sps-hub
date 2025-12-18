import { Wind, AlertCircle } from "lucide-react";

const RespiratorySection = () => {
  const leftColumn = [
    "Keluhan pernapasan seperti batuk berdahak dan sesak napas",
    "Keluhan terkait asma & TBC yang membutuhkan pengawasan dokter",
    "Rasa tidak nyaman karena asam lambung",
  ];

  const rightColumn = [
    "Radang paru dan masalah pernapasan kronis (butuh pengobatan medis)",
    "Nyeri tulang dan sendi",
    "Daya tahan tubuh menurun dan mudah lelah",
  ];

  return (
    <section id="pernapasan" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 rounded-full mb-6">
              <Wind className="w-5 h-5" />
              <span className="text-sm font-medium">Kesehatan Pernapasan</span>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Bantu Menjaga Kesehatan Pernapasan*
            </h2>
            <p className="text-lg text-muted-foreground">
              Kenyamanan untuk aktivitas sepanjang hari
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-8">
            {/* Left Column */}
            <div className="bg-secondary rounded-2xl p-6 md:p-8">
              <h3 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Keluhan yang sering dialami
              </h3>
              <ul className="space-y-4">
                {leftColumn.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-xs font-medium">{i + 1}</span>
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column */}
            <div className="bg-secondary rounded-2xl p-6 md:p-8">
              <h3 className="font-semibold text-foreground mb-6 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Keluhan lain yang sering menyertai
              </h3>
              <ul className="space-y-4">
                {rightColumn.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-primary text-xs font-medium">{i + 4}</span>
                    </div>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="bg-accent/50 border border-primary/20 rounded-xl p-4 md:p-6 flex gap-4">
            <AlertCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              *Produk ini bukan obat dan tidak digunakan untuk mendiagnosis, mengobati, atau 
              menyembuhkan penyakit. Manfaat yang dirasakan dapat berbeda pada setiap orang.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RespiratorySection;
