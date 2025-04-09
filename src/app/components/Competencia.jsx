"use client"

import React from "react"

export function Competencia() {
    return (
        <section className="w-full h-auto bg-[url('/bg2.jpg')] bg-cover bg-center pb-10">
            <div className="w-full colorP">
                <h1 className="font-bold text-3xl py-2 text-white text-center mb-8">Minhas competências</h1>
            </div>
            <div className="flex flex-wrap gap-6 justify-center px-4">
                {cards.map((card, index) => (
                    <div key={index} className="card3 w-[140px] sm:w-[160px] md:w-[180px]">
                        <div className="card3-inner">
                            <div className="card3-front flex flex-col items-center justify-center p-4 gap-2">
                                <img src={card.img} alt={card.title} className="w-12 sm:w-14 md:w-16" />
                                <p className="font-extrabold text-center text-sm sm:text-base">{card.title}</p>
                            </div>
                            <div className="card3-back flex items-center justify-center p-4">
                                <p className="text-center font-semibold text-xs sm:text-2xl">{card.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

const cards = [
    {
        img: "/icon1.png",
        title: "HTML",
        description: "Linguagem de marcação usada para estruturar o conteúdo de páginas web",
    },
    {
        img: "/icon2.png",
        title: "CSS",
        description: "Linguagem de estilo usada para definir cores, layouts, fontes e aparência de páginas web",
    },
    {
        img: "/icon6.png",
        title: "Javascript",
        description: "Linguagem de programação que adiciona interatividade e dinamismo aos sites",
    },
    {
        img: "/icon7.png",
        title: "Typescript",
        description: "Superset do JavaScript que adiciona tipagem estática e ajuda a evitar erros no código",
    },
    {
        img: "/icon3.png",
        title: "React",
        description: "Biblioteca JavaScript para criar interfaces de usuário de forma modular e reativa",
    },
    {
        img: "/icon9.png",
        title: "SQLserver",
        description: "Sistema de gerenciamento de banco de dados relacional desenvolvido pela Microsoft",
    },
    {
        img: "/icon10.png",
        title: "Next.js",
        description: "Framework baseado em React que facilita a criação de aplicações web com renderização no servidor (SSR)",
    },
    {
        img: "/icon8.png",
        title: "Figma",
        description: "Ferramenta de design de interfaces e prototipação colaborativa, baseada na nuvem",
    },
    {
        img: "/icon4.png",
        title: "Illustrator",
        description: "Software da Adobe focado em design vetorial, ideal para logos, ilustrações e gráficos escaláveis",
    },
    {
        img: "/icon5.png",
        title: "Photoshop",
        description: "Software da Adobe usado para edição e manipulação de imagens rasterizadas (bitmap)",
    },
]
