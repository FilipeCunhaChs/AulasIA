"use client"

import Link from "next/link"
import React from "react"


export function Header() {

    return (
        <header className="h-auto w-full static">
            <div className="bg-purple-900">
                <div className="flex justify-between">
                    <Link href="/">
                        <img className="ml-10" src="/logo.png" width='58px' alt="Descrição da imagem" />
                    </Link>
                    <div className="">
                        <Link href="/projetos" className="buttonG mr-15">Projetos</Link>
                        <button className="buttonG mr-15">Sobre mim</button>
                        <button className="buttonG mr-15">Contato</button>
                    </div>
                </div>
            </div>
        </header>
    )
}