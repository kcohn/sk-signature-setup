'use client';
import styles from './page.module.scss'
import Hero from "./components/Hero";
import ScrollSection from "./components/ScrollSection";
import Footer from "./components/Footer";
import { steps } from './data';
import Card from './components/Card/index';

import { motion, useScroll } from 'framer-motion';
import { useRef, useEffect } from 'react';
import Lenis from '@studio-freight/lenis'

export default function Home() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  useEffect( () => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }
    requestAnimationFrame(raf)
  })

  return (
    <div>
      <Hero />
      <main ref={container} className={styles.main}>
      {
        steps.map( (step, index) => {
          const targetScale = 1 - ( (steps.length - index) * 0.05);
          return <Card key={`s_${index}`} i={index} {...step} progress={scrollYProgress} range={[index * .25, 1]} targetScale={targetScale}/>
        })
      }
      </main>
    </div>
  );
}
