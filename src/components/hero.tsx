import BlurhashView from "@annatarhe/blurhash-react";

export const Hero = () => {
  return (
    <div
      id="hero"
      className="max-w-4xl md:m-4 lg:m-8 max-h-2xl overflow-hidden md:rounded-md"
    >
      <BlurhashView
        className="w-full aspect-[3/1]"
        blurhashValue="LgPs*Maf~qWr-oV@NGkCxan$WVX9"
        src="/banner.png"
        alt="banner-image"
      />
    </div>
  );
};
