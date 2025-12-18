const FooterSection = () => {
  return (
    <footer className="py-8 md:py-12 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent pointer-events-none" />
      
      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="glass-strong rounded-2xl p-6 md:p-8 text-center">
            <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
              Website ini hanya berisi informasi umum tentang produk dan tidak mewakili produsen 
              atau penjual resmi tertentu. Informasi di sini tidak menggantikan nasihat, diagnosis, 
              atau pengobatan dari dokter. Selalu konsultasikan dengan tenaga kesehatan profesional 
              untuk masalah kesehatan.
            </p>
            <div className="border-t border-border/30 pt-6">
              <p className="text-sm text-muted-foreground">
                © {new Date().getFullYear()} Info <span className="gradient-text font-semibold">Halt SPS</span>. Halaman informasi produk.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
