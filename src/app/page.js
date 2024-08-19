"use client";
import Hero from "./components/Hero";
import ChooseSignatureType from './components/SignatureType/index';

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
      <Hero scrollYProgress={scrollYProgress} />
      <ChooseSignatureType scrollYProgress={scrollYProgress} />
    </div>
  );
}
