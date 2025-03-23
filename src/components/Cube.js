import { useMemo } from "react";

export function Cube({ letters }) {
  const letter = useMemo(
    () => letters[Math.floor(Math.random() * letters.length)],
    [letters]
  );

  return <div className="cube">{letter}</div>;
}
