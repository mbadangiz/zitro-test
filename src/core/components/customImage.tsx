import Image from "next/image";
import { IN_CustomImageProps } from "../types/interfaces";

function CustomImage({
  alt,
  src,
  imageClasses,
  parentClasses,
}: IN_CustomImageProps) {
  return (
    <div className={`relative ${parentClasses}`}>
      <Image src={src} className={imageClasses} alt={alt} fill />
    </div>
  );
}

export default CustomImage;
