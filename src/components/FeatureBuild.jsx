export default function FeatureBuild() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-16 py-16">
      <div className="w-full md:w-1/2">
        <img
          src="https://images.pexels.com/photos/1181402/pexels-photo-1181402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="Synco Build"
          className="w-full object-contain rounded-lg shadow-xl"
        />
      </div>
      <div className="max-w-2xl">
        <h2 className="text-4xl font-bold mb-6">Synco Build</h2>
        <p className="text-lg text-gray-400">
          We partner with creators and celebrities to co-create brands from the ground up, providing end-to-end support.
        </p>
      </div>
    </section>
  );
}
