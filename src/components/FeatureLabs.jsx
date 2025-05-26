export default function FeatureLabs() {
  const imageSrc = "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940";
  
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-16 py-16">
      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold mb-6">Synco Labs</h2>
        <p className="text-lg text-gray-400">
          We build original ventures in emerging markets like Brazil, adapting proven models to local culture and consumer behavior.
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <img 
          src={imageSrc}
          alt="Synco Labs - Image showing our work in emerging markets"
          className="w-full object-contain rounded-lg shadow-xl"
          onError={(e) => {
            e.currentTarget.src = "https://via.placeholder.com/600x400?text=Image+Not+Available";
          }}
          loading="lazy"
        />
      </div>
    </section>
  );
}
