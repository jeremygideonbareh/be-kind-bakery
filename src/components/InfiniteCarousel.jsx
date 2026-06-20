import { motion } from 'framer-motion'
import { SectionEyebrow } from './RevealText'

const carouselItems = [
  {
    src: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?w=400&q=80',
    label: 'Fresh Pastries',
  },
  {
    src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=400&q=80',
    label: 'Celebration Cakes',
  },
  {
    src: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=400&q=80',
    label: 'Fresh Cookies',
  },
  {
    src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=400&q=80',
    label: 'Artisan Bread',
  },
  {
    src: 'https://images.unsplash.com/photo-1550547660-d9450f859349?w=400&q=80',
    label: 'Hot Snacks',
  },
  {
    src: 'https://images.unsplash.com/photo-1558301211-0d8c8ddee6ec?w=400&q=80',
    label: 'Custom Orders',
  },
  {
    src: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80',
    label: 'Sweet Treats',
  },
  {
    src: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=400&q=80',
    label: 'Daily Specials',
  },
]

const DURATION = 40

export default function InfiniteCarousel() {
  const doubled = [...carouselItems, ...carouselItems]

  return (
    <section className="relative py-16 md:py-24 overflow-hidden bg-[#F5F9F5]">
      <div className="mx-auto max-w-6xl px-4 md:px-6 mb-10 md:mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center"
        >
          <SectionEyebrow>Our Specialities</SectionEyebrow>
          <h2 className="font-serif text-xl sm:text-2xl md:text-4xl lg:text-5xl font-medium leading-[1.2] text-balance text-foreground break-words mt-2">
            A taste of <span className="text-primary italic">everything</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 z-10 bg-gradient-to-r from-[#F5F9F5] to-transparent pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 z-10 bg-gradient-to-l from-[#F5F9F5] to-transparent pointer-events-none" />

        <motion.div
          className="flex gap-4 md:gap-6 w-max"
          animate={{ x: [0, -carouselItems.length * 300] }}
          transition={{
            x: {
              duration: DURATION,
              repeat: Infinity,
              ease: 'linear',
            },
          }}
          whileHover={{ transition: { x: { duration: DURATION * 3 } } }}
        >
          {doubled.map((item, i) => (
            <div
              key={i}
              className="relative w-[260px] md:w-[300px] aspect-[4/3] rounded-2xl overflow-hidden shrink-0 border border-primary/10 shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <p className="absolute bottom-3 left-3 right-3 text-white text-sm md:text-base font-medium font-serif">
                {item.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
