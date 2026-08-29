import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface GalleryProps {
  images: string[];
  alt: string;
}

function Gallery({ images, alt }: GalleryProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  function goToNext() {
    setDirection(1);
    setIndex((prev) => (prev + 1) % images.length);
  }

  function goToPrevious() {
    setDirection(-1);
    setIndex((prev) => (prev + 1 + images.length) % images.length);
  }

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
    }),
  };

  return (
    <div className="relative w-full max-w-md aspect-square overflow-hidden rounded-2xl">
      <button
        onClick={goToPrevious}
        aria-label="Imagem anterior"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 rounded-full w-10 h-10 flex items-center justify-center hover:bg-background transition-colors"
      >
        ←
      </button>

      <button
        onClick={goToNext}
        aria-label="Próxima imagem"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-background/80 rounded-full w-10 h-10 flex items-center justify-center hover:bg-background transition-colors"
      >
        →
      </button>
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={images[index]}
            alt={`${alt} - imagem ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default Gallery;
