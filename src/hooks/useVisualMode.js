import React, { useState } from 'react';

export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  //add to stack (push)
  //state.elements = [...state.elements, el]

  //remove (pop)
  //state.elements = state.elements.slice(0, state.elements.length -1)

  //replace the last element 
  //state.elements = [...state.elements.slice(0, state.elements.length -1), el]

  function transition(mode, replace = false) {
    let newHistory = [...history];
    //always setting mode to new mode
    if (replace) {
      //if replace is true, we want to remove the last item in the history and replace it with a new one
      newHistory = [...newHistory.slice(0, newHistory.initial.length -1), mode];
    } else {
      newHistory = [...newHistory, mode];
    }
    //mode is the place im visiting now, and setMode is setting it as my current place
    //history is the history of places that ive visited
    setMode(mode);
    setHistory(newHistory);

    }
  function back() { 
    //take in current history, remove the last thing, new history is updated 
    //set mode to new last thing, new mode is second
    let newHistory = [...history]
//if theres only one mode in history, no change
    if (history.length <= 1){
      return;
    } else {
//take in current history and remove last mode
newHistory = history.slice(0, history.length -1)
//and set mode with it
setMode(newHistory[newHistory.length -1])
//set history with new history
setHistory(newHistory)

console.log(history)
console.log(newHistory[newHistory.length -1])
console.log(mode)
    }
    
    /* ... 
  history = list of modes
  mode = mode, and will match the last thing
  history array -1 to get the last thing, and then set the mode with that
  */ }

  return { mode, transition, back };
};
