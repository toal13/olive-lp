
import backgroundImage from '../assets/background.jpg'

export default function Hero() {
  return (
    <div className="relative h-screen bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className="absolute inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <h1 className="text-white text-5xl md:text-7xl font-bold">Start day with coffee</h1>
        </div>
    </div>
  )
}
