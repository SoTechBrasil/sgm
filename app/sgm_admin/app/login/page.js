'use client';
import React from "react";
import Header from "@/components/Header/Header";
import Container from "@/components/Container/Container";

export default function Login(){
    return (
        <section className="flex flex-col items-center">
            <Header styleHeader={"flex items-center justify-center bg-red-600"}>
                <h1 className="text-2xl font-bold">Sistema Administratvo - Login</h1>
            </Header>
            <Container styleContainer={"flex justify-center items-center flex-col min-w-[400px] max-w-[1280px] w-full h-[calc(100vh-70px)]"}>
                <form className="flex flex-col justify-center items-left w-[50%] p-4 border border-black rounded-md text-black">
                    <label for="email">Digite o seu e-mail de admin:</label>
                    <input type="email" className="w-full bg-blue text-black placeholder:text-black pl-2 mt-2 mb-2 border-black border rounded-md" name="emal" required placeholder="Digite seu e-mail aqui!"/>
                    <label for="senha">Digite sua senha de admin:</label>
                    <input type="password" className="w-full bg-blue text-black placeholder:text-black pl-2 mt-2 border-black border rounded-md" name="senha" required placeholder="Digite sua senha!"/>
                    <button type="submit" className="w-[40%] min-w-[100px] h-10 bg-red-500 mt-4 m-auto rounded-md hover:bg-red-700 duration-[800ms] text-white font-semibold text-[1.4rem]">Entrar</button>
                </form>
            </Container>
        </section>
    )
}