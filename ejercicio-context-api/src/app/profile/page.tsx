"use client";

import { UserContext } from "@/context/crear-user.provider";
import { useContext } from "react";

export default function ProfilePage() {
    const { user } = useContext(UserContext);
    return (
        <section className="container">
            <h1 className="text-2xl">
                Bienvenido <strong>{user?.name}</strong>
            </h1>
            <p>
                Tu nombre de usuario es <strong>{user?.username}</strong>
            </p>
            <p>
                Tu correo electrónico es <strong>{user?.email}</strong>
            </p>
        </section>
    )
}