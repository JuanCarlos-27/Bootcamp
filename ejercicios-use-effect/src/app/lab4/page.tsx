// Ejercicio 4: Desactivar efecto condicionalmente
// Objetivo: Practicar cómo desactivar o no ejecutar un efecto secundario si se cumple una condición.

// Crea un estado isFetching que controle si se debe hacer una solicitud a una API.
// Usa useEffect para hacer una solicitud a la API solo cuando isFetching sea true.
// Pasos:

// Usa useEffect condicionalmente según el estado isFetching.


'use client';
import { useState, useEffect } from 'react';


export default function Lab4() {
  const [isFetching, setIsFetching] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!isFetching) return;

    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setIsFetching(false);
      }
    };

    fetchData();
  }, [isFetching]);

  return (
    <div>
      <button className="p-4 px-5 bg-slate-200 text-black border rounded-2xl" onClick={() => setIsFetching(true)}>Fetch Data</button>
      {data && <div>{JSON.stringify(data)}</div>}
    </div>
  );
};

