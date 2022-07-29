import React from "react";
import { useMediaQuery } from "react-responsive";
import Particles from "react-tsparticles";
import Typewriter from "typewriter-effect";
import { loadFull } from "tsparticles";

function Type() {
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });

  const particlesInit = async (main) => {
    console.log(main);
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (
    <div
      style={{
        textAlign: "center",
        display: "flex",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      {isMobile && (
        <>
          <Particles
            id="tsparticles"
            init={particlesInit}
            loaded={particlesLoaded}
            options={{
              background: {
                color: "#212121",
              },
              detectRetina: false,
              fpsLimit: 60,
              interactivity: {
                detectsOn: "canvas",
                events: {
                  onHover: {
                    enable: true,
                    mode: "bubble",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 40,
                    duration: 2,
                    opacity: 8,
                    size: 6,
                    speed: 3,
                  },
                },
              },
              particles: {
                color: {
                  value: "#ff0000",
                  animation: {
                    enable: true,
                    speed: 20,
                    sync: true,
                  },
                },
                lineLinked: {
                  blink: false,
                  color: "random",
                  consent: false,
                  distance: 30,
                  enable: true,
                  opacity: 0.3,
                  width: 0.5,
                },
                move: {
                  attract: {
                    enable: false,
                    rotate: {
                      x: 600,
                      y: 1200,
                    },
                  },
                  bounce: false,
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: true,
                  speed: 0.5,
                  straight: false,
                },
                number: {
                  density: {
                    enable: false,
                    area: 2000,
                  },
                  limit: 0,
                  value: 200,
                },
                opacity: {
                  animation: {
                    enable: true,
                    minimumValue: 0.05,
                    speed: 2,
                    sync: false,
                  },
                  random: false,
                  value: 1,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  animation: {
                    enable: false,
                    minimumValue: 0.1,
                    speed: 40,
                    sync: false,
                  },
                  random: true,
                  value: 1,
                },
              },
              polygon: {
                enable: true,
                draw: {
                  enable: true,
                  lineColor: "rgba(255,255,255,0.2)",
                  lineWidth: 0.3,
                },
                move: {
                  radius: 10,
                },
                inlineArrangement: "equidistant",
                scale: 0.5,
                type: "inline",
                url: "https://particles.js.org/images/smalldeer.svg",
              },
            }}
          />
          <div
            style={{
              position: "absolute",
              fontSize: "2rem",
              fontFamily: "Chewy",
            }}
          >
            <Typewriter
              onInit={(type) => {
                type
                  .typeString(
                    '<span style="color: #fafafa;font-family: "Rubik Moonrocks";" >...</span>'
                  )
                  .pauseFor(3000)
                  .deleteChars(3)
                  .typeString(
                    '<span style="color: #fafafa;font-family: "Anton";">Hello Ms Reza zade</span>'
                  )
                  .pauseFor(1000)
                  .typeString(
                    '<span style="color: #fafafa; font-family: "Anton";"> Oh Sorry -_-</span>'
                  )
                  .pauseFor(1000)
                  .deleteChars(18)
                  .pauseFor(500)
                  .typeString(
                    '<span style="color: #fafafa;font-family: "Anton";">zade</span>'
                  )
                  .pauseFor(1000)
                  .typeString(
                    '<span style="color: #fafafa;font-family: "Anton";"> :) </span>'
                  )
                  .pauseFor(48500)
                  .deleteAll()
                  .start();
              }}
              options={{ loop: false }}
            ></Typewriter>
          </div>

          <div
            style={{
              position: "absolute",
              fontSize: "2rem",
              marginTop: "3rem",
              fontFamily: "Chewy",
            }}
          >
            <Typewriter
              onInit={(type) => {
                type
                  .pauseFor(20000)
                  .typeString(
                    '<span style="color: #fafafa;"> How You doing ?! </span>'
                  )
                  .pauseFor(43500)
                  .deleteAll()
                  .start();
              }}
              options={{ loop: false, autoStart: false }}
            ></Typewriter>
          </div>
          <div
            style={{
              position: "absolute",
              fontSize: "2rem",
              marginTop: "6rem",
              fontFamily: "Chewy",
            }}
          >
            <Typewriter
              onInit={(type) => {
                type
                  .pauseFor(25000)
                  .typeString(
                    '<span style="color: #fafafa;"> (: SUPERSIZE :) </span>'
                  )
                  .pauseFor(39000)
                  .deleteAll()
                  .start();
              }}
              options={{ loop: false, autoStart: false }}
            ></Typewriter>
          </div>
          <div
            style={{
              position: "absolute",
              fontSize: "2rem",
              marginTop: "9rem",
              fontFamily: "Chewy",
            }}
          >
            <Typewriter
              onInit={(type) => {
                type
                  .pauseFor(31000)
                  .typeString(
                    '<span style="color: #fafafa;"> You are the best girl i ever seen </span>'
                  )
                  .pauseFor(29500)
                  .deleteAll()
                  .start();
              }}
              options={{ loop: false, autoStart: false }}
            ></Typewriter>
          </div>
          <div
            style={{
              position: "absolute",
              fontSize: "2rem",
              marginTop: "12rem",
              fontFamily: "Chewy",
            }}
          >
            <Typewriter
              onInit={(type) => {
                type
                  .pauseFor(38000)
                  .typeString(
                    '<span style="color: #fafafa;"> You are gorgeous , eyeful  and your eyes is marveles and I can not take my eyes off it :] </span>'
                  )
                  .pauseFor(11500)
                  .deleteAll()
                  .start();
              }}
              options={{ loop: false, autoStart: false }}
            ></Typewriter>
          </div>
          <div
            style={{
              position: "absolute",
              fontSize: "2rem",
              marginTop: "16.5rem",
              fontFamily: "Chewy",
            }}
          >
            <Typewriter
              onInit={(type) => {
                type
                  .pauseFor(76000)
                  .typeString(
                    '<span style="color: #fafafa;"> I LOVE YOU :) </span>'
                  )
                  .start();
              }}
              options={{ loop: false, autoStart: false }}
            ></Typewriter>
          </div>
          <div
            style={{
              position: "absolute",
              fontSize: "2rem",
              marginTop: "21rem",
              fontFamily: "Chewy",
            }}
          >
            <Typewriter
              onInit={(type) => {
                type
                  .pauseFor(54000)
                  .typeString(
                    '<span style="color: #fafafa;"> I wana say the three amazing word here </span>'
                  )
                  .pauseFor(6000)
                  .deleteAll()
                  .start();
              }}
              options={{ loop: false, autoStart: false }}
            ></Typewriter>
          </div>
          <div
            style={{
              position: "absolute",
              fontSize: "2rem",
              marginTop: "27rem",
              fontFamily: "Chewy",
            }}
          >
            <Typewriter
              onInit={(type) => {
                type
                  .pauseFor(62000)
                  .typeString(
                    '<span style="color: #fafafa;">Are you ready?</span>'
                  )
                  .pauseFor(2500)
                  .deleteAll()
                  .start();
              }}
              options={{ loop: false, autoStart: false }}
            ></Typewriter>
          </div>

          <div
            style={{
              position: "absolute",
              fontSize: "2rem",
              marginTop: "30rem",
              fontFamily: "Chewy",
            }}
          >
            <Typewriter
              onInit={(type) => {
                type
                  .pauseFor(65000)
                  .typeString(
                    '<span style="color: #fafafa;">:) :) :) :) :)</span>'
                  )
                  .deleteAll()
                  .start();
              }}
              options={{ loop: false, autoStart: false }}
            ></Typewriter>
          </div>
        </>
      )}
    </div>
  );
}

export default Type;
