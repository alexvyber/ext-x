import React from 'react'
import { getStorageData } from '../../utils'

function handle(elName, text) {
    const el = document.querySelector(elName);
    el.value = text
    el.style.height = "360px";
}

const { phrases } = await getStorageData('phrases')

console.log(phrases)
console.log(phrases)
console.log(phrases)
console.log(phrases)

export function Sidebar() {
    return (

        // <h1>asddfasdfasdfasdfasdfadsf</h1>

        <section className="min-h-screen bg-gray-50 py-8" >
            <nav className="top-0 right-0 h-full pb-10 overflow-x-hidden overflow-y-auto transition origin-left transform bg-white border-r md:translate-x-0">
                <nav className="text-sm font-medium text-gray-600" aria-label="Main Navigation">

                    {phrases ? phrases.map(val => <button key={val.title} className="block px-4 py-3 transition cursor-pointer group hover:bg-gray-100 hover:text-gray-900"
                        onClick={() => { handle('textarea', val.text) }} >{val.title}</button>) : <h1>No phrases</h1>}

                </nav>
            </nav>

        </section >
    )
}
