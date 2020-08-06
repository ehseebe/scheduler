export default function useVisualMode(initial) {
  const [mode, setMode] = useState(initial);
  const [history, setHistory] = useState([initial]);

  //add ti stack (push)
  //state.elements = [...state.elements, el]

  //remove (pop)
  //state.elements = state.elements.slice(0, state.elements.length -1)

  //replace the last element 
  //state.elements = [...state.elements.slice(0, state.elements.length -1), el]

  function transition(mode, replace = false) {
     /* ... */ }
  function back() { /* ... */ }

  return { mode, transition, back };
};
