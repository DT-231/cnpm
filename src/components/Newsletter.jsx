import { useRef } from 'react'

const Newsletter = ({ 
  formData, 
  handleInputChange, 
  handleSubmit, 
  registrations, 
  loading, 
  currentPage, 
  setCurrentPage, 
  totalPages,
  backgroundList
}) => {
  const newsletterRef = useRef(null)

  return (
    <>
      

      {/* Registration List Section */}
      <section 
        className="relative py-16 overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundList})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Background overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold mb-8 text-white text-center">Danh sách đăng ký</h3>
          
          {loading ? (
            <div className="flex justify-center py-8">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
            </div>
          ) : (
            <>
              {/* White background table */}
              <div className="max-w-3xl mx-auto">
                <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                  <div className="grid grid-cols-2 gap-4 p-4 bg-red-600 text-white font-medium">
                    <div className="text-lg">Họ và tên</div>
                    <div className="text-lg">Email</div>
                  </div>
                  <div className="max-h-80 overflow-y-auto">
                    {registrations.map((registration, index) => (
                      <div key={registration.id} className="grid grid-cols-2 gap-4 p-4 border-b border-gray-200 hover:bg-gray-50 transition-colors">
                        <span className="text-gray-900 font-medium">{registration.name}</span>
                        <span className="text-gray-700">{registration.email}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Pagination */}
              <div className="flex justify-center space-x-2 mt-6">
                <button
                  onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  className="px-4 py-2 bg-white/90 text-gray-900 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors font-medium"
                >
                  ‹ Trước
                </button>
                
                {[...Array(Math.min(5, totalPages))].map((_, i) => {
                  const pageNum = currentPage <= 3 ? i + 1 : currentPage - 2 + i;
                  if (pageNum > totalPages) return null;
                  
                  return (
                    <button
                      key={pageNum}
                      onClick={() => setCurrentPage(pageNum)}
                      className={`px-4 py-2 rounded transition-colors font-medium ${
                        currentPage === pageNum
                          ? 'bg-red-600 text-white'
                          : 'bg-white/90 text-gray-900 hover:bg-white'
                      }`}
                    >
                      {pageNum}
                    </button>
                  )
                })}
                
                <button
                  onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 bg-white/90 text-gray-900 rounded disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white transition-colors font-medium"
                >
                  Sau ›
                </button>
              </div>
            </>
          )}
        </div>
      </section>
      {/* Newsletter Form Section */}
      <section ref={newsletterRef} id="newsletter" className="py-16 bg-linear-to-br from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Đăng ký 
          </h2>

          {/* Registration Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Họ và tên *"
                className="w-full px-6 py-4 bg-white/10 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:bg-white/20 transition-all"
                required
              />
            </div>
            <div>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email *"
                className="w-full px-6 py-4 bg-white/10 border border-gray-600 rounded-full text-white placeholder-gray-400 focus:outline-none focus:border-red-500 focus:bg-white/20 transition-all"
                required
              />
            </div>

            <p className="text-sm text-gray-400 mb-6">
              Bằng cách đăng ký, bạn chấp nhận{' '}
              <a href="#" className="text-white underline">Chính sách bảo mật</a> cũng như{' '}
              <a href="#" className="text-white underline">Điều khoản và điều kiện</a> của 
              Flow Fest Vietnam.
            </p>

            <button
              type="submit"
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-12 rounded-full text-lg transition-all duration-300 transform hover:scale-105"
            >
              Đăng ký
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Newsletter
