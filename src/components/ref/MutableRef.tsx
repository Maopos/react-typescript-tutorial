import { useState, useRef, useEffect } from "react";

const MutableRef = () => {
  // States
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
    }
  };

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);

  return (
    <div>
      <h3>Hook Timer: {timer}</h3>
      <button onClick={() => stopTimer()}>Stop Timer</button>
    </div>
  );
};

export default MutableRef;
