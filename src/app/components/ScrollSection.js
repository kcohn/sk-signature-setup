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
                    <h3>Download File</h3>
                    <p>Click the link above to download the html file to your computer.</p>
                    <div><img src="./assets/download-file.png" /></div>
                </div>
                <div className="scroll-section">
                    <h3>Open in Browser</h3>
                    <p>Double-click <span>‘preview-and-install.html’ </span>to open the file in your web browser.</p>
                    <div><img src="./assets/open-in-browser.png" /></div>
                </div>
                <div className="scroll-section">
                    <h3>Copy Signature</h3>
                    <p>Click the <span>"Copy HTML Signature" button</span>in your browser.</p>
                    <div><img src="./assets/copy-signature.png" /></div>
                </div>
            </div>
            </div>
        </section>
    )
}