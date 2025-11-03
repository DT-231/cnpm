const Hero = ({ resources, isVideoPlaying, setIsVideoPlaying, scrollToNewsletter }) => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={resources.videoBackground} type="video/mp4" />
      </video>
      
      
 
      {/* Play/Pause Button for Video */}
      <button
        onClick={() => setIsVideoPlaying(!isVideoPlaying)}
        className="absolute bottom-8 right-8 bg-white/20 hover:bg-white/30 rounded-full p-3 transition-all duration-300"
      >
        {isVideoPlaying ? (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z"/>
          </svg>
        )}
      </button>
    </section>
  )
}

export default Hero
