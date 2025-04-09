"use client"

import Link from "next/link"
import React from "react"


export function Header() {

    return (
        <header className="h-auto w-full static">
            <div className="bg-purple-800">
                <div className="flex justify-between">
                    <img className="ml-10" src="/logo.png" width='58px' alt="Descrição da imagem"/>
                    <div className="">
                        <button className="buttonG mr-15">Projetos</button>
                        <button className="buttonG mr-15">Sobre mim</button>
                        <button className="buttonG mr-15">Contato</button>
                    </div>
                </div>
            </div>
        </header>
    )
}