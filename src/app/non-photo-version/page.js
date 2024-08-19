import React from "react";
import NonPhotoVersionSteps from "../components/NonPhotoVersionSteps";
import NoPhotoCopySignature from "../components/NoPhotoCopySignature";

export default function NonPhotoVersion() {
  return (
    <div>
      <NoPhotoCopySignature />
      <NonPhotoVersionSteps />
    </div>
  );
}
