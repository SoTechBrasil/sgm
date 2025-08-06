'use client';
import React from "react";
import Header from "@/components/Header/Header";

export default function Login(){
    return (
        <section>
            <Header styleHeader={"flex items-center justify-center bg-red-600"}>
                <h1 className="text-2xl font-bold">Sistema Administratvo - Login</h1>
            </Header>
        </section>
    )
}