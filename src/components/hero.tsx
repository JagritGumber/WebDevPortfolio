import BlurhashView from "@annatarhe/blurhash-react";
import Image from "next/image";

export const Hero = () => {
  return (
    <div className="md:p-4 lg:p-8">
      <div className="relative max-w-4xl w-full aspect-3/1 overflow-hidden rounded-md">
        <Image
          src="/banner.png"
          alt="banner-image"
          fill
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/png;base64,LgPs*Maf~qWr-oV@NGkCxan$WVX9"
        />
      </div>
    </div>
  );
};
