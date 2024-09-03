import { features } from "../data";

export default function Features() {
  return (
    <section className="py-24 bg-gray-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-5">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white p-6 text-center shadow-lg rounded-lg flex flex-col items-center"
          >
            {feature.icon}
            <p className="text-lg font-semibold text-gray-800">
              {feature.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
