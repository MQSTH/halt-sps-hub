const FooterSection = () => {
  return (
    <footer className="py-8 md:py-12 bg-foreground text-background">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm text-background/70 mb-6 leading-relaxed">
            Website ini hanya berisi informasi umum tentang produk dan tidak mewakili produsen 
            atau penjual resmi tertentu. Informasi di sini tidak menggantikan nasihat, diagnosis, 
            atau pengobatan dari dokter. Selalu konsultasikan dengan tenaga kesehatan profesional 
            untuk masalah kesehatan.
          </p>
          <div className="border-t border-background/20 pt-6">
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} Info Halt SPS. Halaman informasi produk.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
