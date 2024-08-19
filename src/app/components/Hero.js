import { motion, useTransform } from "framer-motion";

export default function Hero({scrollYProgress}) {
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);
    return (
        <motion.div
            style={{ scale, rotate }}
            className="hero__header"
            variants={{
                hidden: { opacity: 0, y: 75},
                visible: { opacity: 1, y: 0}
            }}
            initial="hidden"
            animate="visible"
            transition={{
                duration: 0.5,
                delay: 0.25,
            }}
        >
            <div className="hero__header__pill"><p>Setup Instructions</p></div>
            <h1>Sign Off with Impact,</h1>
            <p>a few clicks to craft the perfect signature for every email.</p>
            <img src="/assets/signature.png" alt="Signature" /> 
        </motion.div>
    )
}
