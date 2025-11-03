const Lineup = ({ resources, scrollToNewsletter }) => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${resources.backgroundImgRed})`,
        }}
      >
        {/* <div className="absolute inset-0 bg-linear-to-b from-red-600/90 to-red-800/90"></div> */}
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-green-500 rounded-full opacity-80"></div>
      <div className="absolute top-20 right-20 w-16 h-16 bg-yellow-400 transform rotate-45 opacity-80"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-pink-500 transform rotate-12 opacity-70"></div>
      <div className="absolute bottom-10 right-16 w-18 h-18 bg-orange-400 rounded-full opacity-75"></div>
      
      {/* Grid Pattern Overlay */}
      <div className="absolute top-0 left-0 w-32 h-32 opacity-30">
        <div className="grid grid-cols-4 gap-2 h-full">
          {[...Array(16)].map((_, i) => (
            <div key={i} className="border border-yellow-400/50"></div>
          ))}
        </div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-7xl font-bold mb-8 text-white">
            LINEUP 2025
          </h2>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Những nghệ sĩ hàng đầu thế giới sẽ hội tụ tại sự kiện âm nhạc được mong đợi nhất năm
          </p>
        </div>

        {/* Date and Venue */}
        <div className="text-center mb-12">
          <p className="text-lg text-white/80 mb-2">22 & 23 THÁNG 11 • SVĐ QUỐC GIA MỸ ĐÌNH - HÀ NỘI</p>
        </div>

        {/* Lineup Days */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Saturday */}
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-8 text-white">THỨ BẢY</h3>
            
            {/* Headliner */}
            <div className="mb-8">
              <h4 className="text-6xl font-bold text-white mb-4">SƠN TÙNG M-TP</h4>
              <div className="text-xl text-white/90 space-y-1">
                <p>DEN VÂU • KARIK</p>
                <p>RHYMASTIC • BINZ • ERIK</p>
                <p>JACK • K-ICM • HOÀNG THUỲ LINH</p>
                <p>MIN • AMEE • CHI PU • ORANGE • HIỀN HỒ</p>
                <p>ĐÌNH DŨNG • VŨ • TOULIVER • SLIM V</p>
                <p>ONLY C • CHÂU ĐĂNG KHOA • ĐẠT G • MASEW • JUUN D • TRIPLE D • DJ MINH TRÍ</p>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-white/70 mb-2">HEADLINER ĐẶC BIỆT THỨ BẢY</p>
              <h4 className="text-4xl font-bold text-white">ED SHEERAN</h4>
            </div>
          </div>

          {/* Sunday */}
          <div className="text-center">
            <h3 className="text-4xl font-bold mb-8 text-white">CHỦ NHẬT</h3>
            
            {/* Headliner */}
            <div className="mb-8">
              <h4 className="text-6xl font-bold text-white mb-4">BLACKPINK</h4>
              <div className="text-xl text-white/90 space-y-1">
                <p>MỸ TÂM • TÓOC TIÊN</p>
                <p>BÍCH PHƯƠNG • HỒNG NHUNG • THANH LAM</p>
                <p>HÀ ANH TUẤN • NUKA • JUKY SAN • ISAAC • WENDY THẢO</p>
                <p>SUBOI • TLINH • MCK • LOW G</p>
                <p>REDDY • WOWY • LĂNG LD • YUNO BIGBOI • KIMMESE • GILL</p>
                <p>SOOBIN HOÀNG SƠN • OSAD • GREY D • SÓNG GIÓ • CHILLIES • DƯƠNG EDWARD</p>
              </div>
            </div>
            
            <div className="mb-6">
              <p className="text-sm text-white/70 mb-2">HEADLINER ĐẶC BIỆT CHỦ NHẬT</p>
              <h4 className="text-4xl font-bold text-white"> ALAN WALKER</h4>
            </div>
          </div>
        </div>


        {/* Call to Action */}
        <div className="text-center">
          <button 
            onClick={scrollToNewsletter}
            className="bg-black text-white hover:bg-gray-800 font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105 border-2 border-white"
          >
            Đăng ký ngay 
          </button>
        </div>
      </div>
    </section>
  )
}

export default Lineup
