// Ejercicio 2: Consumiendo una API con useEffect
// Objetivo: Hacer una solicitud a una API externa cuando se cargue el componente y mostrar los datos en pantalla.

// Crea un estado data para almacenar los resultados de la API.
// Usa useEffect para hacer una llamada fetch a una API (por ejemplo, a la API de usuarios de JSONPlaceholder: https://jsonplaceholder.typicode.com/users).
// Muestra los datos en la página.
// Pasos:

// Usa fetch para obtener datos y almacenarlos en el estado data.
// Maneja el estado de carga y posibles errores.

'use client';
import { useEffect, useState } from "react";

export default function Lab2() {
  const [data, setData] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setData(data))
      .catch(error => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className="m-auto mt-5 max-w-2xl flex flex-col items-center">
      <h1>Users</h1>
      <ul>
        {data.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
}


export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

export interface Geo {
  lat: string;
  lng: string;
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}
