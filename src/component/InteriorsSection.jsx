
import { motion } from 'framer-motion';
const InteriorsSection = () => {
  const interiors = [
    {
      title: "Zen Minimalist",   
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000",
      desc: "Clean lines and natural wood textures create a calming atmosphere."
    },
    {
      title: "Modern Lodge",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&q=80&w=2000",
      desc: "Warm tones and luxurious materials for the ultimate escape."
    },
    {
      title: "Earthy Elegance",
      image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&q=80&w=2000",
      desc: "A perfect blend of contemporary pieces and organic forms."
    },
    {
      title: "Nordic Comfort",
      image: "https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&fit=crop&q=80&w=2000",
      desc: "Light-filled spaces designed for relaxation and connection."
    }
  ];

  return (
    <section id="aesthetics" className="bg-luxury-dark text-white">
      {interiors.map((item, idx) => (
        <div key={idx} className="relative h-[80vh] min-h-[500px] overflow-hidden group">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover opacity-60 transition-transform duration-[2s] group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-dark via-transparent to-transparent"></div>

          <div className="absolute bottom-20 left-4 md:left-24 lg:left-32 max-w-xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl md:text-5xl font-serif mb-4 tracking-wide">{item.title}</h3>
              <p className="text-lg text-white/70 mb-8 font-light italic">{item.desc}</p>
              <button className="btn-primary">View Project</button>
            </motion.div>
          </div>
        </div>
      ))}
    </section>
  );
};


export default InteriorsSection;