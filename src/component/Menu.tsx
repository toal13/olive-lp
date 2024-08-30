import { items } from "../data";

export default function Menu() {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {items.map((item, index) => (
        <div key={index} className="relative">
          <div
            className="w-full h-80 bg-cover bg-center rounded-lg"
            style={{ backgroundImage: `url(${item.image})` }}
          >
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center p-4 text-white">
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="mb-4">{item.description}</p>
              <a
                href={item.link}
                className="bg-white text-black py-2 px-4 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
              >
                {item.buttonText}
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
