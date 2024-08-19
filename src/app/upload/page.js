"use client";

import { useEffect, useRef, useState } from "react";
import UploadHero from "../components/UploadHero.js";
import { useScroll } from "framer-motion";
import Lenis from "@studio-freight/lenis";
import CopySignature from "../components/CopySignature/index.js";
import PhotoVersionSteps from "../components/PhotoVersionSteps/index.js";

export default function Upload() {
  const [hostedImageUrl, setHostedImageUrl] = useState(null);

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <div className="relative h-[200vh]">
      <UploadHero
        hostedImageUrl={hostedImageUrl}
        setHostedImageUrl={setHostedImageUrl}
        scrollYProgress={scrollYProgress}
      />

      {hostedImageUrl && (
        <CopySignature
          hostedImageUrl={hostedImageUrl}
          scrollYProgress={scrollYProgress}
        />
      )}
      {/* <PhotoVersionSteps /> */}
    </div>
  );
}
