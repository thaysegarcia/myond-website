import { useEffect, useState } from "react";
import type { VisualIDCard } from "../types/VisualIDCard";
import { motion } from "motion/react";

interface CardStackProps {
  cards: VisualIDCard[];
  interval?: number;
}

const COUNT = 4;

function CardStack({ cards, interval = 3000 }: CardStackProps) {
  const [order, setOrder] = useState<number[]>(() => cards.map((_, i) => i));

  useEffect(() => {
    const timer = setInterval(() => {
      setOrder((prevOrder) => {
        const [front, ...rest] = prevOrder;
        return [...rest, front];
      });
    }, interval);

    return () => clearInterval(timer);
  }, [interval]);

  return (
    <div className="relative w-full max-w-md aspect-square">
      {order.map((cardIndex, depth) => {
        if (depth >= COUNT) return null;
        const card = cards[cardIndex];

        return (
          <motion.div
            key={card.id}
            className="absolute inset-0 rounded-xl overflow-hidden shadow-xl bg-white"
            animate={{
              x: `${depth * 10}%`,
              y: `${depth * 1}%`,
              scale: 1 - depth * 0.06,
              opacity: 1,
            }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            style={{ zIndex: COUNT - depth }}
          >
            <img
              src={card.image}
              alt={card.title}
              className="w-full h-full object-cover"
            />
          </motion.div>
        );
      })}
    </div>
  );
}

export default CardStack;
