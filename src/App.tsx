"use client";
import { useState } from "react";
import webp from "../src/assets/bear-kiss.webp";
import webp2 from "../src/assets/bear-rose.webp";

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
    <div className="flex min-h-screen flex-col items-center justify-center text-center">
      {yesPressed ? (
        <>
          <img src={webp} alt="kiss" loading="eager" />
          <div className="my-4 text-xl font-bold">
            WOOOOOO!!! I love you pookie!! ;))
          </div>
          <div className="my-1 text-lg italic">
            Well to start things off, it's been an amazing time.
          </div>
          <div className="my-1 text-lg italic">
            This year has been fun, lovely, memorable, and a bit less stressful,
            just because of your presence alone.
          </div>
          <div className="my-1 text-lg italic">
            I know sometimes I'm stressful and annoying, and I want to thank you
            for always putting up with me and taking care of me.
          </div>
          <div className="my-1 text-lg italic">
            I asked in the only way I could—by programming. Took me around
            26hrs: 57min: 25sec to finish this, according to my computer xD.
          </div>
          <div className="my-1 text-lg italic">
            To wrap things up, I love you and want to spend as many years as
            possible by your side. If I die first, I'll be waiting for you on
            the other side. ❤️
          </div>
        </>
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
    </div>
  );
}

