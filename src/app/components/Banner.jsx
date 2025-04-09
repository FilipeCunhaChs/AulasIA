"use client"

import React from "react"
import { Bio } from "./Bio"

export function Banner() {
    return (
        <section className="relative w-full h-screen bg-black -z-1 flex items-end">
            <div className="w-full flex justify-around items-end px-4 md:px-16 pb-10 relative">
                <div className="relative w-[220px] xl:w-[800px] -mb-10">
                    <div className="absolute inset-0 z-0 scale-105 purpleG" />
                    <img
                        className="relative w-full z-10 h-200 object-contain"
                        src="/fotom.png"
                        alt="foto"
                    />
                </div>
                <Bio />
                    <div className="loop cubes z-10">
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
        </section>
    )
}
