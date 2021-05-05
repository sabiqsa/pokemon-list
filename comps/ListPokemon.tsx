import React, { useRef } from "react";
import Link from "next/link";
import TypeColor from "./TypeColor";
import PrinterWrapper from "./Print";

export const ListPokemon = ({ data }: { data: any }) => {
  const componentRef = useRef();
  return (
    <>
      <div className="container grid grid-cols-3 gap-4 my-6 mx-auto px-4 md: px-0">
        {data.length > 0 &&
          data.map((dataPokemon, idx) => {
            return (
              <div className="flex flex-wrap mx-1 lg:-mx-4">
                <div className="column my-1 px-1 w-full md:w-2/2 lg:my-4 lg:px-4 lg:w-full">
                  <div className="imagecontainer overflow-hidden rounded-lg shadow-lg w-full">
                    <PrinterWrapper list={true}>
                      <Link href={`/pokemon/${dataPokemon.name}`}>
                        <a>
                          <img
                            alt="Placeholder"
                            className="block h-auto w-full"
                            src={dataPokemon.sprites.front_default}
                          />
                        </a>
                      </Link>

                      <div className="flex items-center justify-center leading-tight p-2 md:p-4">
                        <div className="flex justify-center w-max">
                          {dataPokemon.types.map((type) => (
                            <div
                              className="text-xm text-white p-2 mr-2 bg-gray-800 rounded"
                              style={TypeColor(type.type.name)}
                            >
                              {type.type.name}
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex items-center justify-start leading-none p-2 md:p-4">
                        <a className="flex items-center no-underline hover:underline text-black">
                          <img
                            alt="Placeholder"
                            className="block rounded-full"
                            src={dataPokemon.sprites.front_default}
                          />
                          <Link href={`/pokemon/${dataPokemon.name}`}>
                            <a className="ml-2 text-xl text-bold">
                              {dataPokemon.name}
                            </a>
                          </Link>
                        </a>
                      </div>
                    </PrinterWrapper>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
