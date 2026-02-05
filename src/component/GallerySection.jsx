
import { motion } from 'framer-motion';
const GallerySection = () => {
  const images = [
    { src: 'https://images.unsplash.com/photo-1518173946687-a4c8a3b749f5?auto=format&fit=crop&q=80&w=800', size: 'col-span-1 row-span-2' },
    { src: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800', size: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?auto=format&fit=crop&q=80&w=800', size: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&q=80&w=1200', size: 'col-span-2 row-span-2' },
    { src: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=800', size: 'col-span-1 row-span-1' },
    { src: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80&w=800', size: 'col-span-1 row-span-1' },
  ];

  return (
    <section className="py-24 bg-luxury-light">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-primary uppercase tracking-[0.4em] text-xs font-bold mb-4 block">The Collections</span>
          <h2 className="section-title">Inspired by Nature</h2>
          <div className="w-24 h-px bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 auto-rows-[250px] md:auto-rows-[300px]">
          {images.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`relative overflow-hidden rounded-sm group ${img.size}`}
            >
              <img
                src={img.src}
                alt="Nature inspired design"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-luxury-dark/20 group-hover:bg-luxury-dark/0 transition-colors duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


export default GallerySection;