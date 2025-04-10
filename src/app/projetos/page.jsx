'use client'

import Head from "next/head";
import React from "react";
import { Header } from "../components/Header";

const projetos = [
    {
        nome: "Síntese Tech",
        url: "https://sintese.tech",
        descricao: "Site institucional focado em soluções tecnológicas.",
    },
    {
        nome: "MultiArena",
        url: "https://multiarena.com.br",
        descricao: "Plataforma para eventos e experiências imersivas.",
    },
];

export default function Projetos() {
    return (
        <div className="w-full min-h-screen bg-black text-white">
            <Head>
                <title>Projetos | Desenvolvendo com IA</title>
            </Head>

            <Header />

            <main className="px-6 py-10 max-w-8xl mx-auto">
                <div className="project justify-center py-3 my-5">
                    <div className="boxJect">P</div>
                    <div className="boxJect">R</div>
                    <div className="boxJect">O</div>
                    <div className="boxJect">J</div>
                    <div className="boxJect">E</div>
                    <div className="boxJect">T</div>
                    <div className="boxJect">O</div>
                    <div className="boxJect">S</div>
                </div>

                {/* Renderiza cada projeto empilhado */}
                {projetos.map((projeto, index) => (
                    <div
                        key={index}
                        className="mb-16 border border-neon-purple rounded-2xl shadow-neon overflow-hidden"
                    >
                        <iframe
                            src={projeto.url}
                            className="w-full h-[500px] border-none"
                            loading="lazy"
                        />
                        <div className="p-4 bg-gradient-to-r from-purple-900 to-black">
                            <h2 className="text-2xl font-semibold mb-1">
                                {projeto.nome}
                            </h2>
                            <p className="text-purple-300">{projeto.descricao}</p>
                        </div>
                    </div>
                ))}
            </main>
        </div>
    );
}
