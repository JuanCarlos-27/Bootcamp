"use client"
import './page.css';
import { FormEvent, useEffect, useState } from 'react';
import { useInputHook } from '../hooks/use-imput-hook';
import { getFromLocalStorage, saveIntoLocalStorage } from '../utils';


export default function Lab1() {
    const { value: fullNameValue, bind: fullNameBind, setValue: setFullName } = useInputHook('');
    const { value: emailValue, bind: emailBind, setValue: setEmail } = useInputHook('');
    const { value: usernameValue, bind: usernameBind, setValue: setUsername } = useInputHook('');
    const { value: passwordValue, bind: passwordBind, setValue: setPassword } = useInputHook('');

    const [isSubmit, setIsSubmit] = useState<boolean>(false);

    useEffect(() => {
        const savedInfo = getFromLocalStorage('data');
        if (savedInfo) {
            setFullName(savedInfo.fullName);
            setEmail(savedInfo.email);
            setUsername(savedInfo.username);
            setPassword(savedInfo.password);

            setIsSubmit(true);
        }
    }, [setFullName, setEmail, setUsername, setPassword])


    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsSubmit(true);
        saveIntoLocalStorage('data', {
            fullName: fullNameValue,
            email: emailValue,
            username: usernameValue,
            password: passwordValue
        })
    }
    return (
        <div>

            <form className="form" onSubmit={handleSubmit}>
                <input type="text" placeholder="Nombre y apellido" {...fullNameBind} />
                <input type="email" placeholder="Email" {...emailBind} />
                <input type="text" placeholder="Username" {...usernameBind} />
                <input type="password" placeholder="Password" {...passwordBind} />
                <button type='submit'>
                    Enviar
                </button>
            </form>

            {isSubmit &&
                <section className='data-section'>
                    <h2>Valores</h2>
                    <p>Nombre y apellido: {fullNameValue}</p>
                    <p>Email: {emailValue}</p>
                    <p>Username: {usernameValue}</p>
                    <p>Password: {passwordValue}</p>
                </section>
            }

        </div>

    )
}



