"use client";
import { useState } from "react";
import webp from "../src/assets/bear-kiss.webp";
import webp2 from "../src/assets/bear-rose.webp";
import lovesvg from "./assets/Love In The Air SVG Cut File.svg";
import LoveMessage from './LoveMessage';
import Footer from './Footer';

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = Math.min(noCount * 20 + 16, 50); // Prevents excessive growth

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = (): string => {
    const phrases: string[] = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a cheesecake on top?",
      "Lushnjare drreqi",
      "But :*(",
      "PLEASE POOKIE",
      "I am going to die",
      "Yep, I'm dead",
      "ok ur talking to arli's ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "Estoy muerto",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center">
      {yesPressed ? (
        <LoveMessage />
      ) : (
        <>
          <img className="h-[200px]" src={webp2} alt="rose" loading="eager" />
          <h1 className="my-4 text-4xl font-bold">
            Sarush, will you be my Valentine?
          </h1>
          <h2 className="text-2xl">pls don't be mean :(</h2>
          <div className="flex items-center justify-center gap-4 mt-4">
            <button
              className="rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700 transition-all"
              style={{ fontSize: yesButtonSize, minWidth: "120px" }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className="rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700 transition-all"
              style={{ minWidth: "120px" }}
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

