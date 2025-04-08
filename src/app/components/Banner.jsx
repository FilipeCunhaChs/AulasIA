"use client"

import React from "react"
import { Competencia } from "./Competencia"
import { Bio } from "./Bio"

export function Banner() {
    return (
        <section className="min-w-auto min-h-auto bg-[url('/bg1.jpg')] w-auto bg-cover bg-center h-screen">
            <div className=" flex justify-around ml-44">
                <div className="card flex justify-center mt-52">
                    <img className="rounded-2xl -mt-50" src="/fotom.png" alt="foto" width='auto' />
                </div>
                <Bio />
                <div>
                    <div className="loop cubes">
                        <div className="item cubes" />
                        <div className="item cubes" />
                        <div className="item cubes" />
                        <div className="item cubes" />
                        <div className="item cubes" />
                        <div className="item cubes" />
                    </div>
                    <div className="loop cubes-2">
                        <div className="item cubes-2" />
                        <div className="item cubes-2" />
                        <div className="item cubes-2" />
                        <div className="item cubes-2" />
                        <div className="item cubes-2" />
                        <div className="item cubes-2" />
                    </div>
                </div>
            </div>
        </section>
    )
}
