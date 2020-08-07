import React, { useState } from "react";

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  function transition(mode, replace = false) {
    let newHistory = [...history];
    
    //always setting mode to new mode
    if (replace) {
      
      //if replace is true, we want to remove the last item in the history and replace it with a new one
      newHistory = [
        ...newHistory.slice(0, newHistory.length - 1),
        mode];

    } else {
      newHistory = [...newHistory, mode];
    }
    setMode(mode);
    setHistory(newHistory);
  }
  function back() {
    //take in current history, remove the last mode, update history
    
    //if theres only one mode in history, no change
    if (history.length <= 1) {
      return;
    } else {
      
      let newHistory = [...history];
      //take in current history and remove last mode
      newHistory = history.slice(0, history.length - 1);
      //set mode with previous mode
      setMode(newHistory[newHistory.length - 1]);
      //set history with new history - last mode
      setHistory(newHistory);
    }
  }
  return { mode, transition, back };
}
