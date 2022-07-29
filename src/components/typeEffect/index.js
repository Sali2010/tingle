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
                color: "#000000",
              },
              interactivity: {
                events: {
                  onClick: {
                    enable: true,
                    mode: "push",
                  },
                  onHover: {
                    enable: true,
                    mode: "repulse",
                  },
                  resize: true,
                },
                modes: {
                  bubble: {
                    distance: 400,
                    duration: 2,
                    opacity: 0.8,
                    size: 40,
                  },
                  push: {
                    quantity: 4,
                  },
                  repulse: {
                    distance: 200,
                    duration: 0.4,
                  },
                },
              },
              particles: {
                color: {
                  value: "#00EF43",
                },
                links: {
                  color: "#00EF43",
                  distance: 150,
                  enable: true,
                  opacity: 0.5,
                  width: 1,
                },
              
                move: {
                  direction: "none",
                  enable: true,
                  outMode: "bounce",
                  random: false,
                  speed: 6,
                  straight: false,
                },
                number: {
                  density: {
                    enable: true,
                    value_area: 800,
                  },
                  value: 80,
                },
                opacity: {
                  value: 0.5,
                },
                shape: {
                  type: "circle",
                },
                size: {
                  random: true,
                  value: 5,
                },
              }}}
          />
          <div
            style={{
              position: "absolute",
              fontSize: "1.5rem",
              fontFamily: "Chewy",
            }}
          >
            <Typewriter
              onInit={(type) => {
                type
                  .typeString(
                    '<span style="color: #fafafa;font-family: "Rubik Moonrocks";" >...</span>'
                  )
                  .pauseFor(2000)
                  .deleteChars(3)
                  .typeString(
                    '<span style="color: #fafafa;font-family: "Anton";">Hello Ms Reza zade</span>'
                  )
                  .pauseFor(500)
                  .typeString(
                    '<span style="color: #fafafa; font-family: "Anton";"> Oh Sorry -_-</span>'
                  )
                  .pauseFor(500)
                  .deleteChars(18)
                  .pauseFor(500)
                  .typeString(
                    '<span style="color: #fafafa;font-family: "Anton";">zade</span>'
                  )
                  .pauseFor(500)
                  .typeString(
                    '<span style="color: #fafafa;font-family: "Anton";"> :) </span>'
                  )
                  .pauseFor(36500)
                  .deleteAll()
                  .start();
              }}
              options={{ loop: false }}
            ></Typewriter>
          </div>

          <div
            style={{
              position: "absolute",
              fontSize: "1.5rem",
              marginTop: "3rem",
              fontFamily: "Chewy",
            }}
          >
            <Typewriter
              onInit={(type) => {
                type
                  .pauseFor(14000)
                  .typeString(
                    '<span style="color: #fafafa;"> How You doing ?! </span>'
                  )
                  .pauseFor(35500)
                  .deleteAll()
                  .start();
              }}
              options={{ loop: false, autoStart: false }}
            ></Typewriter>
          </div>
          <div
            style={{
              position: "absolute",
              fontSize: "1.5rem",
              marginTop: "6rem",
              fontFamily: "Chewy",
            }}
          >
            <Typewriter
              onInit={(type) => {
                type
                  .pauseFor(18000)
                  .typeString(
                    '<span style="color: #fafafa;"> (: SUPERSIZE :) </span>'
                  )
                  .pauseFor(32000)
                  .deleteAll()
                  .start();
              }}
              options={{ loop: false, autoStart: false }}
            ></Typewriter>
          </div>
          <div
            style={{
              position: "absolute",
              fontSize: "1.5rem",
              marginTop: "9rem",
              fontFamily: "Chewy",
            }}
          >
            <Typewriter
              onInit={(type) => {
                type
                  .pauseFor(21000)
                  .typeString(
                    '<span style="color: #fafafa;"> You are the best girl i ever seen </span>'
                  )
                  .pauseFor(25500)
                  .deleteAll()
                  .start();
              }}
              options={{ loop: false, autoStart: false }}
            ></Typewriter>
          </div>
          <div
            style={{
              position: "absolute",
              fontSize: "1.5rem",
              marginTop: "12rem",
              fontFamily: "Chewy",
            }}
          >
            <Typewriter
              onInit={(type) => {
                type
                  .pauseFor(27500)
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
                  .pauseFor(59000)
                  .typeString(
                    '<span style="color: #fafafa;"> I LOVE YOU :) </span>'
                  )
                  .start();
              }}
              options={{ loop: false, autoStart: false ,delay:250 }}
            ></Typewriter>
          </div>
          <div
            style={{
              position: "absolute",
              fontSize: "1.5rem",
              marginTop: "21rem",
              fontFamily: "Chewy",
            }}
          >
            <Typewriter
              onInit={(type) => {
                type
                  .pauseFor(41000)
                  .typeString(
                    '<span style="color: #fafafa;"> I wana say the three amazing word here </span>'
                  )
                  .pauseFor(5500)
                  .deleteAll()
                  .start();
              }}
              options={{ loop: false, autoStart: false }}
            ></Typewriter>
          </div>
          <div
            style={{
              position: "absolute",
              fontSize: "1.5rem",
              marginTop: "27rem",
              fontFamily: "Chewy",
            }}
          >
            <Typewriter
              onInit={(type) => {
                type
                  .pauseFor(47500)
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
              fontSize: "1.5rem",
              marginTop: "30rem",
              fontFamily: "Chewy",
            }}
          >
            <Typewriter
              onInit={(type) => {
                type
                  .pauseFor(50000)
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
