import { useState, useEffect, useRef } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import Lineup from './components/Lineup'
import Information from './components/Information'
import Partners from './components/Partners'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import ConfirmationPage from './components/ConfirmationPage'

function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(true)
  const [currentSection, setCurrentSection] = useState('home')

  // Resources from requirement.txt
  const resources = {
    logo: 'https://networksites.livenationinternational.com/networksites/luedmygo/ccff_logo.png?format=webp&width=384&quality=75',
    videoBackground: 'https://networksites.livenationinternational.com/networksites/ycdao4we/ccff_hero_02_720.mp4',
    backgroundImgRed: 'https://networksites.livenationinternational.com/networksites/qf1lu2rp/poster_bg_02.webp',
    contextText: 'https://networksites.livenationinternational.com/networksites/id3geqil/ccff25_lineup_06_mobile.webp',
    backgroundList: 'https://networksites.livenationinternational.com/networksites/ow1bc4st/home_club_bg.webp'
  }

  // Sponsor logos - Việt hóa
  const sponsors = [
    { name: 'Coca Cola', logo: 'https://networksites.livenationinternational.com/networksites/2emdfpi4/cocacola.png' },
    { name: 'Vietcombank', logo: 'https://networksites.livenationinternational.com/networksites/bucdcp3n/banamex.png' },
    { name: 'Vietnam Airlines', logo: 'https://networksites.livenationinternational.com/networksites/hm3ha0eu/aeromexico.png' },
    { name: 'Oishi', logo: 'https://networksites.livenationinternational.com/networksites/tfao14np/takis.png' },
    { name: 'Vicky', logo: 'https://networksites.livenationinternational.com/networksites/nkwg50mw/vivkys.png' },
    { name: 'Sico', logo: 'https://networksites.livenationinternational.com/networksites/1jdlv3be/sico.png' },
    { name: 'Sprite', logo: 'https://networksites.livenationinternational.com/networksites/bwrhsbrw/sprite.png' },
    { name: 'Viettel', logo: 'https://networksites.livenationinternational.com/networksites/xxea4a01/telcel.webp' },
    { name: 'Vivo', logo: 'https://networksites.livenationinternational.com/networksites/jqqdmkqz/vivo.webp' },
    { name: 'Bacardi', logo: 'https://networksites.livenationinternational.com/networksites/vxvagkd5/bacardi.png' },
    { name: 'JBL', logo: 'https://networksites.livenationinternational.com/networksites/41ep1j01/jbl.png' },
    { name: 'NYX', logo: 'https://networksites.livenationinternational.com/networksites/wbcorcdf/nyx.png' },
    { name: 'Bacardi Coca Cola', logo: 'https://networksites.livenationinternational.com/networksites/ku5jjtli/bacardi_mixed_cocacola.png' },
    { name: 'VinMart', logo: 'https://networksites.livenationinternational.com/networksites/rkilm112/oxxo.png' },
    { name: 'Cholimex', logo: 'https://networksites.livenationinternational.com/networksites/4h5kmxsw/mccormick.png' },
    { name: 'Kinh Do', logo: 'https://networksites.livenationinternational.com/networksites/utldhlrq/marinela.png' },
    { name: 'Monster Energy', logo: 'https://networksites.livenationinternational.com/networksites/rprmajjh/moster.png' },
    { name: 'Vodka Hanoi', logo: 'https://networksites.livenationinternational.com/networksites/qgegb21e/cuervo.png' },
    { name: 'New Mix', logo: 'https://networksites.livenationinternational.com/networksites/i1rn2rzl/new_mix.png' },
    { name: 'Flashlyte', logo: 'https://networksites.livenationinternational.com/networksites/oy3peiv4/flashlyte.png' },
    { name: 'Trung Nguyen Coffee', logo: 'https://networksites.livenationinternational.com/networksites/cgsmtizp/costa_coffe.png' },
    { name: 'FUD', logo: 'https://networksites.livenationinternational.com/networksites/pcolsqoy/fud.png' },
    { name: 'Eternal Secret', logo: 'https://networksites.livenationinternational.com/networksites/0j2cyti4/eternal-secret.png' },
    { name: 'Presidente', logo: 'https://networksites.livenationinternational.com/networksites/xasfgbkg/presidente.png' },
    { name: 'De La Rosa', logo: 'https://networksites.livenationinternational.com/networksites/jxqlmwzd/de_la_rosa.png' },
    { name: 'CGV Cinema', logo: 'https://networksites.livenationinternational.com/networksites/e0sp0o0p/cinemex.png' },
    { name: 'Topo Chico', logo: 'https://networksites.livenationinternational.com/networksites/lo5csh35/topo-chico.png' },
    { name: 'Nivea', logo: 'https://networksites.livenationinternational.com/networksites/dmrhpwiu/nivea.png' }
  ]

  // Newsletter form state
  const [formData, setFormData] = useState({ name: '', email: '' })
  const [registrations, setRegistrations] = useState([])
  const [totalRegistrations, setTotalRegistrations] = useState(0)
  const [currentPage, setCurrentPage] = useState(1)
  const [loading, setLoading] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [confirmedUser, setConfirmedUser] = useState(null)
  const itemsPerPage = 10

  const navItems = [
    'VÉ XEM SHOW', 'VIETCOMBANK VIP', 'LINEUP', 'THÔNG TIN',
    'CÁCH ĐẾN ĐÂY', 'TRẢI NGHIỆM', 'LINEUP PREMIUM', 'KHU VỰC DOANH NGHIỆP'
  ]

  // Fetch registrations (mock data for now)
  useEffect(() => {
    fetchRegistrations()
  }, [currentPage])

  const fetchRegistrations = async () => {
    setLoading(true)
    try {
      // Get all registrations and sort manually
      // const response = await fetch('http://localhost:3001/registrations')
      const response = await fetch('https://tks2l461-3001.asse.devtunnels.ms/registrations')
      const allData = await response.json()
      
      // Sort by ID in descending order (newest first)
      const sortedData = allData.sort((a, b) => parseInt(b.id) - parseInt(a.id))
      
      // Manual pagination
      const startIndex = (currentPage - 1) * itemsPerPage
      const endIndex = startIndex + itemsPerPage
      const paginatedData = sortedData.slice(startIndex, endIndex)
      
      setRegistrations(paginatedData)
      setTotalRegistrations(allData.length)
      
      setLoading(false)
    } catch (error) {
      console.error('Error fetching registrations:', error)
      // Fallback to mock data if API fails
      const mockData = Array.from({ length: 50 }, (_, i) => ({
        id: i + 1,
        name: `Người dùng ${i + 1}`,
        email: `user${i + 1}@flowfest.vn`
      }))
      
      const startIndex = (currentPage - 1) * itemsPerPage
      const endIndex = startIndex + itemsPerPage
      const paginatedData = mockData.slice(startIndex, endIndex)
      setRegistrations(paginatedData)
      setTotalRegistrations(50) // Set total for fallback
      setLoading(false)
    }
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    if (formData.name && formData.email) {
      try {
        // Get current registrations count to generate next ID
        // const countResponse = await fetch('http://localhost:3001/registrations')
        const countResponse = await fetch('https://tks2l461-3001.asse.devtunnels.ms/registrations')
        const allRegistrations = await countResponse.json()
        const nextId = allRegistrations.length + 1
        
        const data = {
          id: nextId,
          ...formData
        }
        
        // const response = await fetch('http://localhost:3001/registrations', {
        const response = await fetch('https://tks2l461-3001.asse.devtunnels.ms/registrations', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data)
        })
        
        if (response.ok) {
          // Hiển thị trang xác nhận thay vì alert
          setConfirmedUser(data)
          setShowConfirmation(true)
          setFormData({ name: '', email: '' })
          fetchRegistrations() // Refresh the list
        }
      } catch (error) {
        console.error('Error submitting form:', error)
        alert('Có lỗi xảy ra. Vui lòng thử lại!')
      }
    }
  }

  const totalPages = Math.ceil(totalRegistrations / itemsPerPage)
  
  // Ref for newsletter section
  const newsletterRef = useRef(null)
  
  // Function to scroll to newsletter section
  const scrollToNewsletter = () => {
    newsletterRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    })
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation resources={resources} navItems={navItems} />
      
      <Hero 
        resources={resources} 
        isVideoPlaying={isVideoPlaying} 
        setIsVideoPlaying={setIsVideoPlaying}
        scrollToNewsletter={scrollToNewsletter}
      />

      <Lineup 
        resources={resources} 
        scrollToNewsletter={scrollToNewsletter}
      />

      <Partners sponsors={sponsors} />

      <div ref={newsletterRef}>
        <Newsletter 
          formData={formData}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          registrations={registrations}
          loading={loading}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          totalPages={totalPages}
          backgroundList={resources.backgroundList}
        />
      </div>

      <Footer resources={resources} />

      {/* Trang xác nhận đăng ký */}
      {showConfirmation && (
        <ConfirmationPage 
          userInfo={confirmedUser}
          onClose={() => setShowConfirmation(false)}
        />
      )}
    </div>
  )
}

export default App

