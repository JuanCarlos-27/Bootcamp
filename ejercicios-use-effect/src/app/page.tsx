import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <ul>
        <li>
          <Link href='/lab1' >Ejercicio 1: Cambiar titulo</Link>
        </li>
        <li>
          <Link href='/lab2' >Ejercicio 2: Consumiendo una API</Link>
        </li>
        <li>
          <Link href='/lab3' >Ejercicio 3: Temporizador</Link>
        </li>
        <li>
          <Link href='/lab4' >Ejercicio 4: Desactivar efecto condicionalmente</Link>
        </li>
      </ul>
    </div>
  );
}
