"use client";
import Image from "next/image";
import styles from "./style.module.scss";
import { useTransform, useScroll, motion } from "framer-motion";

import { useRef } from "react";

const Card = ({
  title,
  description,
  src,
  link,
  color,
  i,
  progress,
  range,
  targetScale,
}) => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });
  const scale = useTransform(progress, range, [1, targetScale]);

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);

  return (
    <div ref={container} className={styles.cardContainer}>
      <motion.div
        className={styles.card}
        style={{
          backgroundColor: color,
          scale,
          top: `calc(-10% + ${i * 25}px)`,
        }}
      >
        <h2>
          {link ? (
            <a className="link-title" href={link} target="_blank">
              {title}
            </a>
          ) : (
            title
          )}
        </h2>
        <div className={styles.body}>
          <div className={styles.description}>
            <p>{description}</p>
          </div>
          <div className={styles.imageContainer}>
            <motion.div className={styles.inner} style={{ scale: imageScale }}>
              <Image fill src={`${src}`} alt="image" />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Card;
