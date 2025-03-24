import { useEffect, useState } from "react";
export function useTimer({ isGameStarted, duration = 5 }) {
  const [counter, setCounter] = useState(duration);

  useEffect(() => {
    let timer;
    if (isGameStarted) {
      timer = setInterval(() => {
        setCounter((prevCounter) => {
          if (prevCounter <= 1) {
            clearInterval(timer);
            return 0;
          }
          return prevCounter - 1;
        });
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
