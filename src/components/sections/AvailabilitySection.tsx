import { MapPin, Store, Truck } from "lucide-react";

const features = [
  {
    icon: Store,
    text: "Banyak pilihan toko dan paket (box, renceng, pouch)",
  },
  {
    icon: MapPin,
    text: "Bisa filter lokasi penjual terdekat di masing-masing marketplace",
  },
  {
    icon: Truck,
    text: "Mendukung berbagai kurir pengiriman nasional",
  },
];

const AvailabilitySection = () => {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Tersedia di Berbagai Wilayah Indonesia
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Produk Halt SPS dijual oleh banyak toko berbeda di Shopee, Tokopedia, dan Lazada, 
              dengan pengiriman ke berbagai kota dan kabupaten di Indonesia.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="bg-card rounded-2xl p-6 text-center shadow-sm">
                <div className="w-14 h-14 bg-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <p className="text-foreground font-medium">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AvailabilitySection;
