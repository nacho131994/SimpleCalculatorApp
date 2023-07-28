import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Screen = () => {
  const { calc } = useContext(AppContext);

  const renderFontSize = () => {
    const baseSize = 48;
    const numLen = calc.num.toString().length;
    const pixels =
      baseSize - parseInt(Math.ceil(Math.max(numLen - 11, 0)) / 3) * 8;
    return pixels.toString() + "px";
  };

  return (
    <>
      <div className={"screen"} style={{ fontSize: renderFontSize() }}>
        {calc.num ? calc.num : calc.res}
      </div>
    </>
  );
};

export default Screen;
