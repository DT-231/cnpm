const Partners = ({ sponsors }) => {
  return (
    <section className="py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-6xl font-bold mb-4 flex items-center justify-center">
            <span className="text-white mr-4">⭐</span>
            <span className="text-white">PARTNERS</span>
            <span className="text-pink-500 ml-2">⭐</span>
            <span className="text-yellow-400 ml-2">⭐</span>
          </h2>
        </div>

        {/* Sponsors Grid */}
        <div className="grid grid-cols-3 md:grid-cols-6 gap-8 mb-16">
          {sponsors.slice(0, 18).map((sponsor, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-gray-900/50 rounded-lg hover:bg-gray-800/50 transition-colors">
              <img 
                src={sponsor.logo} 
                alt={sponsor.name}
                className="max-h-12 w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>

        {/* Additional sponsors row */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {sponsors.slice(18).map((sponsor, index) => (
            <div key={index} className="flex items-center justify-center p-4 bg-gray-900/50 rounded-lg hover:bg-gray-800/50 transition-colors">
              <img 
                src={sponsor.logo} 
                alt={sponsor.name}
                className="max-h-12 w-auto filter brightness-0 invert opacity-80 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners
