import { useState, useEffect, useRef } from "react";
import { motion, useTransform } from "framer-motion";
import UploadWidget from "./UploadWidget";
import UploadButton from "./UploadButton";

export default function UploadHero({ hostedImageUrl, setHostedImageUrl }) {
  const placeholderImageUrl =
    "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png";

  // const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  // const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.div
      // style={{ scale, rotate }}
      className="upload__hero__header"
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 1, y: 0 },
      }}
      initial="hidden"
      animate="visible"
      transition={{
        duration: 0.5,
        delay: 0.25,
      }}
    >
      <img
        className="rounded-full"
        src={hostedImageUrl || placeholderImageUrl}
        alt="Uploaded Image"
      />
      {/* <div className="hero__header__pill"><p>Upload Instructions</p></div> */}
      <h1>Upload Your Image</h1>
      <p>
        Please use your official SK headshot and scroll down to proceed after
        selecting your image.
      </p>

      <UploadWidget
        onUpload={(error, result) => {
          if (result.event === "success") {
            setHostedImageUrl(result.info.secure_url);
          }
        }}
      >
        {({ open }) => {
          function handleOnClick(e) {
            e.preventDefault();
            open();
          }
          return (
            <div className="flex justify-center items-center bg-none">
              <UploadButton onClick={handleOnClick} />
            </div>
          );
        }}
      </UploadWidget>
    </motion.div>
  );
}
