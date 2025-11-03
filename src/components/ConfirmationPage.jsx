import React from 'react'

const ConfirmationPage = ({ onClose, userInfo }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-lg w-full mx-4 overflow-hidden">
        {/* Header với background đỏ */}
        <div className="bg-red-600 text-white px-8 py-6 text-center">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-2">Đăng ký thành công!</h2>
          <p className="text-red-100">Cảm ơn bạn đã đăng ký Flow Fest Vietnam 2025</p>
        </div>

        {/* Nội dung chính */}
        <div className="px-8 py-6 text-gray-800">
          <div className="text-center mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Xác nhận thông tin đăng ký</h3>
            
            {/* Thông tin user */}
            <div className="bg-gray-50 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-600">Họ và tên:</span>
                <span className="text-gray-900 font-semibold">{userInfo?.name}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="font-medium text-gray-600">Email:</span>
                <span className="text-gray-900 font-semibold">{userInfo?.email}</span>
              </div>
            </div>

            {/* Thông báo xác nhận */}
            <div className="border-l-4 border-red-500 bg-red-50 p-4 mb-6">
              <div className="flex">
                <div className="ml-3">
                  <p className="text-sm text-red-800">
                    <strong>Email xác nhận đã được gửi!</strong><br />
                    Vui lòng kiểm tra hộp thư của bạn để xác nhận đăng ký.
                  </p>
                </div>
              </div>
            </div>

            {/* Thông tin sự kiện */}
            <div className="text-center text-gray-600 mb-6">
              <p className="text-sm">
                <strong>Flow Fest Vietnam 2025</strong><br />
                Lễ hội âm nhạc lớn nhất Việt Nam<br />
                📍 TP. Hồ Chí Minh | 🗓️ Tháng 6/2025
              </p>
            </div>
          </div>
        </div>

        {/* Footer với nút đóng */}
        <div className="px-8 py-4 bg-gray-50 flex justify-center">
          <button
            onClick={onClose}
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
            Tiếp tục khám phá
          </button>
        </div>

        {/* Nút đóng góc phải */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white/80 hover:text-white transition-colors"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default ConfirmationPage
