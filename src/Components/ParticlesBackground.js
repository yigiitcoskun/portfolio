import React from 'react';
import { Engine, Particles } from 'tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  const particlesLoaded = (container) => {};

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "#b5949426",
          },
        },
        particles: {
          number: {
            value: 50,
          },
          size: {
            value: { min: 1, max: 3 },
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            outModes: {
              default: "out",
            },
          },
          opacity: {
            value: 0.5,
            random: true,
          },
          shape: {
            type: "circle",
          },
        },
      }}
    />
  );
};

export default ParticlesBackground;
