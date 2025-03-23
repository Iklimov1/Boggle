import React from "react";
import { Cube } from "./Cube";

export function Grid({ cubes }) {
  return (
    <div className="grid">
      {cubes.map((letters, index) => {
        return <Cube key={index} letters={letters} />;
      })}
    </div>
  );
}
