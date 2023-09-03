import { useState } from "react";

const [elapsedSeconds, setElapsedSeconds] = useState(0);
const timerRef = useRef();

useEffect(function() {
  timerRef.current = setInterval(function() {
    // Using a "functional update" is better if computing 
    // the new state value from the current state value
    // https://reactjs.org/docs/hooks-reference.html#functional-updates
    setElapsedSeconds((secs) => secs + 1);
  }, 1000);
  // Return the cleanup component
  return function() {
    clearInterval(timerRef.current);
  };
}, []);