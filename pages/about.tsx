import React from "react";

interface Props {}

const About = (props: Props) => {
  return (
    <div className="mt-16 flex justify-center m-4 border">
      <div className="flex flex-col justify-center items-center p-4">
        Simple Pokemon List
        <div>This web using react ts, next and tailwind css</div>
        <p>
          Some API pokemon details doesn't exist, check on
          <a className="text-blue-400" href="https://pokeapi.co/">
            {" "}
            https://pokeapi.co/
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
