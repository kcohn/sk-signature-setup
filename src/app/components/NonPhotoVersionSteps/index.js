
'use client';
import React, { useRef } from "react";
import { useScroll } from "framer-motion";
import  Card  from "../Card/index.js";
import { steps } from '../../data.js';

const NonPhotoVersionSteps = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

  return (
    <div ref={container} className="mb-50vh mt-50vh">
      {
        steps.map( (step, index) => {
          const targetScale = 1 - ( (steps.length - index) * 0.05);
          return <Card key={`s_${index}`} i={index} {...step} progress={scrollYProgress} range={[index * .25, 1]} targetScale={targetScale}/>
        })
      }
    </div>
  );
}

export default NonPhotoVersionSteps;