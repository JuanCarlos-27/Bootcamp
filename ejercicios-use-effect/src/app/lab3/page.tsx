// Ejercicio 3: Temporizador con useEffect
// Objetivo: Crear un temporizador que aumente cada segundo usando setInterval.

// Crea un estado time que represente los segundos que han pasado desde que se montó el componente.
// Usa useEffect para crear un temporizador que actualice el estado time cada segundo.
// Limpia el intervalo cuando el componente se desmonte.
// Pasos:

// Usa setInterval para actualizar el tiempo.
// Asegúrate de limpiar el intervalo cuando el componente se desmonte.

'use client';
import { useEffect, useState } from "react";

export default function Lab3() {
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(time => time + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="m-auto mt-5 max-w-2xl flex flex-col items-center">
      <h1 className="text-6xl font-bold">Time: {time}</h1>
    </div>
  );
}