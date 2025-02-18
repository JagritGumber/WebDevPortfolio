import Particles from "@tsparticles/react";
import { useAppSelector } from "../../state";
import { useEffect, useState } from "react";

export default function ParticlesBg() {
  const [isInit, setIsInit] = useState(false);
  const { init } = useAppSelector((state) => state.particles);

  useEffect(() => {
    setIsInit(init);
    console.log(init);
  }, [init]);

  return (
    isInit && (
      <Particles
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: "-10",
        }}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          particles: {
            color: {
              value: "#d9d9d9",
            },
            links: {
              enable: false,
            },
            move: {
              direction: "bottom-right",
              enable: true,
              random: false,
              speed: 6,
              straight: false,
            },
            number: {
              density: {
                enable: true,
              },
              value: 500,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    )
  );
}
