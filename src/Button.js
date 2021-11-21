import { useEffect } from "react/cjs/react.development";

export const Button = ({ onClick }) => {

  useEffect(() => {
    console.log('4 - button re-rendered');
  });

  useEffect(() => {
    console.log('5 - button onclick re-rendered');
  }, [onClick]);

  return <button onClick={onClick}>Add</button>;
};