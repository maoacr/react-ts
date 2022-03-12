//import { ChangeEvent, useState } from "react"
import { useForm } from '../hooks/useForm';

interface FormData {
  nombre: string;
  email: string;
  edad: number
}

export const Formulario = () => {

  const { formulario, handleChange } = useForm<FormData>({
    email: 'maoacr@gmail.com',
    nombre : 'Mario Crespo',
    edad: 28
  });
  
  const { email, nombre, edad } = formulario;
  /*const [formulario, setFormlario] = useState({
    email: '',
    nombre : ''
  })

  const handleChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = target;
    setFormlario({
      ...formulario,
      [ name ]: value
    })
  }*/

  return (
    <form autoComplete="off">
      <div className="mb-3">
        <label className="form-label">Email:</label>
        <input 
          type="email" 
          className="form-control" 
          name="email"
          value={email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Nombre:</label>
        <input 
          type="text" 
          className="form-control" 
          name="nombre"
          value={nombre}
          onChange={handleChange} 
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Edad:</label>
        <input 
          type="number" 
          className="form-control" 
          name="edad"
          value={edad}
          onChange={handleChange} 
        />
      </div>

      <pre>{ JSON.stringify( formulario )}</pre>
    </form>
  )
}
