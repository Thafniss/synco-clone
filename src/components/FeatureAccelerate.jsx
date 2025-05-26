export default function FeatureAccelerate() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-16 py-16">
      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold mb-6">Synco Accelerate</h2>
        <p className="text-lg text-gray-400">
          We supercharge early-stage companies by connecting them with our network of brands, creators, and investors to drive growth.
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <img 
          src="https://synco.imgix.net/accelerate-illustration.png?auto=format&fit=max&w=600" 
          alt="Synco Accelerate" 
          className="w-full object-contain rounded-lg shadow-xl"
        />
      </div>
    </section>
  );
}
