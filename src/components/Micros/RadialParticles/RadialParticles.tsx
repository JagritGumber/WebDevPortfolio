import Particles from "@tsparticles/react";

export default function RadialParticles() {
  return (
    <Particles
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: -1,
      }}
      options={{
        replicator: {
          spawnColor: {
            value: "#121212",
          },
          spawnOpacity: {
            value: 1,
          },
          spawnSize: {
            value: 10,
          },
          spawnShape: "circle",
          spawnAngle: {
            value: 360,
          },
          spawnSpeed: {
            value: 5,
          },
          spawnCount: {
            value: 10,
          },
          spawnRate: {
            value: 10,
          },
        },
        move: {
          enable: true,
          speed: {
            value: 5,
          },
          direction: "none",
          random: true,
        },
        destroy: {
          enable: true,
          mode: "size",
          size: {
            value: 0,
          },
        },
      }}
    />
  );
}
