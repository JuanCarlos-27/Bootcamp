// Ejercicio 1: Actualización del título de la página
// Objetivo: Actualizar el título de la página de manera dinámica cada vez que cambie un estado.

// Crea una página en Next.js que contenga un estado count.
// Cada vez que el valor de count cambie, usa useEffect para actualizar el título del documento con el nuevo valor de count.
// Pasos:

// Crea un estado inicial count con el valor 0.
// Usa useEffect para actualizar document.title con el valor de count cada vez que este cambie.

'use client';
import { useEffect, useState } from "react";

export default function Lab1() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div className="m-auto mt-5 max-w-2xl flex flex-col items-center">
      <h1>Count: {count}</h1>
      <footer className="flex gap-3">

        <button className="p-4 px-5 bg-slate-200 text-black border rounded-2xl" onClick={() => setCount(count + 1)}>Increment</button>
        <button className="p-4 px-5 bg-slate-200 text-black border rounded-2xl" onClick={() => setCount(count - 1)}>Decrement</button>
      </footer>
    </div>
  );
}