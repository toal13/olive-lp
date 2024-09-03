import backgroundImage from "../assets/background.jpg";

export default function Hero() {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-center">
        <h1
          className="text-white text-3xl md:text-5xl font-bold mb-6"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Where Every Sip Tells a Story
        </h1>

        <a
          href="/shop"
          className="bg-orange-400 text-white text-lg font-semibold py-3 px-8 rounded-lg hover:bg-orange-600 transition-colors"
        >
          Shop Now
        </a>
      </div>
    </div>
  );
}
