import { motion } from "framer-motion";
import { Reveal } from "./utils/Reveal";

export default function Hero() {
    return (
        <motion.div
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
            <div><p>Setup Instructions</p></div>
            <h1>Sign Off with Impact,</h1>
            <p>a few clicks to craft the perfect signature for every email.</p>
            <img src="/assets/signature.png" alt="Signature" /> 
        </motion.div>
    )
}
