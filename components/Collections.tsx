import { motion } from 'framer-motion'

const fadeInUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
}

const collections = [
  { name: 'Iconography', description: 'Inspired by timeless Orthodox imagery', imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-collection-01.jpg', imageAlt: 'Brown leather key ring with brass metal loops and rivets on wood table.', href: '#' },
  { name: 'Vestments', description: 'Modern takes on traditional Orthodox vestments', imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-collection-02.jpg', imageAlt: 'Natural leather mouse pad on white desk next to porcelain mug and keyboard.', href: '#' },
  { name: 'Accessories', description: 'Elevate your faith with our curated accessories', imageSrc: 'https://tailwindui.com/img/ecommerce-images/home-page-04-collection-03.jpg', imageAlt: 'Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.', href: '#' },
]

export default function Collections() {
  return (
    <section
      aria-labelledby="collection-heading"
      className="relative -mt-96 sm:mt-0"
    >
      <h2 id="collection-heading" className="sr-only">
        Collections
      </h2>
      <div className="mx-auto grid max-w-md grid-cols-1 gap-y-6 px-4 sm:max-w-7xl sm:grid-cols-3 sm:gap-x-6 sm:gap-y-0 sm:px-6 lg:gap-x-8 lg:px-8">
        {collections.map((collection) => (
          <motion.div
            key={collection.name}
            className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 sm:aspect-h-3 sm:aspect-w-2"
            initial="hidden"
            animate="visible"
            variants={fadeInUpVariants}
          >
            <img
              src={collection.imageSrc}
              alt={collection.imageAlt}
              className="object-cover object-center"
            />
            <div className="flex flex-col justify-end p-6 bg-gradient-to-t from-black">
              <h3 className="mt-1 font-semibold text-white">{collection.name}</h3>
              <p className="mt-1 text-sm text-gray-300">{collection.description}</p>
            </div>
            <a href={collection.href} className="absolute inset-0 focus:outline-none">
              <span className="sr-only">Shop {collection.name}</span>
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  )
}