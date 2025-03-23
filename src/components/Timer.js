import { useEffect, useState } from "react";
export function useTimer({ isGameStarted, duration = 90 }) {
  const [counter, setCounter] = useState(duration);

  useEffect(() => {
    let timer;
    if (isGameStarted) {
      timer = setInterval(() => {
        setCounter((prevCounter) => prevCounter - 1);
      }, 1000);
    } else {
      setCounter(duration);
    }
    return () => clearInterval(timer);
  }, [isGameStarted]);
  const Timer = (
    <div>
      <div>Countdown: {counter}</div>
    </div>
  );

  return { Timer, counter };
}
