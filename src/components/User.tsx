import { useState } from "react";
import App from '../App';

interface User {
  uid: string;
  name: string;
}

const tempUser: User = {
  uid: 'Usuario temporal',
  name: 'Nombre del usuariuo temporal'

}

export const User = () => {

  const [user, setUser] = useState<User>( tempUser );
  
  const login = () => {
    setUser({
      uid: 'USERID2626',
      name: 'Mario Crespo'
    })
  };

  return (
    <div>
      <h3>User</h3>
      <button
        onClick={ login }
        className="btn btn-outline-primary">
        Login
      </button>

    {
      (!user)
        ? <pre>No existe ningun usuario </pre>
        : <pre> {JSON.stringify( user )}</pre>
    }

    </div>
  )
}
