import {useState as useStateReact} from 'react';

function useState<T>(initialState: T) {
  const [value, set] = useStateReact(initialState);
  return {value, set};
}

export default useState;
