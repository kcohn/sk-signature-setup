"use client"

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export default function ScrollSection() {
    const sectionRef = useRef(null);
    const triggerRef = useRef(null);

    gsap.registerPlugin(ScrollTrigger);

    useEffect(() => {
        const pin = gsap.fromTo(sectionRef.current, {
            translateX: 0
        }, {
            translateX: "-300vw",
            ease: "none",
            duration: 1,
            scrollTrigger: {
                trigger: triggerRef.current,
                start: "top top",
                end: "2000 top",
                scrub: 0.6,
                pin: true,
            }
        })

        return () => {
            pin.kill();
        }
    }, [])

    return (
    <section className="scroll-section-outer">
        <div ref={triggerRef}>
            <div ref={sectionRef}className="scroll-section-inner">
                <div className="scroll-section">
                    <h3>Non Photo Version</h3>
                </div>
                <div className="scroll-section">
                    <h3>Phot Version</h3>
                </div>
            </div>
            </div>
        </section>
    )
}