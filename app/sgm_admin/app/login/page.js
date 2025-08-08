'use client';
import React from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header/Header";
import Container from "@/components/Container/Container";
import login from "@/api/login";

export default function Login(){
    const [dadosLogin, setDadosLogin] = React.useState({ email: "", senha: "" });
    const router = useRouter();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDadosLogin((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(dadosLogin);

        if(!dadosLogin.email || !dadosLogin.senha) {
            alert("Por favor, preencha todos os campos.");
            return;
        } else {
            const execLogin = async () => {
                try {
                    const response = await login(dadosLogin);
                    console.log('Login realizado com sucesso:', response);
                    response.sucess && router.push('/admin');
                } catch (error) {
                    console.error('Erro ao fazer login:', error);
                }
            };
            execLogin();
        }
    }

    return (
        <section className="flex flex-col items-center">
            <Header styleHeader={"flex items-center justify-center bg-red-600"}>
                <h1 className="text-2xl font-bold">Sistema Administratvo - Login</h1>
            </Header>
            <Container styleContainer={"flex justify-center items-center flex-col min-w-[400px] max-w-[1280px] w-full h-[calc(100vh-70px)]"}>
                <form className="flex flex-col justify-center items-left w-[50%] p-4 border border-black rounded-md text-black">
                    <label for="email">Digite o seu e-mail de admin:</label>
                    <input type="email" className="w-full bg-blue text-black placeholder:text-black pl-2 mt-2 mb-2 border-black border rounded-md" name="email" required onChange={handleChange} placeholder="Digite seu e-mail aqui!"/>
                    <label for="senha">Digite sua senha de admin:</label>
                    <input type="password" className="w-full bg-blue text-black placeholder:text-black pl-2 mt-2 border-black border rounded-md" name="senha" min={6} max={100} required onChange={handleChange} placeholder="Digite sua senha!"/>
                    <button onClick={handleSubmit} type="submit" className="w-[40%] min-w-[100px] h-10 bg-red-500 mt-4 m-auto rounded-md hover:bg-red-700 duration-[800ms] text-white font-semibold text-[1.4rem]">Entrar</button>
                </form>
            </Container>
        </section>
    )
}