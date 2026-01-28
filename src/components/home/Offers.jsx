const offers = [
  "🔥 Flat 40% OFF on JEE Crash Course",
  "🎯 Free Test Series for New Users",
  "📚 Buy 2 Books & Get 1 Free",
];

export default function Offers() {
  return (
    <section className="bg-yellow-100 py-4">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-4 justify-center font-semibold">
        {offers.map((o, i) => (
          <span key={i} className="bg-white px-4 py-2 rounded-full shadow">
            {o}
          </span>
        ))}
      </div>
    </section>
  );
}
