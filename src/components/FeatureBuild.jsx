import { motion } from "framer-motion";

export default function FeatureBuild() {
  return (
    <motion.section
      className="w-screen h-screen flex flex-col md:flex-row items-center justify-center gap-10 p-8"
      initial={{ opacity: 0, x: 100 }}
      whileInView={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.8 }}
    >
      <img
        src="ixhttps://synco.img.https://images.pexels.com/photos/1181402/pexels-photo-1181402.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        alt="Synco Build"
        className="w-full md:w-1/2 h-auto object-contain"
      />
      <div className="md:w-1/2 text-center md:text-left">
        <h2 className="text-5xl font-extrabold mb-6">Synco Build</h2>
        <p className="text-lg">
          We partner with creators and celebrities to co-create brands from the ground up, providing end-to-end support.
        </p>
      </div>
    </motion.section>
  );
}
