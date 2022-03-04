import { useState, useEffect, useRef } from 'react';

type TimerArgs = {
  milisegundos: number
}

export const Timer = ({ milisegundos }: TimerArgs) => {

  console.log(milisegundos)

  const [seconds, setSeconds] = useState(0);
  const ref = useRef<NodeJS.Timeout>();

  useEffect(() => {
    ref.current && clearInterval( ref.current );
    ref.current = setInterval( () => setSeconds( s => s + 1), milisegundos);
  }, [milisegundos])

  
  return (
    <>
      <h4>Timer: <small>{seconds}</small></h4>
    </>
  )
}
