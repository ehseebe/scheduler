import { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace = false) {
    let newHistory = [...history];

    if (replace) {
      newHistory = [...newHistory.slice(0, newHistory.length - 1), mode];
    } else {
      newHistory = [...newHistory, mode];
    }
    setMode(mode);
    setHistory(newHistory);
  }

  function back() {
    if (history.length <= 1) {
      return;
    } else {
      let newHistory = [...history];
      newHistory = history.slice(0, history.length - 1);
      setMode(newHistory[newHistory.length - 1]);
      setHistory(newHistory);
    }
  }

  return { mode, transition, back };
}
