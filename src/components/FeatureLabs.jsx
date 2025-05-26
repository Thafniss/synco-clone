import { motion } from "framer-motion";

export default function FeatureLabs() {
  return (
    <motion.section
      className="w-screen h-screen flex flex-col md:flex-row items-center justify-center bg-black text-white p-12"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-xl mb-8 md:mb-0 md:mr-12">
        <h2 className="text-5xl font-bold mb-6">Synco Labs</h2>
        <p className="text-lg">
          We build original ventures in emerging markets like Brazil, adapting proven models to local culture and consumer behavior.
        </p>
      </div>
      <img 
        src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" 
        alt="Synco Labs" 
        className="w-full md:w-1/2 object-contain"
      />
    </motion.section>
  );
}
