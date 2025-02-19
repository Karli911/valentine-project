import React from 'react';
import webp from "../src/assets/bear-kiss.webp";
import lovesvg from "./assets/Love In The Air SVG Cut File.svg";

const LoveMessage = () => (
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
    <img src={lovesvg}
      className="fixed animate-pulse top-10 md:left-24 left-6 md:w-40 w-28"
    />
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
);

export default LoveMessage;
