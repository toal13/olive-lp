import { newArrivals } from "../data";

export default function NewArrivals() {
  return (
    <section className="py-24 bg-sky-950 text text-slate-100">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2
          className="text-3xl font-bold mb-6"
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          New Arrivals
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5">
        {newArrivals.map((item) => (
          <div key={item.id} className="bg-white shadow-lg overflow-hidden">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-600">
                {item.name}
              </h3>
              <p className="text-gray-600 mt-2">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <a
          href="/all-coffees"
          className="inline-block bg-orange-400 text-white py-3 px-8 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
        >
          See All Coffee
        </a>
      </div>
    </section>
  );
}
