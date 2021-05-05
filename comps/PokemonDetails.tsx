import React, { useRef } from "react";
import PrinterWrapper from "./Print";
import TypeColor from "./TypeColor";

export interface Props {
  data: any;
}

export default function PokemonDetails({ data }: Props) {
  return (
    <>
      <PrinterWrapper list={false}>
        {data && (
          <div className="m-4 p-8 flex flex-col justify-center border border-gray-800 items-center">
            <div className="flex">
              <img
                src={data.sprites.front_default}
                alt=""
                className="p-2 w-40 h-40"
              />
              <img
                src={data.sprites.back_default}
                alt=""
                className="p-2 w-40 h-40"
              />
              <img
                src={data.sprites.front_shiny}
                alt=""
                className="p-2 w-40 h-40"
              />
              <img
                src={data.sprites.back_shiny}
                alt=""
                className="p-2 w-40 h-40"
              />
            </div>

            <div className="text-xl font-bold text-green-500 align-center">
              {data.name}
            </div>
            <div className="flex justify-center w-max">
              {data.types.map((type) => (
                <div
                  className="text-xm text-white p-2 mr-2 bg-gray-800 rounded"
                  style={TypeColor(type.type.name)}
                >
                  {type.type.name}
                </div>
              ))}
            </div>
            <div className="bg-orange-500">
              <p>Weight : {data.weight}</p>
            </div>
            <div className="bg-orange-500">
              <p>Height : {data.height}</p>
            </div>
            <div className="bg-orange-500">
              <p>
                Ability :{" "}
                {data.abilities
                  .map((ability) => ability.ability.name)
                  .join(", ")}
              </p>
            </div>

            <div className="">
              <div className="text-2xl font-bold text-red-800 mt-4">Status</div>
              {data.stats.map((stat) => (
                <div className="flex text-xl">
                  <p>{stat.stat.name} </p>
                  <p>: {stat.base_stat}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </PrinterWrapper>
    </>
  );
}
