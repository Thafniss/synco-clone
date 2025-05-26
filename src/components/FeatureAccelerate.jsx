import { motion } from "framer-motion";

export default function FeatureAccelerate() {
  return (
    <motion.section
      className="w-screen h-screen flex flex-col md:flex-row items-center justify-center bg-black text-white p-12"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-xl mb-8 md:mb-0 md:mr-12">
        <h2 className="text-5xl font-bold mb-6">Synco Accelerate</h2>
        <p className="text-lg">
          We supercharge early-stage companies by connecting them with our network of brands, creators, and investors to drive growth.
        </p>
      </div>
      <img 
        src="https://synco.imgix.net/accelerate-illustration.png?auto=format&fit=max&w=600" 
        alt="Synco Accelerate" 
        className="w-full md:w-1/2 object-contain"
      />
    </motion.section>
  );
}
