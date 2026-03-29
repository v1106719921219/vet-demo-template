'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const photos = [
  { src: '/clinic-interior.png', alt: '待合室', label: '待合室' },
  { src: '/clinic-exam.png',     alt: '診察室', label: '診察室' },
  { src: '/clinic-ct.png',       alt: 'CT・MRI室', label: 'CT・MRI室' },
]

export default function ClinicPhotos() {
  return (
    <section className="bg-cream py-20 px-4">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-xs font-medium uppercase tracking-widest text-primary">Clinic</p>
          <h2 className="mt-2 font-serif text-2xl font-bold text-text-main sm:text-3xl lg:text-[36px]">院内の様子</h2>
          <div className="mx-auto mt-3 h-0.5 w-12 bg-primary" />
          <p className="mt-3 text-sm text-muted">清潔で落ち着いた空間で、大切なご家族をお迎えします</p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              className="group relative overflow-hidden rounded-2xl"
              style={{ aspectRatio: '4/3' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* ラベル */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#2C2416]/70 to-transparent" />
              <span className="absolute bottom-4 left-4 font-serif text-sm font-bold text-white">
                {photo.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
