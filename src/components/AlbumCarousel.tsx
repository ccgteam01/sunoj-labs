import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface AlbumCarouselProps {
  photos: string[];
  title: string;
  onClose: () => void;
  initialIndex?: number;
}

const AlbumCarousel = ({ photos, title, onClose, initialIndex = 0 }: AlbumCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const next = () => setCurrentIndex((i) => (i + 1) % photos.length);
  const prev = () => setCurrentIndex((i) => (i - 1 + photos.length) % photos.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/95 z-50 flex flex-col"
      onClick={onClose}
    >
      <div className="flex items-center justify-between p-4 border-b border-white/10">
        <h2 className="text-xl font-medium text-white">{title}</h2>
        <button onClick={onClose} className="text-white/70 hover:text-white transition-colors">
          <X size={24} />
        </button>
      </div>

      <div className="flex-1 flex items-center justify-center p-8" onClick={(e) => e.stopPropagation()}>
        <button onClick={prev} className="absolute left-4 text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
          <ChevronLeft size={32} />
        </button>

        <AnimatePresence mode="wait">
          <motion.img
            key={currentIndex}
            src={photos[currentIndex]}
            alt=""
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.3 }}
            className="max-h-[70vh] max-w-[80vw] object-contain rounded-lg"
          />
        </AnimatePresence>

        <button onClick={next} className="absolute right-4 text-white/70 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-full">
          <ChevronRight size={32} />
        </button>
      </div>

      <div className="p-4 border-t border-white/10" onClick={(e) => e.stopPropagation()}>
        <div className="flex gap-2 overflow-x-auto pb-2 justify-center">
          {photos.map((photo, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                i === currentIndex ? "border-white scale-105" : "border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img src={photo} alt="" className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default AlbumCarousel;
