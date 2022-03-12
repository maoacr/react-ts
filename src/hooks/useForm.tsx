import { ChangeEvent, useState } from "react";

//export function useForm<T>( initialState:T) {
export const useForm = <T extends Object>(initialState:T) => {
  const [formulario, setFormlario] = useState(initialState)

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormlario({
      ...formulario,
      [ name ]: value
    })
  }

  return{
    formulario,
    handleChange
  }
}