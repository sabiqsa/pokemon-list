import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";

import styles from "../styles/Home.module.css";

interface Props {}
interface State {}

export default class Navbar extends Component<Props, State> {
  state = {};

  render() {
    return (
      <div className="fixed top-0 mb-4 w-full bg-green-400 h-auto z-50">
        <div className="flex justify-between mx-10  ">
          {/* <Image width={128} height={60} src='/pokemon1.png'/> */}
          <Link href="/">
            <a className="text-white text-2xl text-bold p-2 hover:bg-red-400 rounded">
              Simple Pokemon List
            </a>
          </Link>
          <div className="flex justify-evenly items-center self-center">
            <Link href="/">
              <a className="mx-4 text-bold text-white text-xl px-2 hover:bg-red-400 rounded">
                List
              </a>
            </Link>
            <Link href="/about">
              <a className="mx-4 text-bold text-white text-xl px-2 hover:bg-red-400 rounded">
                About
              </a>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
