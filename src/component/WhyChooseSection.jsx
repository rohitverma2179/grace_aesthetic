
import { motion } from 'framer-motion';
const WhyChooseSection = () => {
  const points = [
    {
      title: "Curated Selection",
      image: "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&q=80&w=800",
      text: "Handpicked locations that offer unparalleled natural beauty."
    },
    {
      title: "Architectural Excellence",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
      text: "Designs that respect the terrain while providing modern luxury."
    },
    {
      title: "Sustainable Living",
      image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800",
      text: "Committed to eco-friendly practices and local materials."
    }
  ];

  return (
    <section id="destinations" className="py-24 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Why Choose Grace Aesthetic</h2>
          <p className="text-luxury-dark/60 max-w-2xl mx-auto italic">
            "Design is not just what it looks like and feels like. Design is how it works."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {points.map((point, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group text-center"
            >
              <div className="relative h-64 overflow-hidden rounded-sm mb-6">
                <img
                  src={point.image}
                  alt={point.title}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
              </div>
              <h4 className="text-xl font-serif mb-3 tracking-wide">{point.title}</h4>
              <p className="text-sm text-luxury-dark/70 leading-relaxed px-4">{point.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default WhyChooseSection;