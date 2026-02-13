import { motion } from "framer-motion";

interface AlbumCoverProps {
  photos: string[];
  title: string;
  onClick: () => void;
}

const AlbumCover = ({ photos, title, onClick }: AlbumCoverProps) => {
  const displayPhotos = photos.slice(0, 3);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={onClick}
      className="cursor-pointer group"
    >
      <div className="relative aspect-square mb-3">
        {displayPhotos.map((photo, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 bg-white rounded-xl shadow-lg overflow-hidden border border-border"
            style={{
              zIndex: displayPhotos.length - i,
              rotate: `${(i - 1) * 3}deg`,
              scale: 1 - i * 0.03,
            }}
            whileHover={{ y: -i * 8 }}
            transition={{ duration: 0.2 }}
          >
            <img src={photo} alt="" className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>
      <h3 className="text-lg font-medium text-center group-hover:text-primary transition-colors">{title}</h3>
    </motion.div>
  );
};

export default AlbumCover;
