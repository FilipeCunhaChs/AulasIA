"use client"

import React from "react"

export function Banner() {
    return (
        <div className="min-w-auto min-h-auto bg-[url('/bg1.jpg')] w-auto bg-cover bg-center h-screen">
            <div className=" flex justify-around ml-44">
                <div className="card flex justify-center mt-52">
                    <img className="rounded-2xl -mt-50" src="/fotom.png" alt="foto" width='auto' />
                </div>
                <div className="card2 grid grid-cols-4 content-evenly justify-items-center mt-40">
                    <img src="/icon1.png" alt="html" width='70px' />
                    <img src="/icon2.png" alt="css" width='70px' />
                    <img src="/icon6.png" alt="Javascript" width='65px' />
                    <img src="/icon7.png" alt="Typescript" width='65px' />
                    <img src="/icon3.png" alt="react" width='70px' />
                    <img src="/icon9.png" alt="SQLserver" width='65px' />
                    <img src="/icon10.png" alt="Next" width='65px' />
                    <img src="/icon8.png" alt="Figma" width='65px' />
                    <img src="/icon4.png" alt="illustrator" width='65px' />
                    <img src="/icon5.png" alt="photoshop" width='65px' />
                </div>
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
        </div>
    )
}
